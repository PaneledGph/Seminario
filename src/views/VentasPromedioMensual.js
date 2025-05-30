import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import regression from "regression";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import ventasCSV from '../data/ventas_zapatillas.csv?raw';

const VentasPromedioMensual = () => {
  const [data, setData] = useState([]);
  const [regressionData, setRegressionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      Papa.parse(ventasCSV, {
        header: true,
        complete: (result) => {
          try {
            // Agrupar por mes (yyyy-mm)
            const ingresosPorMes = {};
            result.data.forEach(({ fecha_venta, ingreso_total }) => {
              if (!fecha_venta || !ingreso_total) return;
              const mes = fecha_venta.slice(0, 7);
              ingresosPorMes[mes] = (ingresosPorMes[mes] || 0) + parseFloat(ingreso_total);
            });

            // Ordenar meses
            const mesesOrdenados = Object.keys(ingresosPorMes).sort();

            const chartData = mesesOrdenados.map((mes, i) => ({
              mes,
              ingreso: ingresosPorMes[mes],
            }));

            const regressionInput = chartData.map((p, i) => [i, p.ingreso]);
            const regressionResult = regression.linear(regressionInput);

            const predicted = chartData.map((p, i) => ({
              mes: p.mes,
              ingreso: regressionResult.predict(i)[1],
            }));

            setData(chartData);
            setRegressionData(predicted);
            setLoading(false);
          } catch (e) {
            setError("Error procesando datos: " + e.message);
            setLoading(false);
          }
        },
        error: (err) => {
          setError("Error parseando CSV: " + err.message);
          setLoading(false);
        },
      });
    } catch (e) {
      setError("Error inicial al parsear CSV: " + e.message);
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h3>Ventas Promedio Mensual y Predicción</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Line dataKey="ingreso" stroke="#8884d8" name="Ingreso Real" />
          <Line data={regressionData} dataKey="ingreso" stroke="#82ca9d" name="Tendencia" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VentasPromedioMensual;
