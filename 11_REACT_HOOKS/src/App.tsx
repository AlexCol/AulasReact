import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { SomeContext } from './components/HookUseContext'
import { useContext } from 'react'

function App() {
  const {logado, alterarStatus} = useContext(SomeContext); //pra funcionar, essa chamada deve estar em um componente que esteja encapsulado pelo provider
  
  return (
    <div>
      {/*<HookUseContext> --se deixar aqui, não funciona, pois a iniciação da const, acima, estaria fora do contexto */}
      <h1>React Hooks</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About + {logado ? "s" : "n"}</Link>
          </li>
          <li>
            <button onClick={alterarStatus}>{logado ? "Logoff" : 'Login'}</button>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
