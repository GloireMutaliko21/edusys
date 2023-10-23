import { AsyncThunkPayloadCreator } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { returnApiError } from '@/utils/api-error.handler';
import { RootState } from '../store';
import { feeTypeUrls } from '../helpers';

interface FeeTypes {
	msg: string;
	data: FeeType[];
}

interface SingleFeeType {
	msg: string;
	data: FeeType;
}

export const getFeeTypes: AsyncThunkPayloadCreator<FeeTypes> = async (
	_,
	thunkAPI
) => {
	const {
		auth: { token },
	} = thunkAPI.getState() as RootState;
	try {
		const response: AxiosResponse<FeeTypes> = await axios.get(
			feeTypeUrls.getAll,
			{ headers: { Authorization: `Bearer ${token}` } }
		);
		return response.data;
	} catch (error) {
		return axios.isAxiosError(error)
			? thunkAPI.rejectWithValue(returnApiError(error))
			: thunkAPI.rejectWithValue('Fetch error');
	}
};

export const getFeeType: AsyncThunkPayloadCreator<
	SingleFeeType,
	string | number
> = async (id, thunkAPI) => {
	const {
		auth: { token },
	} = thunkAPI.getState() as RootState;
	try {
		const response: AxiosResponse<SingleFeeType> = await axios.get(
			feeTypeUrls.getOne(id),
			{ headers: { Authorization: `Bearer ${token}` } }
		);
		return response.data;
	} catch (error) {
		return axios.isAxiosError(error)
			? thunkAPI.rejectWithValue(returnApiError(error))
			: thunkAPI.rejectWithValue('Fetch error');
	}
};
