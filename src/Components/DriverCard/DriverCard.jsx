
import './DriverCard.css'
import React from 'react'

const DriverCard = ({ name, rating, img, car }) => {
  const { model, licensePlate } = car

  const stars = Math.round(rating)
  const filledStars = '★'.repeat(stars)
  const emptyStars = '☆'.repeat(5 - stars)

  return (
    <div className="DriverCard">
      <div className='DriverImg'>
        <img src={img} alt={name} />
      </div>
      
      <div className="DriverInfos">
        <h2>{name}</h2>
        <p>{filledStars}{emptyStars}</p>
        <p>{model} - {licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard;
