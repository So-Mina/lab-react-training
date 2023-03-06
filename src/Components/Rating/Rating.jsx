import React from 'react'
import './Rating.css'

function Rating({ children }) {
  const filledStars = Math.round(children)
  const emptyStars = 5 - filledStars

  return (
    <div className='Rating'>
      {[...Array(filledStars)].map((_, index) => (
        <span key={index}>★</span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index}>☆</span>
      ))}
    </div>
  )
}

export default Rating
