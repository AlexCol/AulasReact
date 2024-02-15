import { useSelector } from "react-redux";
import { RootState } from "../store";
import { IAuthSate } from "../slices/authSlice";
import { useEffect, useState } from "react";

export const useAuth = () => {
	const { authUser } = useSelector<RootState, IAuthSate>((state) => state.auth);

	const [auth, setAuth] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if(authUser) {
			setAuth(true);
		} else {
			setAuth(false);
		}
		setLoading(false);
	}, [authUser]);

	return {auth, loading};
}