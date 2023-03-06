import './BoxColor.css'
import React from 'react'

const BoxColor = ({ r, g, b }) => {

  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  }

  return (
    <div className="BoxColor" style={boxStyle}>
          <p>{`rgb(${r}, ${g}, ${b})`}</p>
    </div> 
  )
}

export default BoxColor
