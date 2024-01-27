import { Route, Routes } from 'react-router-dom'
import Contact from '../../pages/Contact/Contact'
import About from '../../pages/About/About'
import Home from '../../pages/Home/Home'

const Routs = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
    </>
  )
}
export default Routs