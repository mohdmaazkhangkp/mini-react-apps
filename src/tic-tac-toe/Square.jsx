import React from 'react'
import './style.css'

const Square = ({value, onClick, isWinner}) => {
  return (
    <button onClick={onClick} disabled={isWinner} className='square'>
        <h5 style={{fontSize:"18px"}}>{value}</h5>
    </button>
  )
}

export default Square