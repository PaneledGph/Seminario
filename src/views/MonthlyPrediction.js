import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import * as tf from '@tensorflow/tfjs';
import ventasCSV from '../data/ventas_zapatillas.csv?raw';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Area,
} from 'recharts';

const MonthlyPrediction = () => {
  const [datos, setDatos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [model, setModel] = useState(null);
  const [minIngreso, setMinIngreso] = useState(null);
  const [maxIngreso, setMaxIngreso] = useState(null);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(null);
  const [prediccionMesSeleccionado, setPrediccionMesSeleccionado] = useState(null);
  const [ultimoMesIndex, setUltimoMesIndex] = useState(null);

  const nombreMes = (index) => [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ][index];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await new Promise((resolve, reject) => {
          Papa.parse(ventasCSV, {
            header: true,
            dynamicTyping: true,
            complete: resolve,
            error: reject,
          });
        });

        const filtrados = results.data.filter(
          (r) => r.fecha_venta && r.ingreso_total !== null && !isNaN(r.ingreso_total)
        );

        if (filtrados.length === 0) {
          setError("No se encontraron datos válidos en el CSV.");
          setIsLoading(false);
          return;
        }

        const agrupados = agruparPorMes(filtrados);

        setUltimoMesIndex(agrupados.length - 1);

        const ingresos = agrupados.map(d => d.ingreso);
        const minI = Math.min(...ingresos);
        const maxI = Math.max(...ingresos);
        setMinIngreso(minI);
        setMaxIngreso(maxI);

        const m = await entrenarOCargarModelo(agrupados, minI, maxI);
        setModel(m);

        // Agregar predicciones para meses futuros en el array de datos para gráfico
        const totalMeses = agrupados.length + 3; // predice 3 meses futuros para gráfico
        const xsPred = tf.tensor1d([...Array(totalMeses).keys()]);
        const pred = m.predict(xsPred);
        const valoresNormalizados = await pred.data();
        const predicciones = Array.from(valoresNormalizados);

        const datosCombinados = Array.from({ length: totalMeses }).map((_, i) => {
          const real = agrupados[i]?.ingreso;
          const mesNombre = i < agrupados.length
            ? agrupados[i].mes
            : nombreMes((new Date().getMonth() + (i - agrupados.length + 1)) % 12) + ' (pred)';

          return {
            mes: mesNombre,
            ingreso: real || null,
            prediccion: desnormalizar(predicciones[i], minI, maxI),
          };
        });

        setDatos(datosCombinados);
        setIsLoading(false);
      } catch (err) {
        setError("Error al procesar el CSV: " + err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const agruparPorMes = (data) => {
    const mapaMeses = new Map();
    data.forEach(row => {
      const fecha = new Date(row.fecha_venta);
      const claveMes = fecha.getFullYear() + '-' + String(fecha.getMonth()).padStart(2, '0');
      const mesNombre = nombreMes(fecha.getMonth());

      if (!mapaMeses.has(claveMes)) {
        mapaMeses.set(claveMes, { mes: mesNombre, ingreso: 0 });
      }
      mapaMeses.get(claveMes).ingreso += row.ingreso_total;
    });

    return Array.from(mapaMeses.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([, v]) => v);
  };

  const normalizar = (valor, min, max) => (valor - min) / (max - min);
  const desnormalizar = (valor, min, max) => valor * (max - min) + min;

  const entrenarOCargarModelo = async (data, minI, maxI) => {
    const ingresos = data.map(d => d.ingreso);
    const ingresosNormalizados = ingresos.map(ingreso => normalizar(ingreso, minI, maxI));
    const xs = tf.tensor1d(data.map((_, i) => i));
    const ys = tf.tensor1d(ingresosNormalizados);

    let model;
    try {
      model = await tf.loadLayersModel('localstorage://modelo-prediccion');
      console.log('Modelo cargado desde localStorage');
    } catch (e) {
      console.log('No hay modelo guardado. Entrenando uno nuevo...');
      model = tf.sequential();
      model.add(tf.layers.dense({
        units: 10,
        inputShape: [1],
        activation: 'relu',
        kernelInitializer: tf.initializers.randomNormal({ seed: 42 }),
      }));
      model.add(tf.layers.dense({ units: 1 }));
      model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

      await model.fit(xs, ys, { epochs: 200, verbose: 0 });
      await model.save('localstorage://modelo-prediccion');
      console.log('Modelo guardado en localStorage');
    }
    return model;
  };

  const predecirMes = async (indiceMes) => {
    if (!model || minIngreso === null || maxIngreso === null) return;

    const xPred = tf.tensor2d([indiceMes], [1, 1]);
    const predNorm = model.predict(xPred);
    const predValueNorm = (await predNorm.data())[0];
    const predDesnorm = desnormalizar(predValueNorm, minIngreso, maxIngreso);

    setPrediccionMesSeleccionado(predDesnorm);
  };

  // Opciones para dropdown: próximos 12 meses a partir del último mes de datos
  const generarOpcionesMesesFuturos = () => {
    if (datos.length === 0) return [];
    const opciones = [];

    // Último mes con datos reales (puede ser index de último mes real)
    const ultimoMesReal = datos.filter(d => !d.mes.includes('(pred)')).length - 1;

    const ahora = new Date();
    const añoActual = ahora.getFullYear();
    const mesActual = ahora.getMonth();

    for (let i = 1; i <= 12; i++) {
      const mesIndex = (mesActual + i) % 12;
      const añoIndex = añoActual + Math.floor((mesActual + i) / 12);
      opciones.push({
        label: `${nombreMes(mesIndex)} ${añoIndex}`,
        value: ultimoMesReal + i,
      });
    }
    return opciones;
  };

  const handleChange = (e) => {
    const valor = Number(e.target.value);
    setSelectedMonthIndex(valor);
    predecirMes(valor);
  };

  if (isLoading) return <p>Cargando datos y modelo...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Predicción de Ventas Mensuales</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={datos} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <ReferenceLine y={0} stroke="red" strokeDasharray="5 5" />
          <Area type="monotone" dataKey="ingreso" stroke="green" fillOpacity={0.1} fill="gray" />
          <Line type="monotone" dataKey="ingreso" stroke="green" dot={false} />
          <Line type="monotone" dataKey="prediccion" stroke="blue" dot={false} />
        </LineChart>
      </ResponsiveContainer>

      {/* Dropdown para seleccionar mes futuro */}
      <div className="mt-6 mb-6">
        <label htmlFor="mes-select" className="block mb-2 font-semibold">
          Selecciona un mes para predecir:
        </label>
        <select
          id="mes-select"
          className="border rounded px-3 py-2"
          value={selectedMonthIndex ?? ''}
          onChange={handleChange}
        >
          <option value="" disabled>-- Selecciona un mes --</option>
          {generarOpcionesMesesFuturos().map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Mostrar predicción para el mes seleccionado */}
      {selectedMonthIndex !== null && prediccionMesSeleccionado !== null && (
        <div className="p-4 border rounded shadow bg-blue-50 text-blue-900 max-w-sm">
          <h3 className="text-lg font-semibold mb-2">Predicción para el mes seleccionado:</h3>
          <p>
            <strong>{generarOpcionesMesesFuturos().find(o => o.value === selectedMonthIndex)?.label}</strong>: {' '}
            <span>S/ {prediccionMesSeleccionado.toFixed(2)}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default MonthlyPrediction;
