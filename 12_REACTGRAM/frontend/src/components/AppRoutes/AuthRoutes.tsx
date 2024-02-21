import { Route } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute";
import Home from "../../pages/Home/Home";
import EditProfile from "../../pages/EditProfile/EditProfile";
import Profile from "../../pages/Profile/Profile";
import Photo from "../../pages/Photo/Photo";

export const AuthRoutes = (auth: boolean) => {
	return (
    <>
        {/* can only be acceced if logged in */}        
				<Route path="/" element={<RestrictedRoute auth= {auth} canAccessLoggeIn={true}><Home/></RestrictedRoute>}/>
				<Route path="/profile" element={<RestrictedRoute auth= {auth} canAccessLoggeIn={true}><EditProfile/></RestrictedRoute>}/>
				<Route path="/users/:id" element={<RestrictedRoute auth= {auth} canAccessLoggeIn={true}><Profile/></RestrictedRoute>}/>
				<Route path="/photos/:id" element={<RestrictedRoute auth= {auth} canAccessLoggeIn={true}><Photo/></RestrictedRoute>}/>
    </>
	);
}