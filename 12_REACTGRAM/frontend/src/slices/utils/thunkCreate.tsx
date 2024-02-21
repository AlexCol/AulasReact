// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { RootState } from "../../store";
// import { photoService } from "../../services/photoService";


// export const photoThunkCreate = (
// 		thunkName: string,
// 		serviceName: keyof typeof photoService
// 	) => {
// 		return createAsyncThunk(
// 		thunkName,
// 		async (params: {id?: string, data?: {}}, thunkAPI) => {
// 			const rootState = thunkAPI.getState() as RootState;
// 			const token = rootState.auth.authUser?.token;
// 			if(!token)
// 				return thunkAPI.rejectWithValue({errorMessage: "Sem token"});
			
// 			//const data = await photoService.like(id, token);
// 			const data = await photoService[serviceName](params?.data, );
// 			if ("errorMessage" in data) {
// 				return thunkAPI.rejectWithValue(data.errorMessage);
// 			}
// 			return data;
// 		}
// 	);
// }