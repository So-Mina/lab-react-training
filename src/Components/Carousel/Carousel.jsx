import React, { useState }  from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0)

  const handlePrevious = () => {
    setIndex((index + images.length - 1) % images.length)
  };

  const handleNext = () => {
    setIndex((index + 1) % images.length)
  };

  return (
    <div className='Carousel'>
      <img src={images[index]} alt="carousel" style={{ height: '200px' }} />
      <div className='button'>
        <button onClick={handlePrevious}>Left</button>
        <button onClick={handleNext}>Right</button>
      </div>
    </div>
  )
}

export default Carousel