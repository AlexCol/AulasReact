import { Route } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute";
import Home from "../../pages/Home/Home";



export const AuthRoutes = (
    <>
        {/* can only be acceced if logged in */}
        <Route path="/" element={<RestrictedRoute canAccessLoggeIn={true}><Home/></RestrictedRoute>}/>
    </>
)