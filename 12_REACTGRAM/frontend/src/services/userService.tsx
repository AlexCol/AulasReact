import { api } from "../utils/config";
import { handleError } from "./utils/handleError";

//! *****************************************************************************************************************************************
//? A mais enxuta está na 'photoSerice' onde tem melhor reaproveitamento e menos repetição
//! *****************************************************************************************************************************************


const profile = async (token:string) => {
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

const updateProfile = async (data: any, token:string) => {
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

const getUserDetails = async (id: string, token:string) => {
	const response = await api.get(`/users/${id}`, {headers: {Authorization: `Beared ${token}`}})
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