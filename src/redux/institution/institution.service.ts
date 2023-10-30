import { AsyncThunkPayloadCreator } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { serialize } from 'object-to-formdata';
import { returnApiError } from '@/utils/api-error.handler';
import { RootState } from '../store';
import { institutionUrls } from '../helpers';

interface GetInstitution {
	msg: string;
	data: Institution;
}

export const getInstitution: AsyncThunkPayloadCreator<GetInstitution> = async (
	_,
	thunkAPI
) => {
	const {
		auth: { token },
	} = thunkAPI.getState() as RootState;
	try {
		const response: AxiosResponse<GetInstitution> = await axios.get(
			institutionUrls.getOne,
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		return response.data;
	} catch (error) {
		return axios.isAxiosError(error)
			? thunkAPI.rejectWithValue(returnApiError(error))
			: thunkAPI.rejectWithValue('Fetch error');
	}
};

export const createInstitution: AsyncThunkPayloadCreator<
	Institution,
	CreateInstitutionDto
> = async (payload, thunkAPI) => {
	const {
		auth: { token },
	} = thunkAPI.getState() as RootState;
	try {
		const body = serialize(payload);
		const response: AxiosResponse<Institution> = await axios.post(
			institutionUrls.add,
			body,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'multipart/form-data',
				},
			}
		);
		return response.data;
	} catch (error) {
		return axios.isAxiosError(error)
			? thunkAPI.rejectWithValue(returnApiError(error))
			: thunkAPI.rejectWithValue('Post error');
	}
};

export const updateInstitution: AsyncThunkPayloadCreator<
	Institution,
	UpdateInstitutionDto
> = async (payload, thunkAPI) => {
	const {
		auth: { token },
	} = thunkAPI.getState() as RootState;
	try {
		const body = serialize(payload);
		const response: AxiosResponse<Institution> = await axios.put(
			institutionUrls.update,
			body,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'multipart/form-data',
				},
			}
		);
		return response.data;
	} catch (error) {
		return axios.isAxiosError(error)
			? thunkAPI.rejectWithValue(returnApiError(error))
			: thunkAPI.rejectWithValue('Post error');
	}
};
