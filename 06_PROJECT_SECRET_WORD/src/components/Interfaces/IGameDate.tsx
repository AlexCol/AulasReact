export interface IGameData {
    pickedWord: string;
    pickedCategory: string;
    letters: string[];  
    guessedLetters: string[];
    wrongLetters: string[];
    guesses: number;
    score: number;
    finished: boolean;
  }