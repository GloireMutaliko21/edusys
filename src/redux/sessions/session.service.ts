import { AsyncThunkPayloadCreator } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { returnApiError } from '@/utils/api-error.handler';
import { RootState } from '../store';
import { sessionUrls } from '../helpers';

interface Sessions {
	msg: string;
	data: Session[];
}

interface SingleSession {
	msg: string;
	data: Session;
}

export const getSessions: AsyncThunkPayloadCreator<Sessions> = async (
	_,
	thunkAPI
) => {
	const {
		auth: { token },
	} = thunkAPI.getState() as RootState;
	try {
		const response: AxiosResponse<Sessions> = await axios.get(
			sessionUrls.getAll,
			{ headers: { Authorization: `Bearer ${token}` } }
		);
		return response.data;
	} catch (error) {
		return axios.isAxiosError(error)
			? thunkAPI.rejectWithValue(returnApiError(error))
			: thunkAPI.rejectWithValue('Fetch error');
	}
};

export const getSession: AsyncThunkPayloadCreator<
	SingleSession,
	string | number
> = async (id, thunkAPI) => {
	const {
		auth: { token },
	} = thunkAPI.getState() as RootState;
	try {
		const response: AxiosResponse<SingleSession> = await axios.get(
			sessionUrls.getOne(id),
			{ headers: { Authorization: `Bearer ${token}` } }
		);
		return response.data;
	} catch (error) {
		return axios.isAxiosError(error)
			? thunkAPI.rejectWithValue(returnApiError(error))
			: thunkAPI.rejectWithValue('Fetch error');
	}
};
