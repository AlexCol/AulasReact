import { apiRequests } from "../utils/config";

//!ao criar novos, lembrar de padronizar todos os services para recerem os mesmos parametros, para pode ser criado também um 'thunkRequest' que leia todos

const publishPhoto = async (data:FormData, token:string) => {
	return apiRequests('post', '/photos', data, token);
};

const getUserPhotos = async (id:string, token:string) => {
	return apiRequests('get', `/photos/user/${id}`, null, token);
};

const deletePhoto = async (id:string, token:string) => {
	return apiRequests('delete', `/photos/${id}`, null, token);
};

const updatePhoto = async (data:{title: string}, id:string, token:string) => {
	return apiRequests('put', `/photos/${id}`, data, token);
};

const getPhoto = async (id:string, token:string) => {
	return apiRequests('get', `/photos/${id}`, null, token);
};

const like = async (id:string, token:string) => {
	return apiRequests('put', `/photos/like/${id}`, null, token);
};

const comment = async (id:string, data:{comment:string}, token:string) => {
	return apiRequests('put', `/photos/comment/${id}`, data, token);
};

const getPhotos = async (token:string) => {
	return apiRequests('get', `/photos`, null, token);
};


export const photoService = {
	publishPhoto,
	getUserPhotos,
	deletePhoto,
	updatePhoto,
	getPhoto,
	like,
	comment,
	getPhotos
}