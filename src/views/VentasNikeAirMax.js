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

const VentasNikeAirMax = () => {
  const [data, setData] = useState([]);
  const [regressionData, setRegressionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Parsear CSV del string importado directamente
      Papa.parse(ventasCSV, {
        header: true,
        complete: (result) => {
          try {
            // Filtrar sólo Nike Air Max
            const filtered = result.data.filter(
              (r) =>
                r.nombre_producto === "Nike Air Max" &&
                r.fecha_venta &&
                r.ingreso_total &&
                !isNaN(r.ingreso_total)
            );

            // Sumar ingreso_total por fecha (filtrado)
            const ingresosPorFecha = {};
            filtered.forEach(({ fecha_venta, ingreso_total }) => {
              ingresosPorFecha[fecha_venta] = (ingresosPorFecha[fecha_venta] || 0) + parseFloat(ingreso_total);
            });

            const fechasOrdenadas = Object.keys(ingresosPorFecha).sort();

            const chartData = fechasOrdenadas.map((fecha, i) => ({
              fecha,
              ingreso: ingresosPorFecha[fecha],
            }));

            const regressionInput = chartData.map((p, i) => [i, p.ingreso]);
            const regressionResult = regression.linear(regressionInput);

            const predicted = chartData.map((p, i) => ({
              fecha: p.fecha,
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
          setError("Error parsing CSV: " + err.message);
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
      <h3>Ventas Nike Air Max por Fecha</h3>
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

export default VentasNikeAirMax;
