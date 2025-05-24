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
        const { predicciones, minIngreso, maxIngreso } = await generarPredicciones(agrupados);

        const datosCombinados = agrupados.map((item, i) => ({
          mes: item.mes,
          ingreso: item.ingreso,
          prediccion: desnormalizar(predicciones[i], minIngreso, maxIngreso),
        }));

        setDatos(datosCombinados);
        setIsLoading(false);
      } catch (err) {
        setError("Error al procesar el CSV: " + err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const nombreMes = (index) => [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ][index];

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

  const normalizar = (valor, min, max) => {
    return (valor - min) / (max - min);
  };

  const desnormalizar = (valor, min, max) => {
    return valor * (max - min) + min;
  };

  const generarPredicciones = async (data) => {
    const ingresos = data.map(d => d.ingreso);
    const minIngreso = Math.min(...ingresos);
    const maxIngreso = Math.max(...ingresos);
    const ingresosNormalizados = ingresos.map(ingreso => normalizar(ingreso, minIngreso, maxIngreso));
    const xs = tf.tensor1d(data.map((_, i) => i));
    const ys = tf.tensor1d(ingresosNormalizados);

    let model;

    try {
      // Intentamos cargar modelo desde localStorage
      model = await tf.loadLayersModel('localstorage://modelo-prediccion');
      console.log('Modelo cargado desde localStorage');
    } catch (e) {
      console.log('No hay modelo guardado. Entrenando uno nuevo...');
      model = tf.sequential();
      model.add(tf.layers.dense({
        units: 10,
        inputShape: [1],
        activation: 'relu',
        kernelInitializer: tf.initializers.randomNormal({ seed: 42 })
      }));
      model.add(tf.layers.dense({ units: 1 }));
      model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

      await model.fit(xs, ys, { epochs: 200, verbose: 0 });

      // Guardamos el modelo en localStorage
      await model.save('localstorage://modelo-prediccion');
      console.log('Modelo guardado en localStorage');
    }

    const xsPred = tf.tensor1d(data.map((_, i) => i));
    const pred = model.predict(xsPred);
    const valoresNormalizados = await pred.data();
    const predicciones = Array.from(valoresNormalizados);

    return {
      predicciones,
      minIngreso,
      maxIngreso,
    };
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
          <Area
            type="monotone"
            dataKey="ingreso"
            stroke="green"
            fillOpacity={0.1}
            fill="gray"
          />
          <Line type="monotone" dataKey="ingreso" stroke="green" dot={false} />
          <Line type="monotone" dataKey="prediccion" stroke="blue" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyPrediction;
