import React, { useEffect, useState } from 'react'
import Papa from 'papaparse'
import * as tf from '@tensorflow/tfjs'
import ventasCSV from '../data/ventas_zapatillas.csv?raw'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const MonthlyPrediction = () => {
  const [datos, setDatos] = useState([])
  const [prediccion, setPrediccion] = useState(null)

  useEffect(() => {
    Papa.parse(ventasCSV, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        const filtrados = results.data.filter(r => r.fecha_venta && r.ingreso_total)
        const agrupados = agruparPorMes(filtrados)
        setDatos(agrupados)
        entrenarModelo(agrupados)
      },
    })
  }, [])

  const agruparPorMes = (data) => {
    const meses = Array(12).fill(0)
    data.forEach(row => {
      const fecha = new Date(row.fecha_venta)
      const mes = fecha.getMonth()
      meses[mes] += row.ingreso_total
    })
    return meses.map((valor, index) => ({
      mes: nombreMes(index),
      ingreso: valor,
    }))
  }

  const nombreMes = (index) => {
    return [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ][index]
  }

  const entrenarModelo = async (data) => {
    const xs = tf.tensor1d(data.map((_, i) => i)) // 0 a 11
    const ys = tf.tensor1d(data.map(d => d.ingreso))

    const model = tf.sequential()
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }))
    model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' })

    await model.fit(xs, ys, { epochs: 100 })

    const resultado = model.predict(tf.tensor1d([12])) // predecir siguiente mes (diciembre + 1)
    const valor = await resultado.array()
    setPrediccion(valor[0].toFixed(2))
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Predicción de Ventas Mensuales</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={datos} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="ingreso" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      {prediccion && (
        <div className="mt-6 text-lg">
          <strong>Predicción para el próximo mes:</strong> S/ {prediccion}
        </div>
      )}
    </div>
  )
}

export default MonthlyPrediction