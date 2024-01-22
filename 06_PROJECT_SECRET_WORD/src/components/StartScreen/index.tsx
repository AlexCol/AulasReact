import './StartScreen.css'

interface Prop {
  startGame: React.MouseEventHandler<HTMLButtonElement>;
}

const StartScreen = ({startGame}: Prop) => {
  return (
    <div className='start'>
        <h1>Secret World</h1>
        <p>Clique no botão abaixo para começar a jogar.</p>
        <button className='btn btn-outline-primary' onClick={startGame}>Começar o Jogo</button>
    </div>
  )
}

export default StartScreen