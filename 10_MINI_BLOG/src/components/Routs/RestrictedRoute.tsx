import { ReactNode } from "react"
import { useAuthValue } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

interface IRestrictedRouteProps {
    children: ReactNode,
    canAccessLoggeIn?: boolean
    canAccessLoggedOut?: boolean
}

export const RestrictedRoute = ({children, canAccessLoggeIn = false, canAccessLoggedOut = false}: IRestrictedRouteProps) => {
    const user = useAuthValue();

    return (
        <>
        {user
            ?
            canAccessLoggeIn ? children : <Navigate to="/"/>
            :
            canAccessLoggedOut ? children : <Navigate to="/loggin"/>
        }
        </>
    )
}