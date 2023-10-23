'use client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as authService from './auth.service';
import { STATUS } from '@/constants/constants';

const initialState: {
	user: any;
	status: {
		isLoading: boolean;
		isSuccess: boolean;
		isError: boolean;
	};
	message: string | null;
} = {
	user:
		typeof window !== 'undefined'
			? JSON.parse(window?.localStorage?.getItem('user-session')!)
			: null,
	status: {
		isLoading: false,
		isSuccess: false,
		isError: false,
	},
	message: null,
};

const loginUser = createAsyncThunk('auth/login', authService.login);

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logoutUser: (state) => {
			localStorage.removeItem('user-session');
			state.user = null;
			window.location.replace('/login');
		},
		loadUserData: (
			state,
			{ payload }: { payload: typeof initialState.user }
		) => {
			state.user = payload;
		},
		setAuthIsError: (state, actions) => {
			state.status.isError = actions.payload;
		},
		setAuthIsSuccess: (state, actions) => {
			state.status.isSuccess = actions.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			//login
			.addCase(loginUser.pending, (state) => {
				state.status = STATUS.PENDING;
			})
			.addCase(loginUser.fulfilled, (state, { payload }) => {
				localStorage.setItem('user-session', JSON.stringify(payload.data));
				state.user = payload.data;
				state.message = payload.message;
			})
			.addCase(loginUser.rejected, (state, { payload }) => {
				localStorage.removeItem('user-session');
				state.status = STATUS.ERROR;
				state.message = payload as string;
				state.user = null;
			});
	},
});

// actions
export const { setAuthIsError, setAuthIsSuccess, logoutUser, loadUserData } =
	authSlice.actions;

// slices
export { loginUser };

// reducer
export default authSlice.reducer;
