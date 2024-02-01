import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../../pages/Home/Home"
import About from "../../pages/About/About"
import NoContent from "../../pages/NoContent/NoContent"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Loggin from "../../pages/Loggin/Loggin"
import Register from "../../pages/Register/Register"
import CreatePost from "../../pages/CreatePost/CreatePost"
import Dashboard from "../../pages/Dashboard/Dashboard"
import {RestrictedRoute} from "./RestrictedRoute"

const Routs = () => {
  //hack();  
  return (
    <>
        <BrowserRouter>
            <div className="container">
            <Navbar />
            <Routes>
                {/* free routes */}
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>

                {/* all RestrictedRoute are by default bloqued, must specify if can be acceced while logged in ou loggedout*/}
                {/* can only be acceced if logged out */}
                <Route path="/loggin" element={<RestrictedRoute canAccessLoggedOut={true}><Loggin/></RestrictedRoute>}/>
                <Route path="/register" element={<RestrictedRoute canAccessLoggedOut={true}><Register/></RestrictedRoute>}/>
                
                {/* can only be acceced if logged in */}
                <Route path="/dashboard" element={<RestrictedRoute canAccessLoggeIn={true}><Dashboard/></RestrictedRoute>}/>
                <Route path="/post/create" element={<RestrictedRoute canAccessLoggeIn={true}><CreatePost/></RestrictedRoute>}/>
                //+No content
                <Route path="*" element={<NoContent/>}/>
            </Routes>
          
            </div>
            <Footer />
        </BrowserRouter>
    </>
  )
}
export default Routs;