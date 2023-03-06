import React, { useState } from 'react'
import './ClickablePicture.css'

const ClickablePicture = ({ img, imgClicked }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className='ClickablePicture'>
    <img
      src={isClicked ? imgClicked : img}
      alt="ClickablePicture"
      onClick={handleClick} />
    </div>
  )
}

export default ClickablePicture
