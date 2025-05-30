import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import regression from "regression";
import ventasCSV from '../data/ventas_zapatillas.csv?raw';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SalesRegressionChart = () => {
  const [data, setData] = useState([]);
  const [regressionData, setRegressionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Ya tienes ventasCSV como texto, parsea directamente
      Papa.parse(ventasCSV, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          const rawData = result.data.filter(
            (row) => row.fecha_venta && row.ingreso_total !== null && !isNaN(row.ingreso_total)
          );

          if (rawData.length === 0) {
            setError("No se encontraron datos válidos en el CSV.");
            setIsLoading(false);
            return;
          }

          const chartData = rawData.map((row) => ({
            fecha: row.fecha_venta,
            ingreso: row.ingreso_total,
          }));

          const regressionInput = chartData.map((point, index) => [index, point.ingreso]);
          const regressionResult = regression.linear(regressionInput);

          const predictedData = chartData.map((point, index) => ({
            fecha: point.fecha,
            ingreso: regressionResult.predict(index)[1],
          }));

          setData(chartData);
          setRegressionData(predictedData);
          setIsLoading(false);
        },
        error: (err) => {
          setError("Error al parsear el CSV: " + err.message);
          setIsLoading(false);
        },
      });
    } catch (err) {
      setError("Error inesperado: " + err.message);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return <p>Cargando datos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Ventas con Regresión Lineal</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="fecha" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="ingreso"
            stroke="#8884d8"
            name="Ventas"
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            data={regressionData}
            dataKey="ingreso"
            stroke="#82ca9d"
            dot={false}
            name="Tendencia"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesRegressionChart;
