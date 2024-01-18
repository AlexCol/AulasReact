import { useState } from 'react';
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';
import Challenge from './components/Challenge';

function App() {
  const [n, setN] = useState(15);
  function ajustaN() {
    if (n === 15) {
      setN(8);
    } else {
      setN(15);
    }
  }

  const [redTitle, setRedTitle] = useState(true);
  function ajustaTitulo() {
    if (redTitle) {
      setRedTitle(false);
    } else {
      setRedTitle(true);
    }
  }

  return (
    <div className='App'>
      {/* css global */}
      <h1>Hello</h1>
      
      {/* css de componente */}
      <MyComponent />
      <p>Esse paragrafo é do app TSX que teve seu estilo alterado por vazamento de MyComponent</p>

      {/* inline css */}
      <p style={{color: "blue", padding: "25px", backgroundColor:"gray", borderTop:"2px solid red"}}>
        Esse elemento foi estilizado de forma inline.
      </p>

      {/* inline css dinamico*/}
      <h2 style={n < 10 ? {color: "purple"} : {color: 'pink'}}>CssDinamico</h2>
      <button onClick={ajustaN}>Click Me</button>

      {/* classe dinamica*/}
      <button onClick={ajustaTitulo}>Click Me to Adjust Title</button>
      <h2 className={redTitle ? 'red-title' : 'title'}>Esse titulo tem classe dinamica.</h2>      

      {/* css modules */}
      <Title />
      <h2 className='my_title2'>Testando vazamento.</h2>

      {/* challenge */}
      <Challenge />
    </div>
  )
}

export default App
