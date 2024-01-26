import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
import Products from './pages/Products/Products'




function App() {

  return (
    <div>
      {/* no caso de haver o browser routes, tudo que estiver fora dele, será exibido em todas as rotas dentro do browser E não pode manipular links*/}
      <h1>React router</h1> 
      <BrowserRouter>
        {/* no caso de haver o browser routes, tudo que estiver dentro dele, mas fora do Routes, será exibido em todas as rotas dentro do browser E pode manipular links*/}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/products' element={<Products />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



