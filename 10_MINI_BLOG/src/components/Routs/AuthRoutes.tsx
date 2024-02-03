import { Route } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute";
import CreatePost from "../../pages/CreatePost/CreatePost";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Search from "../../pages/Search/Search";
import Post from "../../pages/Post/Post";


export const AuthRoutes = (
    <>
        {/* can only be acceced if logged in */}
        <Route path="/search" element={<RestrictedRoute canAccessLoggeIn={true}><Search/></RestrictedRoute>}/>
        <Route path="/dashboard" element={<RestrictedRoute canAccessLoggeIn={true}><Dashboard/></RestrictedRoute>}/>
        <Route path="/post/create" element={<RestrictedRoute canAccessLoggeIn={true}><CreatePost/></RestrictedRoute>}/>
        <Route path="/posts/:id" element={<RestrictedRoute canAccessLoggeIn={true}><Post/></RestrictedRoute>}/>
    </>
)