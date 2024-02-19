import { IAuthData } from "../interfaces/IAuthData";
import { api, localStorageAuthName } from "../utils/config";
import { handleError } from "./utils/handleError";

//! *****************************************************************************************************************************************
//? A mais enxuta está na 'photoSerice' onde tem melhor reaproveitamento e menos repetição
//! *****************************************************************************************************************************************

const register = async(data:any) => {
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

const logout = () => {
  localStorage.removeItem(localStorageAuthName);
};

const login = async (data:any) => { //!usando no login metodo sem 'try catch' solto, e sim usando o do proprio axios
	const response = await api.post('/users/login', data)
		.then((res) => {
			const logginData:IAuthData = res.data;

			if(res.data._id) {
				localStorage.setItem(localStorageAuthName, JSON.stringify(res.data));
			} else {
				throw new Error("aiai");
			}
			return logginData;
		})
		.catch((error) => {
			return handleError(error);
		});
		return response;
	};


export const authService = {
	register, logout, login
}