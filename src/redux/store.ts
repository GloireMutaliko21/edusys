import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});

// store
export default store;

// dispatcher
export type AppDispatcher = typeof store.dispatch;

// get state without selector
export type RootState = ReturnType<typeof store.getState>;
