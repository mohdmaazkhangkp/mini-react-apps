import React, { useState } from 'react'
import Square from './Square'

const Board = () => {

    const [values, setValues] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);


    const clickHandler = (index)=>{
        const newValues = [...values];
         if(newValues[index] ===null) newValues[index] = isXTurn ? 'X' : 'O';
         else return;
        setValues(newValues);
        isWinner=false
        setIsXTurn(prev=> !prev);
        
    }

    const playAgainHandler = ()=>{
        setIsXTurn(true);
        setValues(Array(9).fill(null))
    }

    const  checkWinner = ()=>{
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        for(let logic of winnerLogic){
            const[a,b,c] = logic;
            if(values[a]!==null && values[a]===values[b] && values[b]===values[c]) return values[a]
        }
        return false;
    }
    let isWinner = checkWinner();


  return (
    <div className="board-container">
    {isWinner ? <div className='winned'><h3 >Player {isWinner} Won</h3>
    <button onClick={playAgainHandler} style={{backgroundColor:"teal", color:"white", padding:"5px"}}>Play Again</button>
    </div> :
    <h3 style={{marginBottom:"20px"}} >Player {isXTurn ? "X": 'O'} Turn</h3>
    }
    <div className='board-row'>
        <Square value={values[0]} onClick = {()=> clickHandler(0)}  isWinner={isWinner}/>
        <Square value={values[1]} onClick = {()=> clickHandler(1)} isWinner={isWinner}/>
        <Square value={values[2]} onClick = {()=> clickHandler(2)} isWinner={isWinner}/>
    </div>
    <div className='board-row'>
        <Square value={values[3]} onClick = {()=> clickHandler(3)} isWinner={isWinner}/>
        <Square value={values[4]} onClick = {()=> clickHandler(4)} isWinner={isWinner}/>
        <Square value={values[5]} onClick = {()=> clickHandler(5)} isWinner={isWinner}/>
    </div>
    <div className='board-row'>
        <Square value={values[6]} onClick = {()=> clickHandler(6)} isWinner={isWinner}/>
        <Square value={values[7]} onClick = {()=> clickHandler(7)} isWinner={isWinner}/>
        <Square value={values[8]} onClick = {()=> clickHandler(8)} isWinner={isWinner}/>
    </div>
    </div>
  )
}

export default Board