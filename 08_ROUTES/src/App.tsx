import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
import Products from './pages/Products/Products'
import Product from './pages/Products/Product'
import ProdInfo from './pages/Products/ProdInfo'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import SearchForm from './components/SearchForm/SearchForm'
import Search from './pages/Search/Search'




function App() {
  return (
    <div>
      {/* no caso de haver o browser routes, tudo que estiver fora dele, será exibido em todas as rotas dentro do browser E não pode manipular links*/}
      <h1>React router</h1> 
      <BrowserRouter>
        {/* no caso de haver o browser routes, tudo que estiver dentro dele, mas fora do Routes, será exibido em todas as rotas dentro do browser E pode manipular links*/}
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/products/:prod_id' element={<Product />}/>
          <Route path='/products/:id/info' element={<ProdInfo />}/>
          <Route path='/search' element={<Search />}/>

          {/* pra usar redirect */}
          <Route path='/company' element={<Navigate to="/about"/>}/>
          {/* rota 'no match' pra usar quando a rota pra pagina solicitada não foi criada */}
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



