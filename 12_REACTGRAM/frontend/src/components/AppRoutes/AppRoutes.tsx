import { BrowserRouter, Route, Routes } from "react-router-dom"

//+pages
import Home from "../../pages/Home/Home"
import Login from "../../pages/Auth/Login"
import Register from "../../pages/Auth/Register"
import NotFoundPage from "../../pages/NotFoundPage"

//+components
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

function AppRoutes() {
  return (
		<>
			{/* no caso de haver o browser routes, tudo que estiver fora dele, será exibido em todas as rotas dentro do browser E não pode manipular links*/}
			<BrowserRouter>
				{/* no caso de haver o browser routes, tudo que estiver dentro dele, mas fora do Routes, será exibido em todas as rotas dentro do browser E pode manipular links*/}
				<NavBar />
				<Routes>
					{/* free routes */}
					<Route path='/' element={<Home />}/>

					{/* all RestrictedRoute are by default bloqued, must specify if can be acceced while logged in ou loggedout*/}
					{/* can only be acceced if logged out */}
					<Route path='/login' element={<Login />}/>
					<Route path='/register' element={<Register />}/>

					{/* can only be acceced if logged in */}

					//+No content
					<Route path='*' element={<NotFoundPage />}/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
  )
}
export default AppRoutes