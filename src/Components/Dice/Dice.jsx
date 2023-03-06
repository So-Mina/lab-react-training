import React, { useState } from 'react';
import './Dice.css'
import diceEmpty from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

const diceImages = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6,
}

const Dice = () => {
  const [diceValue, setDiceValue] = useState(1)
  const [isRolling, setIsRolling] = useState(false)

  const handleClick = () => {
    if (!isRolling) {
      setIsRolling(true)
      setTimeout(() => {
        setDiceValue(Math.floor(Math.random() * 6) + 1)
        setIsRolling(false)
      }, 1000)
    }
  }

  const diceImageUrl = isRolling ? diceEmpty : diceImages[diceValue]

  return (
    <div className='Dice'>
    <img
      src={diceImageUrl}
      alt="Dice"
      style={{ width: '200px', height: '200px' }}
      onClick={handleClick} />
    </div>
  )
}

export default Dice
