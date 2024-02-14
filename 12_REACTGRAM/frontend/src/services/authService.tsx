import { IAuthData } from "../interfaces/IAuthData";
import { api, localStorageAuthName } from "../utils/config";

export const register = async(data:any) => {
	try {
		
		const response = await api.post('/users/register', data);
		const logginData:IAuthData = response.data;

		if(response.data) {
			localStorage.setItem(localStorageAuthName, JSON.stringify(response.data));
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

export const logout = () => {
  localStorage.removeItem(localStorageAuthName);
};

export const login = async (data:any) => {
	try {
		const response = await api.post('/users/login', data);
		const logginData:IAuthData = response.data;

		if(response.data) {
			localStorage.setItem(localStorageAuthName, JSON.stringify(response.data));
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
};

export const authService = {
	register, logout, login
}