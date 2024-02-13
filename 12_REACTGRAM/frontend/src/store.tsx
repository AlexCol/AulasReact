import { configureStore } from "@reduxjs/toolkit";

//como ele foi exportado como default, pode-se colocar qualquer nome fora de chaves, que o sistema vai reconhecer como o item exportado como 'default'
import authReducer from './slices/authSlice';

export const store = configureStore( {
	reducer: {
		auth: authReducer
	}
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;