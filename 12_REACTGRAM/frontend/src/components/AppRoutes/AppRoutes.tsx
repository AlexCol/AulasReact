import { BrowserRouter, Route, Routes } from "react-router-dom"

//+pages
import NotFoundPage from "../../pages/NotFoundPage"

//+hooks
import { useAuth } from "../../hooks/useAuth"

//+components
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { AuthRoutes } from "./AuthRoutes"
import { NotLoggedOnlyRoutes } from "./NotLoggedOnlyRoutes"

//+CSS
import styles from './AppRoutes.module.css';

function AppRoutes() {
  const {loading, auth} = useAuth();

	if(loading)
		return <p>Carregando....</p>
		
	return (
		<>
			{/* no caso de haver o browser routes, tudo que estiver fora dele, será exibido em todas as rotas dentro do browser E não pode manipular links*/}
			<BrowserRouter>
				{/* no caso de haver o browser routes, tudo que estiver dentro dele, mas fora do Routes, será exibido em todas as rotas dentro do browser E pode manipular links*/}
				<NavBar auth={auth}/>
				<div className={styles.container}>
					<Routes>
						{/* free routes */}
						
						{/* can only be acceced if logged in */}
						{AuthRoutes(auth)}

						{/* all RestrictedRoute are by default bloqued, must specify if can be acceced while logged in ou loggedout*/}
						{/* can only be acceced if logged out */}
						{NotLoggedOnlyRoutes(auth)}
						
						//+No content
						<Route path='*' element={<NotFoundPage />}/>
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</>
  )
}
export default AppRoutes

