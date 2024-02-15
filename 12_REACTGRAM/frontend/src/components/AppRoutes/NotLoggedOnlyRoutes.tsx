import { Route } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";



export const NotLoggedOnlyRoutes = (auth: boolean) => {
	return (
		<>
			{/* can only be acceced if logged out */}
			<Route path="/login" element={<RestrictedRoute auth= {auth} canAccessLoggedOut={true}><Login/></RestrictedRoute>}/>
			<Route path="/register" element={<RestrictedRoute auth= {auth} canAccessLoggedOut={true}><Register/></RestrictedRoute>}/>
		</>
	);
}