import React from 'react'
import './Random.css'

function Random({ min, max }) {

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

  return (
    <div className="Random">
      <span>Randomn value between {min} and {max} => {randomNumber}</span>
    </div>
  )
}

export default Random