import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Board from './Components/Board'
import Game from './Components/Game'
import Square from'./Components/Square'

function App() {
  

  return (
    <div className="App flex items-center justify-center h-screen">
     <Game />
    </div>
  )
}

export default App
