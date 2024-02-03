import { Route } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute";
import Loggin from "../../pages/Loggin/Loggin";
import Register from "../../pages/Register/Register";



export const NotLoggedOnlyRoutes = (
    <>
        {/* can only be acceced if logged out */}
        <Route path="/loggin" element={<RestrictedRoute canAccessLoggedOut={true}><Loggin/></RestrictedRoute>}/>
        <Route path="/register" element={<RestrictedRoute canAccessLoggedOut={true}><Register/></RestrictedRoute>}/>
    </>
)