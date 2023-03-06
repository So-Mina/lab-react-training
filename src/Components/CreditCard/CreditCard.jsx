import React from 'react'
import './CreditCard.css'
import Visa from '../../assets/images/visa.png'

function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  const maskedNumber = `•••• •••• •••• ${number.slice(-4)}`

  return (
    <div className="creditCardBox">
    <div className="CreditCard" style={{backgroundColor: bgColor, color: color}}>
      <div className='type'>
        <span>{type === "Visa" ? <img src={Visa} width={50} alt="Visa"></img> : 'Master card'}</span>
      </div>
      <div className='number'>
        <span>{maskedNumber}</span>
      </div>
      <div className='infos'>
        <p><span>Expires : {expirationMonth} / {expirationYear}</span>
        <span className='bank'>{bank}</span></p>
        <span>{owner}</span>
      </div>
    </div>
    </div>

  )
}

export default CreditCard