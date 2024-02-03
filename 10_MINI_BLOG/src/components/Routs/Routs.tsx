import { BrowserRouter, Route, Routes } from "react-router-dom"
import NoContent from "../../pages/NoContent/NoContent"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import { AuthRoutes } from "./AuthRoutes"
import { NotLoggedOnlyRoutes } from "./NotLoggedOnlyRoutes"
import { FreeRouts } from "./FreeRouts"

const Routs = () => {
  //hack();  
  return (
    <>
        <BrowserRouter>
            <div className="container">
            <Navbar />
            <Routes>
                {/* free routes */}
                {FreeRouts}

                {/* all RestrictedRoute are by default bloqued, must specify if can be acceced while logged in ou loggedout*/}
                {/* can only be acceced if logged out */}
                {NotLoggedOnlyRoutes}

                {/* can only be acceced if logged in */}
                {AuthRoutes}
                
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