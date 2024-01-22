//CSS
import { useEffect, useState } from 'react';
import './App.css'

//DATA
import { wordsList } from './Data/Words';

//COMPONENTS
import StartScreen from './components/StartScreen'
import Game from './components/Game';
import GameOver from './components/GameOver';
import { pickWordAndCCategory, retira_acentos } from './functions/AppFunctions';
import { IGameStage } from './components/Interfaces/IGameStage';

const stage:IGameStage[] = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
];

function App() {
  const qtyGuesses = 5;
  const [gameStage, setGameStage] = useState<IGameStage>(stage[0]);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState<string>("");
  const [pickedCategory, setPickedCategory] = useState<string>("");
  const [letters, setLetters] = useState<string[]>([]);  
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<number>(qtyGuesses);
  const [score, setScore] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);
  


  //+BEGIN GAME FUNCTION+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //starts the secret word game
  const startGame = () => {
    //pick word and pick category
    const {letters, word, category} = pickWordAndCCategory(words);    
    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);

    setFinished(false);    
    clearLetterStates();

    // start the game
    setGameStage(stage[1]);
  }
  //+BEGIN GAME FUNCTION+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  
  
  //*PROCESS THE LETTER INPUT+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const verifyLetter = (letter: string) => {
    if(finished) {
      startGame();
      return;
    }

    const normLetter = retira_acentos(letter).toLowerCase();
    
    if(wrongLetters.includes(normLetter)) {
      return;
    }    
    if (letters.includes(normLetter)) {
      const guessed = guessedLetters.concat(normLetter);
      setGuessedLetters(guessed);
    } else {    
      setGuesses(guesses-1);
      setWrongLetters(wrongLetters.concat(normLetter));
    }
  }
  //*PROCESS THE LETTER INPUT+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //?CLEAR LETTER STATES+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }
  //?CLEAR LETTER STATES+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
   //+RESTART GAME+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const retry_game = () => {
    setGuesses(qtyGuesses);
    setScore(0);
    clearLetterStates();
    setGameStage(stage[0]);
  }  
  //+RESTART GAME+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//?USE EFECTS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
useEffect(() => {
  if (guesses <= 0) {
    setGameStage(stage[2]);
  }
}, [guesses]);

useEffect(() => {
  if (guessedLetters.length === 0) return;
  
  const leftLetters = letters.filter((l) => !guessedLetters.includes(l));  
  if (leftLetters.length === 0) {
    setScore(score + letters.length*10);
    setFinished(true);
  }
}, [guessedLetters]);
//?USE EFECTS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  
  return (
    <div className='App'>
      {gameStage.id === 1 && <StartScreen startGame={startGame}/>}
      {gameStage.id === 2 && <Game verifyLetter = {verifyLetter} gameData={{guessedLetters, guesses, letters, pickedCategory, pickedWord, score, wrongLetters, finished}}/>}
      {gameStage.id === 3 && <GameOver retry_game={retry_game} score={score}/>}
    </div>
  )
}

export default App
