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
	GetInstitution,
	UpdateInstitutionDto
> = async (payload, thunkAPI) => {
	const {
		auth: { token },
	} = thunkAPI.getState() as RootState;
	try {
		const { id, ...rest } = payload;
		const formData = new FormData();

		if (rest.designation) formData.append('designation', rest.designation!);
		if (rest.sigle) formData.append('sigle', rest.sigle!);
		if (rest.staffs_id)
			formData.append('staffs_id', rest.staffs_id?.toString()!);
		if (rest.images?.[0]) formData.append('images', rest.images[0]);
		if (rest.images?.[1]) formData.append('images', rest.images[1]);
		if (rest.images?.[2]) formData.append('images', rest.images[2]);

		// const body = serialize(rest);
		const response: AxiosResponse<GetInstitution> = await axios.patchForm(
			institutionUrls.update(id),
			formData,
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
