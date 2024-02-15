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


//!slicer
export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		resetMessage: (state) => {
			state.loading = false;
			state.error = false;
			state.success = false;
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
	}
});







export const { resetMessage } = userSlice.actions;
export default userSlice.reducer; //authReducer
