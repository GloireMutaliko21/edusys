import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as institutionService from './institution.service';
import { STATUS } from '@/constants/constants';

const initialState: {
	institution: Institution | null;
	status: {
		isLoading: boolean;
		isSuccess: boolean;
		isError: boolean;
	};
	message: string | null;
} = {
	institution: null,
	status: {
		isLoading: false,
		isSuccess: false,
		isError: false,
	},
	message: null,
};

const getInstitution = createAsyncThunk(
	'institutions/getOne',
	institutionService.getInstitution
);

const updateInstitution = createAsyncThunk(
	'institutions/update',
	institutionService.updateInstitution
);

const institutionSlice = createSlice({
	name: 'institution',
	initialState,
	reducers: {
		setInstitutionIsError: (state, { payload }) => {
			state.status.isError = payload;
		},
		setInstitutionIsSuccess: (state, { payload }) => {
			state.status.isSuccess = payload;
		},
	},
	extraReducers: (builder) => {
		builder

			// get institution
			.addCase(getInstitution.pending, (state) => {
				state.status = STATUS.PENDING;
			})
			.addCase(getInstitution.fulfilled, (state, { payload }) => {
				state.status = STATUS.SUCCESS;
				state.institution = payload.data;
				state.message = null;
			})
			.addCase(getInstitution.rejected, (state, { payload }) => {
				state.status = STATUS.ERROR;
				state.message = payload as string;
			})

			// update institution
			.addCase(updateInstitution.pending, (state) => {
				state.status = STATUS.PENDING;
			})
			.addCase(updateInstitution.fulfilled, (state, { payload }) => {
				state.status = STATUS.SUCCESS;
				state.institution = payload.data;
				state.message = null;
			})
			.addCase(updateInstitution.rejected, (state, { payload }) => {
				state.status = STATUS.ERROR;
				state.message = payload as string;
			});
	},
});

// reducer
export default institutionSlice.reducer;

//slices
export { getInstitution, updateInstitution };

//actions
export const { setInstitutionIsError, setInstitutionIsSuccess } =
	institutionSlice.actions;
