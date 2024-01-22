import React from 'react'
import './GameOver.css'

interface Prop {
  retry_game: React.MouseEventHandler<HTMLButtonElement>;
  score: number;
}

const GameOver = ({retry_game, score}: Prop) => {
  return (
    <div>
      <h1>GameOver</h1>
      <h2>
        A sua Pontuação: <span>{score}</span>
      </h2>
      <br/>
      <button onClick={retry_game}>Reiniciar Jogo</button>
    </div>
  )
}

export default GameOver