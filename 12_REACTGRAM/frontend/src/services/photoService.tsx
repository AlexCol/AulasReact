import { apiRequests } from "../utils/config";


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


export const photoService = {
	publishPhoto,
	getUserPhotos,
	deletePhoto,
	updatePhoto
}