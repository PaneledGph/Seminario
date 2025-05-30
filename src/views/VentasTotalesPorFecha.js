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

import ventasCSV from "../data/ventas_zapatillas.csv?raw";

const VentasTotalesPorFecha = () => {
  const [data, setData] = useState([]);
  const [regressionData, setRegressionData] = useState([]);

  useEffect(() => {
    // Parseamos el CSV importado como string
    const parsed = Papa.parse(ventasCSV, { header: true });
    const rawData = parsed.data;

    // Sumamos ingreso_total por fecha
    const ingresosPorFecha = {};
    rawData.forEach(({ fecha_venta, ingreso_total }) => {
      if (!fecha_venta || !ingreso_total) return;
      ingresosPorFecha[fecha_venta] = (ingresosPorFecha[fecha_venta] || 0) + parseFloat(ingreso_total);
    });

    // Ordenamos fechas
    const fechasOrdenadas = Object.keys(ingresosPorFecha).sort();

    // Creamos array para la gráfica
    const chartData = fechasOrdenadas.map((fecha, i) => ({
      fecha,
      ingreso: ingresosPorFecha[fecha],
    }));

    // Preparamos datos para regresión usando índice como X
    const regressionInput = chartData.map((p, i) => [i, p.ingreso]);
    const regressionResult = regression.linear(regressionInput);

    const predicted = chartData.map((p, i) => ({
      fecha: p.fecha,
      ingreso: regressionResult.predict(i)[1],
    }));

    setData(chartData);
    setRegressionData(predicted);
  }, []);

  return (
    <div>
      <h3>Tendencia Ventas Totales por Fecha</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="fecha" />
          <YAxis />
          <Tooltip />
          <Line dataKey="ingreso" stroke="#8884d8" name="Ingreso Real" />
          <Line data={regressionData} dataKey="ingreso" stroke="#82ca9d" name="Tendencia" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VentasTotalesPorFecha;
