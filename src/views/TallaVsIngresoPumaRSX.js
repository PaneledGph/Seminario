import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import regression from "regression";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import ventasCSV from '../data/ventas_zapatillas.csv?raw';

const TallaVsIngresoPumaRSX = () => {
  const [data, setData] = useState([]);
  const [regressionLine, setRegressionLine] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      Papa.parse(ventasCSV, {
        header: true,
        complete: (result) => {
          try {
            const filtered = result.data.filter(
              (r) =>
                r.nombre_producto === "Puma RS-X" &&
                r.talla &&
                r.ingreso_total &&
                !isNaN(r.talla) &&
                !isNaN(r.ingreso_total)
            );

            const chartData = filtered.map((row) => ({
              talla: parseFloat(row.talla),
              ingreso: parseFloat(row.ingreso_total),
            }));

            const regressionInput = chartData.map((p) => [p.talla, p.ingreso]);
            const regressionResult = regression.linear(regressionInput);

            const minTalla = Math.min(...chartData.map((p) => p.talla));
            const maxTalla = Math.max(...chartData.map((p) => p.talla));
            const regressionLineData = [
              { talla: minTalla, ingreso: regressionResult.predict(minTalla)[1] },
              { talla: maxTalla, ingreso: regressionResult.predict(maxTalla)[1] },
            ];

            setData(chartData);
            setRegressionLine(regressionLineData);
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
      <h3>Talla vs Ingreso Total (Puma RS-X)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="number" dataKey="talla" name="Talla" />
          <YAxis type="number" dataKey="ingreso" name="Ingreso" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Datos" data={data} fill="#8884d8" />
          <Scatter name="Regresión Lineal" data={regressionLine} fill="#82ca9d" line shape="none" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TallaVsIngresoPumaRSX;
