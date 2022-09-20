import React,{useState} from 'react';
import {CalculateWinner} from './Helper'
import './App.css';
import Board from './Board';
function Game() {
    const [History, setHistory]=useState([Array(9).fill("")]);
    const [stepNumber,setStepNumber]=useState(0);
    const[XIsNext,setXIsNext]= useState(true);
    const winner= CalculateWinner(History[stepNumber]);
    const XO = XIsNext ? "X" : "O";
    const handelClick=(i)=>
    {
        const historyPoint = History.slice(0 ,stepNumber + 1);
        const current =historyPoint[stepNumber];
        const squares=[...current];
        if (winner || squares[i]) return;
        squares[i]= XO;
        setHistory([...historyPoint,squares]);
        setStepNumber(historyPoint.length);
        setXIsNext(!XIsNext)
    }
    const jumpTo=(step)=>
    {
        setStepNumber(step);
        setXIsNext(step % 2 === 0)
    }
    const renderMoves = ()=>
    History.map((_step,Move)=>
    {
        const distination = Move ? `Go to Move #${Move}`: "Go to start";
        return(
            <li key={Move}> 
                <button onClick={()=>jumpTo(Move)}>
                    {distination}
                </button>
            </li>
        );

    })

  return (
    <>
    <h1>React Tic Tac Toe</h1>
    <Board squares={History[stepNumber]}  onClick={handelClick}/>
    <div className='info-wrapper'>
        
        <h3>Histpry: {renderMoves()}</h3>
        <h3>{winner ? "Winner is : " + winner: "Next Player:" + XO}</h3>
    </div>
    </>
  )
}

export default Game
