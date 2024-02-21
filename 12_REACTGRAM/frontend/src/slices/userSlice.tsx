import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/react";
import userService from "../services/userService";
import { RootState } from "../store";
import { IUserData } from "../interfaces/IUserData";


//!declarando interface do state
export interface IUserSate {
	user: IUserData|null,
	error: boolean|[]
	success: boolean,
	loading: boolean,
	message: string
};

//! inicializando state inicial
const initialState: IUserSate = {
	user: null,
	error: false,
	success: false,
	loading: false,
	message: ''
}

// Get user details, for edit data
export const profile = createAsyncThunk(
  "user/profile",
  async (_:undefined, thunkAPI:any) => {
    const rootState = thunkAPI.getState() as RootState;
		const token = rootState.auth.authUser?.token;
		if(!token)
			return thunkAPI.rejectWithValue({errorMessage: "Sem token"});
    
		const data = await userService.profile(token);

    return data;
  }
);

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (user:any, thunkAPI:any) => {
    const rootState = thunkAPI.getState() as RootState;
		const token = rootState.auth.authUser?.token;
		if(!token)
			return thunkAPI.rejectWithValue({errorMessage: "Sem token"});
		
		const data = await userService.updateProfile(user, token);
		if ("errorMessage" in data) {
			return thunkAPI.rejectWithValue(data.errorMessage);
		}
    return data;
  }
);

export const getUserDetails = createAsyncThunk(
  "user/get",
  async (id:string, thunkAPI:any) => {
    const rootState = thunkAPI.getState() as RootState;
		const token = rootState.auth.authUser?.token;
		if(!token)
			return thunkAPI.rejectWithValue({errorMessage: "Sem token"});
		
		const data = await userService.getUserDetails(id, token);
		if ("errorMessage" in data) {
			return thunkAPI.rejectWithValue(data.errorMessage);
		}
    return data;
  }
);

//!slicer
export const userSlice = createSlice({
	name: "user",
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
		.addCase(profile.pending, (state) => {
			state.loading = true;
			state.error = false;
		})
		.addCase(profile.fulfilled, (state, action) => {
			state.loading = false;
			state.success = true;
			state.error = false;
			state.user = action.payload;
		})
		.addCase(updateProfile.pending, (state) => {
			state.loading = true;
			state.error = false;
			state.success = false;
		})
		.addCase(updateProfile.fulfilled, (state, action) => {
			state.loading = false;
			state.error = false;
			state.success = true;
			state.user = action.payload;
			state.message = 'Usuário atualizado com sucesso!'
		})
		.addCase(updateProfile.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload ? JSON.parse(JSON.stringify(action.payload)).errors : action.payload;
			state.success = false;
		})
		.addCase(getUserDetails.pending, (state) => {
			state.loading = true;
			state.error = false;
			state.success = false;
		})
		.addCase(getUserDetails.fulfilled, (state, action) => {
			state.loading = false;
			state.error = false;
			state.success = true;
			state.user = action.payload;
		})
		.addCase(getUserDetails.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload ? JSON.parse(JSON.stringify(action.payload)).errors : action.payload;
			state.success = true;
		})		
	}
});

export const { resetMessage } = userSlice.actions;
export default userSlice.reducer; //authReducer
