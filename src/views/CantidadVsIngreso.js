import { useEffect, useState } from "react"
import Papa from "papaparse"
import * as tf from "@tensorflow/tfjs"
import { useColorModes } from "@coreui/react"
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Label,
} from "recharts"
import ventasCSV from "../data/ventas_zapatillas.csv?raw"

const CantidadVsIngreso = () => {
  const [data, setData] = useState([])
  const [lineData, setLineData] = useState([])
  const [stats, setStats] = useState({})
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const { colorMode } = useColorModes("coreui-free-react-admin-template-theme")

  useEffect(() => {
    const updateTheme = () => {
      if (colorMode === "dark") {
        setIsDarkMode(true)
      } else if (colorMode === "light") {
        setIsDarkMode(false)
      } else if (colorMode === "auto") {
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        setIsDarkMode(systemPrefersDark)
      }
    }

    updateTheme()

    if (colorMode === "auto") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleSystemThemeChange = (e) => {
        setIsDarkMode(e.matches)
      }

      mediaQuery.addEventListener("change", handleSystemThemeChange)
      return () => mediaQuery.removeEventListener("change", handleSystemThemeChange)
    }
  }, [colorMode])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Función para entrenar modelo con TensorFlow.js
  const trainModel = async (inputs, labels) => {
    const model = tf.sequential()
    model.add(tf.layers.dense({ inputShape: [1], units: 1 }))

    model.compile({ optimizer: tf.train.sgd(0.01), loss: "meanSquaredError" })

    const xs = tf.tensor2d(inputs, [inputs.length, 1])
    const ys = tf.tensor2d(labels, [labels.length, 1])

    await model.fit(xs, ys, { epochs: 100, verbose: 0 })

    // Obtener coeficientes
    const weights = model.getWeights()
    const slope = weights[0].dataSync()[0]
    const intercept = weights[1].dataSync()[0]

    // Calcular R^2 manualmente
    const preds = model.predict(xs).dataSync()
    const meanY = labels.reduce((a, b) => a + b, 0) / labels.length

    let ssRes = 0
    let ssTot = 0
    for (let i = 0; i < labels.length; i++) {
      ssRes += (labels[i] - preds[i]) ** 2
      ssTot += (labels[i] - meanY) ** 2
    }
    const r2 = 1 - ssRes / ssTot
    const correlation = Math.sqrt(r2).toFixed(3)

    return { slope, intercept, r2, correlation }
  }

  useEffect(() => {
    Papa.parse(ventasCSV, {
      header: true,
      complete: async (result) => {
        const filtered = result.data.filter(
          (r) =>
            r.cantidad_vendida &&
            r.ingreso_total &&
            !isNaN(r.cantidad_vendida) &&
            !isNaN(r.ingreso_total),
        )

        const chartData = filtered.map((row) => ({
          cantidad: Number.parseFloat(row.cantidad_vendida),
          ingreso: Number.parseFloat(row.ingreso_total),
        }))

        const inputs = chartData.map((p) => p.cantidad)
        const labels = chartData.map((p) => p.ingreso)

        const { slope, intercept, r2, correlation } = await trainModel(inputs, labels)

        // Línea de regresión: solo dos puntos (0 y 7)
        const line = [
          { cantidad: 0, ingreso: intercept },
          { cantidad: 7, ingreso: slope * 7 + intercept },
        ]

        setData(chartData)
        setLineData(line)
        setStats({ slope, intercept, r2, correlation })
        setLoading(false)
      },
    })
  }, [])

  if (loading) return <p>Cargando...</p>

  const getCorrelationStrength = (r) => {
    const absR = Math.abs(Number.parseFloat(r))
    if (absR >= 0.8) return "Muy fuerte"
    if (absR >= 0.6) return "Fuerte"
    if (absR >= 0.4) return "Moderada"
    if (absR >= 0.2) return "Débil"
    return "Muy débil"
  }

  const predictionUnits = [1, 2, 3, 4, 5, 6]

  const theme = {
    background: isDarkMode ? "var(--cui-dark, #212529)" : "var(--cui-light, #f8f9fa)",
    cardBackground: isDarkMode ? "var(--cui-dark-rgb, #343a40)" : "var(--cui-white, #ffffff)",
    textPrimary: isDarkMode ? "var(--cui-light, #f8f9fa)" : "var(--cui-dark, #212529)",
    textSecondary: isDarkMode ? "var(--cui-secondary-color, #adb5bd)" : "var(--cui-secondary-color, #6c757d)",
    textMuted: isDarkMode ? "var(--cui-secondary-color-rgb, #6c757d)" : "var(--cui-secondary-color, #6c757d)",
    gridLine: isDarkMode ? "#495057" : "#e9ecef",
    axisLine: isDarkMode ? "#6c757d" : "#dee2e6",
    dataPoints: "#4A90E2",
    regressionLine: "#E74C3C",
    equation: isDarkMode ? "#6ea8fe" : "var(--cui-primary, #0d6efd)",
    r2: isDarkMode ? "#75b798" : "var(--cui-success, #198754)",
    correlation: isDarkMode ? "#a370f7" : "var(--cui-info, #0dcaf0)",
    slope: isDarkMode ? "#fd7e14" : "var(--cui-warning, #ffc107)",
    prediction: isDarkMode ? "#6ea8fe" : "var(--cui-primary, #0d6efd)",
    shadow: isDarkMode
      ? "var(--cui-box-shadow-dark, 0 0.5rem 1rem rgba(0, 0, 0, 0.15))"
      : "var(--cui-box-shadow, 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075))",
    accentBackground: isDarkMode ? "var(--cui-primary-bg-subtle, #031633)" : "var(--cui-primary-bg-subtle, #cfe2ff)",
    accentText: isDarkMode ? "var(--cui-primary-text-emphasis, #6ea8fe)" : "var(--cui-primary-text-emphasis, #052c65)",
  }

  return (
    <div
      style={{
        backgroundColor: theme.background,
        padding: "20px",
        borderRadius: "var(--cui-border-radius, 0.375rem)",
        fontFamily:
          "var(--cui-font-family-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif)",
        color: theme.textPrimary,
        transition: "all 0.15s ease-in-out",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "4px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span role="img" aria-label="chart" style={{ fontSize: "24px", marginRight: "8px" }}>
            📊
          </span>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: 0, color: theme.textPrimary }}>
            Visualización del Modelo
          </h2>
        </div>
        <div
          style={{
            marginLeft: "auto",
            backgroundColor: theme.accentBackground,
            padding: "4px 10px",
            borderRadius: "var(--cui-border-radius-sm, 0.25rem)",
            transition: "all 0.15s ease-in-out",
          }}
        >
          <span style={{ fontWeight: "500", color: theme.accentText }}>R² = {stats.r2?.toFixed(3)}</span>
        </div>
      </div>
      <p style={{ color: theme.textSecondary, marginTop: "0", marginBottom: "20px", fontSize: "14px" }}>
        Dispersión de datos y línea de regresión lineal
      </p>

      <div
        style={{
          backgroundColor: theme.cardBackground,
          padding: "20px",
          borderRadius: "var(--cui-border-radius, 0.375rem)",
          boxShadow: theme.shadow,
        }}
      >
        <ResponsiveContainer width="100%" height={isMobile ? 240 : 400}>
          <ScatterChart
            margin={{ top: 10, right: 30, left: 20, bottom: 40 }}
            style={{ fontSize: "14px", fontWeight: "400", color: theme.textPrimary }}
          >
            <CartesianGrid stroke={theme.gridLine} strokeDasharray="3 3" />
            <XAxis
              dataKey="cantidad"
              type="number"
              domain={[0, 7]}
              tickCount={7}
              label={{ value: "Cantidad vendida", position: "bottom", offset: 0, fill: theme.textSecondary }}
              stroke={theme.axisLine}
            />
            <YAxis
              dataKey="ingreso"
              type="number"
              domain={[0, "auto"]}
              label={{ value: "Ingreso total", angle: -90, position: "insideLeft", fill: theme.textSecondary }}
              stroke={theme.axisLine}
            />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              wrapperStyle={{
                backgroundColor: theme.cardBackground,
                borderRadius: "var(--cui-border-radius, 0.375rem)",
                boxShadow: theme.shadow,
                fontSize: "14px",
                color: theme.textPrimary,
                padding: "8px",
              }}
              contentStyle={{ backgroundColor: theme.cardBackground }}
            />
            <Legend wrapperStyle={{ fontSize: "14px", fontWeight: "400", color: theme.textSecondary }} />
            <Scatter
              name="Datos"
              data={data}
              fill={theme.dataPoints}
              line={{ stroke: theme.dataPoints }}
              shape="circle"
              lineType="fitting"
              lineJointType="monotoneX"
              lineAnimationDuration={500}
              legendType="circle"
              strokeWidth={2}
            />
            <Scatter
              name="Regresión lineal"
              data={lineData}
              line={{ stroke: theme.regressionLine, strokeWidth: 2 }}
              shape="none"
              legendType="line"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: theme.cardBackground,
            padding: "12px 16px",
            borderRadius: "var(--cui-border-radius, 0.375rem)",
            boxShadow: theme.shadow,
            flex: "1 1 300px",
            minWidth: "300px",
          }}
        >
          <h3
            style={{
              margin: "0 0 8px 0",
              fontWeight: "600",
              color: theme.textPrimary,
            }}
          >
            Estadísticas del modelo
          </h3>
          <p style={{ margin: "4px 0", fontSize: "14px", color: theme.textSecondary }}>
            <strong>Ecuación:</strong>{" "}
            <span
              style={{
                color: theme.equation,
                fontWeight: "600",
              }}
            >
              y = {stats.slope.toFixed(3)}x + {stats.intercept.toFixed(3)}
            </span>
          </p>
          <p style={{ margin: "4px 0", fontSize: "14px", color: theme.textSecondary }}>
            <strong>Coeficiente de correlación (r):</strong>{" "}
            <span
              style={{
                color: theme.correlation,
                fontWeight: "600",
              }}
            >
              {stats.correlation} ({getCorrelationStrength(stats.correlation)})
            </span>
          </p>
          <p style={{ margin: "4px 0", fontSize: "14px", color: theme.textSecondary }}>
            <strong>Coeficiente de determinación (R²):</strong>{" "}
            <span
              style={{
                color: theme.r2,
                fontWeight: "600",
              }}
            >
              {stats.r2.toFixed(3)}
            </span>
          </p>
        </div>

        {predictionUnits.map((cantidad) => {
          const ingresoPredicho = stats.slope * cantidad + stats.intercept
          return (
            <div
              key={cantidad}
              style={{
                backgroundColor: theme.cardBackground,
                padding: "12px 16px",
                borderRadius: "var(--cui-border-radius, 0.375rem)",
                boxShadow: theme.shadow,
                flex: "1 1 150px",
                minWidth: "150px",
                textAlign: "center",
              }}
            >
              <h4
                style={{
                  margin: "0 0 8px 0",
                  fontWeight: "600",
                  color: theme.textPrimary,
                }}
              >
                Predicción
              </h4>
              <p
                style={{
                  margin: 0,
                  fontWeight: "700",
                  color: theme.prediction,
                  fontSize: "18px",
                }}
              >
                {ingresoPredicho.toFixed(0)}
              </p>
              <p style={{ margin: 0, fontSize: "14px", color: theme.textSecondary }}>Cantidad: {cantidad}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CantidadVsIngreso
