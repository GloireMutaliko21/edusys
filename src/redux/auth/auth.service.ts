import { AsyncThunkPayloadCreator } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { returnApiError } from '@/utils/api-error.handler';
import { RootState } from '../store';
import { authUrls } from '../helpers';

interface UserConnected {
	msg: string;
	data: User;
	token: string;
}

export const login: AsyncThunkPayloadCreator<
	UserConnected,
	{ email: string; password: string }
> = async (data, thunkAPI) => {
	try {
		const response: AxiosResponse<UserConnected> = await axios.post(
			authUrls.login,
			data
		);
		return response.data;
	} catch (error: any) {
		console.log(error.message);
		return axios.isAxiosError(error)
			? thunkAPI.rejectWithValue(returnApiError(error))
			: thunkAPI.rejectWithValue('Auth error');
	}
};
