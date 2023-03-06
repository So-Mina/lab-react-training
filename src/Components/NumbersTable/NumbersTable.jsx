import React from 'react'
import './NumbersTable.css'

const NumbersTable = ({ limit }) => {
  const numbers = Array.from({ length: limit }, (_, i) => i + 1)

  return (
    <div className="NumbersTable">
      {numbers.map((number) => (
        <div
          key={number}
          className="number"
          style={{ backgroundColor: number % 2 === 0 ? 'red' : 'white',
          color: number % 2 === 0 ? 'white' : 'black' }} >
          {number}
        </div>
      ))}
    </div>
  )
}

export default NumbersTable