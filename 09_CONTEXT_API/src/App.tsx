import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Routs from './component/Routs/Routs'

function App() {
    return (
      <div>
        {/* no caso de haver o browser routes, tudo que estiver fora dele, será exibido em todas as rotas dentro do browser E não pode manipular links*/}
        <h1><u>Context</u></h1>        
        <BrowserRouter>
        {/* no caso de haver o browser routes, tudo que estiver dentro dele, mas fora do Routes, será exibido em todas as rotas dentro do browser E pode manipular links*/}
        <Navbar />
        <Routs/> {/* deixada as rotas em um arquivo diferente para deixar menor o código*/}
        </BrowserRouter>
      </div>
    )
}

export default App
