import React from 'react'
import Square from './Square'
import './App.css'
function Board({squares, onClick}) {
 return (
    <div className='board'>
        {
            squares.map((square,i)=>
            {
                return <Square key={i} value={square} onClick={()=>onClick(i)} />
            })
        }
    </div>
  )
}

export default Board
