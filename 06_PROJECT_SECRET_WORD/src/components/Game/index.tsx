import { useRef, useState } from 'react';
import { IGameData } from '../Interfaces/IGameDate';
import './Game.css'

interface Prop {
  verifyLetter: Function;
  gameData: IGameData;
}

const Game = ({verifyLetter, gameData}: Prop) => {
  const [letter, setLetter] = useState<string>('');
  //! para fazer o foco voltar a imput
  const inputRef = useRef<HTMLInputElement>(null); // Referência para o input

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter('');
    //! para fazer o foco voltar a imput
    if (inputRef.current) {
      inputRef.current.focus();
    }  
  } 
  
  return (
    <div className='game'>
      <p className="points">
        <span>Pontuação: {gameData.score}</span>
      </p>
      <h1>Dica sobra a palavra.</h1>
      <h3 className='tip'>
        Dica cobra a palavra: <span>{gameData.pickedCategory}</span>
      </h3>
      <p>Você ainda tem {gameData.guesses}{(gameData.guesses > 1) ? " tentativas" : " tentativa"}.</p>
      <div className='wordContainer'>
        {
          gameData.letters.map((letter, i) => {
            if(gameData.guessedLetters.includes(letter)) {
              return <span key={i} className='letter'>{gameData.pickedWord[i]}</span>
            } else {
              return <span key={i} className='blankSquare'></span>
            }
          })
        }
      </div>
      <div className='letterContainer'>
        <p>Tente adivinhar a letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name='letter' 
            value={letter}
            maxLength={1} 
            required={gameData.finished ? false : true}
            disabled={gameData.finished ? true : false}
            ref={inputRef /* para fazer o foco voltar a imput*/} 
            onChange={(e) => setLetter(e.target.value)}
          />
          <button>{gameData.finished ? "Nova palavra." : "Jogar"}</button>
        </form>
      </div>
      <div className='wrongLettersContainer'>
        <p>Letras já utilizadas:</p>
        {
          gameData.wrongLetters.map((letter, indx) => {
            if (indx === 0) {
              return <span key={indx}>{letter}</span>
            }
            return <span key={indx}>, {letter}</span>
          })
        }
      </div>

    </div>
  )
}

export default Game