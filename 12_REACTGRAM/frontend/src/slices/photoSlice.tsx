import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPhotoData } from "../interfaces/IPhotoData"
import { RootState } from "../store";
import { photoService } from "../services/photoService";


//!declarando interface do state
export interface IPhotoSate {
	photos: IPhotoData[],
	photo: IPhotoData|null,
	error: boolean|[]
	success: boolean,
	loading: boolean,
	message: string
};

//! inicializando state inicial
const initialState: IPhotoSate = {
	photos: [],
	photo: null,
	error: false,
	success: false,
	loading: false,
	message: ''
};

export const publishPhoto = createAsyncThunk(
  "photo/publish",
  async (photo:FormData, thunkAPI:any) => {
    const rootState = thunkAPI.getState() as RootState;
		const token = rootState.auth.authUser?.token;
		if(!token)
			return thunkAPI.rejectWithValue({errorMessage: "Sem token"});
		
		const data = await photoService.publishPhoto(photo, token);
		if ("errorMessage" in data) {
			return thunkAPI.rejectWithValue(data.errorMessage);
		}
    return data;
  }
);

export const getUserPhotos = createAsyncThunk(
  "photo/userphotos",
  async (id:string, thunkAPI:any) => {
    const rootState = thunkAPI.getState() as RootState;
		const token = rootState.auth.authUser?.token;
		if(!token)
			return thunkAPI.rejectWithValue({errorMessage: "Sem token"});
		
		const data = await photoService.getUserPhotos(id, token);
		if ("errorMessage" in data) {
			return thunkAPI.rejectWithValue(data.errorMessage);
		}
    return data;
  }
);

export const deletePhoto = createAsyncThunk(
  "photo/delete",
  async (id:string, thunkAPI) => {
    const rootState = thunkAPI.getState() as RootState;
		const token = rootState.auth.authUser?.token;
		if(!token)
			return thunkAPI.rejectWithValue({errorMessage: "Sem token"});
		
		const data = await photoService.deletePhoto(id, token);
		if ("errorMessage" in data) {
			return thunkAPI.rejectWithValue(data.errorMessage);
		}
    return data;
  }
);

export const updatePhoto = createAsyncThunk(
  "photo/update",
  async ({id, title}: {id: string, title:string}, thunkAPI) => {
    const rootState = thunkAPI.getState() as RootState;
		const token = rootState.auth.authUser?.token;
		if(!token)
			return thunkAPI.rejectWithValue({errorMessage: "Sem token"});
		
		const data = await photoService.updatePhoto({title: title}, id, token);
		if ("errorMessage" in data) {
			return thunkAPI.rejectWithValue(data.errorMessage);
		}
    return data;
  }
);

export const getPhoto = createAsyncThunk(
  "photo/getphoto",
  async (id: string, thunkAPI) => {
    const rootState = thunkAPI.getState() as RootState;
		const token = rootState.auth.authUser?.token;
		if(!token)
			return thunkAPI.rejectWithValue({errorMessage: "Sem token"});
		
		const data = await photoService.getPhoto(id, token);
		if ("errorMessage" in data) {
			return thunkAPI.rejectWithValue(data.errorMessage);
		}
    return data;
  }
);

export const like = createAsyncThunk(
  "photo/like",
  async (id: string, thunkAPI) => {
    const rootState = thunkAPI.getState() as RootState;
		const token = rootState.auth.authUser?.token;
		if(!token)
			return thunkAPI.rejectWithValue({errorMessage: "Sem token"});
		
		//const data = await photoService.like(id, token);
		const data = await photoService['like'](id, token);
		if ("errorMessage" in data) {
			return thunkAPI.rejectWithValue(data.errorMessage);
		}
    return data;
  }
);

export const comment = createAsyncThunk(
  "photo/comment",
  async ({id, comment}: {id: string, comment:string}, thunkAPI) => {
    const rootState = thunkAPI.getState() as RootState;
		const token = rootState.auth.authUser?.token;
		if(!token)
			return thunkAPI.rejectWithValue({errorMessage: "Sem token"});

		const data = await photoService.comment(id, {comment}, token);
		if ("errorMessage" in data) {
			return thunkAPI.rejectWithValue(data.errorMessage);
		}
    return data;
  }
);

export const getPhotos = createAsyncThunk(
  "photo/allphotos",
  async (_: undefined, thunkAPI) => {
    const rootState = thunkAPI.getState() as RootState;
		const token = rootState.auth.authUser?.token;
		if(!token)
			return thunkAPI.rejectWithValue({errorMessage: "Sem token"});

		const data = await photoService.getPhotos(token);
		if ("errorMessage" in data) {
			return thunkAPI.rejectWithValue(data.errorMessage);
		}
    return data;
  }
);

export const photoSlice = createSlice({
	name: "photo",
	initialState,
	reducers: {
		resetMessage: (state) => {
			state.loading = false;
			state.error = false;
			state.success = false;
			state.message = '';
		}
	},
	extraReducers: (builder) => {builder
		.addCase(publishPhoto.pending, (state) => {
			state.loading = true;
			state.error = false;
			state.success = false;
		})
		.addCase(publishPhoto.fulfilled, (state, action) => {
			state.loading = false;
			state.error = false;
			state.success = true;
			state.photo = action.payload;
			(state.photo) ? state.photos.unshift(state.photo) : null;
			state.message = 'Foto publicada com sucesso!'
		})
		.addCase(publishPhoto.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload ? JSON.parse(JSON.stringify(action.payload)).errors : action.payload;
			state.success = false;
			state.photo = null;
		})
		.addCase(getUserPhotos.pending, (state) => {
			state.loading = true;
			state.error = false;
			state.success = false;
		})
		.addCase(getUserPhotos.fulfilled, (state, action) => {
			state.loading = false;
			state.error = false;
			state.success = true;
			state.photos = action.payload;
		})
		.addCase(getUserPhotos.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload ? JSON.parse(JSON.stringify(action.payload)).errors : action.payload;
			state.success = false;
			state.photo = null;
		})
		.addCase(deletePhoto.pending, (state) => {
			state.loading = true;
			state.error = false;
			state.success = false;
		})
		.addCase(deletePhoto.fulfilled, (state, action) => {
			state.loading = false;
			state.error = false;
			state.success = true;
			
			state.photos = state.photos.filter((photo) => photo._id !== action.payload.id); //remover a foto do array, pra não precisar realizar nova requisição
			state.message = action.payload.message;
		})
		.addCase(deletePhoto.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload ? JSON.parse(JSON.stringify(action.payload)).errors : action.payload;
			state.success = false;
			state.photo = null;
		})
		.addCase(updatePhoto.pending, (state) => {
			state.loading = true;
			state.error = false;
			state.success = false;
		})
		.addCase(updatePhoto.fulfilled, (state, action) => {
			state.loading = false;
			state.error = false;
			state.success = true;
			state.photos.map((photo) => {
				if(photo._id === action.payload._id) {
					return photo.title = action.payload.title
				}
				return photo;
			}),
			state.message = 'Foto Atualizada.';
		})
		.addCase(updatePhoto.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload ? JSON.parse(JSON.stringify(action.payload)).errors : action.payload;
			state.success = false;
			state.photo = null;
		})
		.addCase(getPhoto.pending, (state) => {
			state.loading = true;
			state.error = false;
			state.success = false;
		})
		.addCase(getPhoto.fulfilled, (state, action) => {
			state.loading = false;
			state.error = false;
			state.success = true;
			state.photo = action.payload;
		})
		.addCase(getPhoto.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload ? JSON.parse(JSON.stringify(action.payload)).errors : action.payload;
			state.success = false;
			state.photo = null;
		})
		.addCase(like.fulfilled, (state, action) => {
			state.loading = false;
			state.error = false;
			state.success = true;
			if(state.photo?.likes) {
				state.photo.likes.push(action.payload.userId);
			}
			state.photos.map((photo) => {
				if(photo._id === action.payload.photoId) {
					if(photo?.likes)
						photo.likes.push(action.payload.userId);
				}
				return photo;
			});
			state.message = 'Like realizado.';
		})
		.addCase(like.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload ? JSON.parse(JSON.stringify(action.payload)).errors : action.payload;
			state.success = false;
			state.photo = null;
		})
		.addCase(comment.fulfilled, (state, action) => {
			state.loading = false;
			state.error = false;
			state.success = true;
			if(state.photo?.comments) {
				state.photo.comments.push(action.payload.comment);
			}
			state.photos.map((photo) => {
				if(photo._id === action.payload.photoId) {
					if(photo?.comments)
						photo.comments.push(action.payload.comment);
				}
				return photo;
			});
			state.message = 'Like realizado.';
		})
		.addCase(comment.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload ? JSON.parse(JSON.stringify(action.payload)).errors : action.payload;
			state.success = false;
			state.photo = null;
		})
		.addCase(getPhotos.pending, (state) => {
			state.loading = true;
			state.error = false;
			state.success = false;
		})
		.addCase(getPhotos.fulfilled, (state, action) => {
			state.loading = false;
			state.error = false;
			state.success = true;
			state.photos = action.payload;
		})
		.addCase(getPhotos.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload ? JSON.parse(JSON.stringify(action.payload)).errors : action.payload;
			state.success = false;
			state.photo = null;
		})		
	}
});

export const { resetMessage } = photoSlice.actions;
const photoReducer = photoSlice.reducer;
export default photoReducer; //authReducer
