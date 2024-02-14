import { ReactNode } from "react"
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface IRestrictedRouteProps {
    children: ReactNode,
		canAccessLoggeIn?: boolean
    canAccessLoggedOut?: boolean
}

export const RestrictedRoute = ({children, canAccessLoggeIn = false, canAccessLoggedOut = false}: IRestrictedRouteProps) => {
  const {auth} = useAuth();

	return (
			<>
			{auth
					?
					canAccessLoggeIn ? children : <Navigate to="/"/>
					:
					canAccessLoggedOut ? children : <Navigate to="/login"/>
			}
			</>
	)
}