import { ReactNode } from "react"
import { Navigate } from "react-router-dom";

interface IRestrictedRouteProps {
    children: ReactNode,
		auth: boolean,
		canAccessLoggeIn?: boolean
    canAccessLoggedOut?: boolean
}

export const RestrictedRoute = ({children, auth, canAccessLoggeIn = false, canAccessLoggedOut = false}: IRestrictedRouteProps) => {
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