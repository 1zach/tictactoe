import React from "react"
import { calculateWinner } from "../Helpers"
import Board from "../Components/Board"

const style={
    width:"200px",
    margin:"20px auto",
    height: "200px"
}

export default function Game() {
    const [history, setHistory] = React.useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = React.useState(0)
    const [xIsNext, setXIsNext] = React.useState(true)
    const winner = calculateWinner(history[stepNumber])    
    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1)
        const current = timeInHistory[stepNumber]
        const squares = [...current]

        if(winner || squares[i] ) return;
        squares[i] = xIsNext ? "X" : "O"
        setHistory([...timeInHistory, squares])
        setStepNumber(timeInHistory.length)
        setXIsNext(!xIsNext)

    }

    const jumpTo = step => {
        setStepNumber(step)
        setXIsNext(step % 2 === 0)
    }
    
    const renderMoves = () => (
        history.map((_step, move) => { 
            const destination = move ? `Go to move ${move}`: "Go to start";
            return (
        <li key={move}>
            <button onClick={() => jumpTo(move)} className="p-1 border border-black bg-stone-200 m-1">{destination}</button>
        </li>
        )
    })
    )

    return(
        <div>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={style}>
               <p> {winner ? "Winner: " + winner: "Next Player: " + (xIsNext ? "X" : "O")} </p>
               <ul>
               {renderMoves()}
               </ul>
            </div>
        </div>
    )
}