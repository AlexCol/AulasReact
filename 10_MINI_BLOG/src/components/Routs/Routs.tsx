import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../../pages/Home/Home"
import About from "../../pages/About/About"
import NoContent from "../../pages/NoContent/NoContent"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const Routs = () => {
  return (
    <>
        <BrowserRouter>
            <div className="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>                
                //+No content
                <Route path="*" element={<NoContent/>}/>
            </Routes>            
            </div>
            <Footer />
        </BrowserRouter>
    </>
  )
}
export default Routs