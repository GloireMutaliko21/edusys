import { AsyncThunkPayloadCreator } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { returnApiError } from '@/utils/api-error.handler';
import { RootState } from '../store';
import { staffUrls } from '../helpers';

interface Staffs {
	msg: string;
	data: Staff[];
}

interface SingleStaff {
	msg: string;
	data: Staff;
}

export const getStaffs: AsyncThunkPayloadCreator<Staffs> = async (
	_,
	thunkAPI
) => {
	const {
		auth: { token },
	} = thunkAPI.getState() as RootState;
	try {
		const response: AxiosResponse<Staffs> = await axios.get(staffUrls.getAll, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return response.data;
	} catch (error) {
		return axios.isAxiosError(error)
			? thunkAPI.rejectWithValue(returnApiError(error))
			: thunkAPI.rejectWithValue('Fetch error');
	}
};

export const getStaff: AsyncThunkPayloadCreator<
	SingleStaff,
	string | number
> = async (id, thunkAPI) => {
	const {
		auth: { token },
	} = thunkAPI.getState() as RootState;
	try {
		const response: AxiosResponse<SingleStaff> = await axios.get(
			staffUrls.getOne(id),
			{ headers: { Authorization: `Bearer ${token}` } }
		);
		return response.data;
	} catch (error) {
		return axios.isAxiosError(error)
			? thunkAPI.rejectWithValue(returnApiError(error))
			: thunkAPI.rejectWithValue('Fetch error');
	}
};
