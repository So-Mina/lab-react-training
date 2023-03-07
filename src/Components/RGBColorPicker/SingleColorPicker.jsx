import React from 'react'
import './RGBColorPicker.css'

const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div className='SingleColorPicker'>
      <label htmlFor={color}>{color.toUpperCase()} :</label>
      <input
        type="number"
        id={color}
        name={color}
        min="0"
        max="255"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default SingleColorPicker