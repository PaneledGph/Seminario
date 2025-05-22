import React, { useEffect, useState } from 'react'
import Papa from 'papaparse'
import ventasCSV from '../data/ventas_zapatillas.csv?raw'

const Top5Zapatillas = () => {
  const [topZapas, setTopZapas] = useState([])

  useEffect(() => {
    Papa.parse(ventasCSV, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        const data = results.data.filter(
          (r) =>
            r.nombre_producto &&
            isNaN(Number(r.nombre_producto)) &&
            r.cantidad_vendida
        )
        const ventasPorProducto = {}

        data.forEach(({ nombre_producto, cantidad_vendida }) => {
          ventasPorProducto[nombre_producto] =
            (ventasPorProducto[nombre_producto] || 0) + cantidad_vendida
        })

        const sorted = Object.entries(ventasPorProducto)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([nombre, total]) => ({ nombre, total }))

        setTopZapas(sorted)
      },
    })
  }, [])

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Top 5 Zapatillas Más Vendidas</h2>
      <ol className="list-decimal list-inside space-y-1">
        {topZapas.map(({ nombre, total }, idx) => (
          <li key={idx} className="text-lg">
            {nombre} - <strong>{total}</strong> unidades
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Top5Zapatillas