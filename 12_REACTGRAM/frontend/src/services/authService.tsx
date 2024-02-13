

import axios from "axios";
import { IAuthData } from "../interfaces/IAuthData";

export const api = axios.create({
    baseURL: "http://localhost:4500/api"
});

const register = async(data:any) => {
	try {
		const response = await api.post('/users/register', data);
		const logginData:IAuthData = response.data;
		if(response.data) {
			localStorage.setItem("auth", JSON.stringify(response.data));			
		}
		return logginData;
	} catch (error: any) {
		if (error.response && error.response.data) {
			const errorMessage = error.response.data;
			return { errorMessage };
		} else {
			console.log(error.message); // Caso não haja uma resposta de erro definida
			return { errorMessage: error.message };
		}
	}
}

export const authService = {
	register
}