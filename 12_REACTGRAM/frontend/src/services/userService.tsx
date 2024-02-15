import { api } from "../utils/config";

export const profile = async (token:string) => {
	const response = await api.get('/users/profile', {headers: {Authorization: `Beared ${token}`}})
		.then((res) => {
			if(!res.data) {
				throw new Error("Empty Data");
			}
			return res.data;
		})
		.catch((error) => {
			if (error.response && error.response.data) {
				const errorMessage = error.response.data;
				return { errorMessage };
			} else {
				console.log(error.message); // Caso não haja uma resposta de erro definida
				return { errorMessage: error.message };
			}
		});
		return response;
	};

	const userService = {
		profile
	};
	
	export default userService;