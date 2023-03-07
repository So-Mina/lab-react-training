import React, { useState } from 'react';
import './RGBColorPicker.css'
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleChange = (color, value) => {
    switch (color) {
      case 'r':
        setRValue(value)
        break;
      case 'g':
        setGValue(value)
        break;
      case 'b':
        setBValue(value)
        break;
      default:
        break;
    }
  };

  const color = `rgb(${rValue}, ${gValue}, ${bValue})`

  return (
    <div className='RGBColorPicker'>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: color,
          margin: '20px 0',
        }}>
        
      </div>
      
      <div className='SingleBox'>
        <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(value) => handleChange('r', value)} />

        <SingleColorPicker
          color="g"
          value={gValue}
          onChange={(value) => handleChange('g', value)} />

        <SingleColorPicker
          color="b"
          value={bValue}
          onChange={(value) => handleChange('b', value)} />

        <p className='Color'>{color}</p>
      </div>
    </div>
  );
};

export default RGBColorPicker;
