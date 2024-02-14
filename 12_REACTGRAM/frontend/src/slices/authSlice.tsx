import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAuthData } from "../interfaces/IAuthData";
import { authService } from "../services/authService";
import { localStorageAuthName } from "../utils/config";

//!declarando interface do state
export interface IAuthSate {
	authUser: IAuthData|null,
	error: boolean|[]
	success: boolean,
	loading: boolean	
};

//! buscando dados do local storge, pra ver se já não tem cadastro
const localStorageValue = localStorage.getItem(localStorageAuthName);
const loggedData:IAuthData = localStorageValue ? JSON.parse(localStorageValue) : null;

//! inicializando state inicial
const initialState: IAuthSate = {
	authUser: loggedData,
	error: false,
	success: false,
	loading: false	
}


//!thunks
export const register = createAsyncThunk(
	"auth/register",
	async (user: any, thunkAPI) => {
		const data = await authService.register(user);

		//+check for errors
		if ("errorMessage" in data) {
			return thunkAPI.rejectWithValue(data.errorMessage);
		}

		return data;
	}
);

export const logout = createAsyncThunk(
	"auth/logout", 
	async () => {
  	await authService.logout();
	}
);

export const login = createAsyncThunk(
	"auth/login", 
	async (user: any, thunkAPI) => {
		const data = await authService.login(user);
		//+check for errors
		if ("errorMessage" in data) {
			return thunkAPI.rejectWithValue(data.errorMessage);
		}
		return data;
	}
);

//!slicer
export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: (state) => {
			state.loading = false;
			state.error = false;
			state.success = false;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.loading = true;
				state.error = false;
				state.success = false;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.loading = false;
				state.error = false;
				state.success = true;
				state.authUser = action.payload;
			})
			.addCase(register.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload ? JSON.parse(JSON.stringify(action.payload)).errors : '';
				state.success = true;
				state.authUser = null;
			})
			.addCase(logout.fulfilled, (state) => {
				state.loading = false;
        state.error = false;
				state.success = true;
				state.authUser = null;
      })
			.addCase(login.pending, (state) => {
				state.loading = true;
				state.error = false;
				state.success = false;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false;
				state.error = false;
				state.success = true;
				state.authUser = action.payload;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload ? JSON.parse(JSON.stringify(action.payload)).errors : '';
				state.success = true;
				state.authUser = null;
			})
	}
});

export const { reset } = authSlice.actions;
export default authSlice.reducer; //authReducer
