import { api } from "../utils/config";
import { handleError } from "./utils/handleError";

export const profile = async (token:string) => {
	const response = await api.get('/users/profile', {headers: {Authorization: `Beared ${token}`}})
		.then((res) => {
			if(!res.data) {
				throw new Error("Empty Data");
			}
			return res.data;
		})
		.catch((error) => {
			return handleError(error);
		});
		return response;
};

export const updateProfile = async (data: any, token:string) => {
	const response = await api.put('/users', data, {headers: {Authorization: `Beared ${token}`}})
		.then((res) => {
			if(!res.data) {
				throw new Error("Empty Data");
			}
			return res.data;
		})
		.catch((error) => {
			return handleError(error);
		});
		return response;
};

export const getUserDetails = async (id: string, token:string) => {
	const response = await api.put(`/users/${id}`, {headers: {Authorization: `Beared ${token}`}})
		.then((res) => {
			if(!res.data) {
				throw new Error("Empty Data");
			}
			return res.data;
		})
		.catch((error) => {
			return handleError(error);
		});
		return response;
};

	const userService = {
		profile,
		updateProfile,
		getUserDetails
	};
	
	export default userService;