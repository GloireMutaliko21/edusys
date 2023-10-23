import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as sectionService from './section.service';
import { STATUS } from '@/constants/constants';

const initialState: {
	sections: Section[];
	selectedSection: Section | null;
	status: {
		isLoading: boolean;
		isSuccess: boolean;
		isError: boolean;
	};
	message: string | null;
} = {
	sections: [],
	selectedSection: null,
	status: {
		isLoading: false,
		isSuccess: false,
		isError: false,
	},
	message: null,
};
const getSections = createAsyncThunk(
	'sections/getAll',
	sectionService.getSections
);

const getSectionById = createAsyncThunk(
	'sections/getOne',
	sectionService.getSection
);

const sectionslice = createSlice({
	name: 'section',
	initialState,
	reducers: {
		setSectionIsError: (state, { payload }) => {
			state.status.isError = payload;
		},
		setSectionIsSuccess: (state, { payload }) => {
			state.status.isSuccess = payload;
		},
	},
	extraReducers: (builder) => {
		builder

			// get sections
			.addCase(getSections.pending, (state) => {
				state.status = STATUS.PENDING;
			})
			.addCase(getSections.fulfilled, (state, { payload }) => {
				state.status = STATUS.SUCCESS;
				state.sections = payload.data;
				state.message = null;
			})
			.addCase(getSections.rejected, (state, { payload }) => {
				state.status = STATUS.ERROR;
				state.message = payload as string;
			})

			// get section by id
			.addCase(getSectionById.pending, (state) => {
				state.status = STATUS.PENDING;
			})
			.addCase(getSectionById.fulfilled, (state, { payload }) => {
				state.status = STATUS.SUCCESS;
				state.selectedSection = payload.data;
				state.message = null;
			})
			.addCase(getSectionById.rejected, (state, { payload }) => {
				state.status = STATUS.ERROR;
				state.selectedSection = null;
				state.message = payload as string;
			});
	},
});

// reducer
export default sectionslice.reducer;

//slices
export { getSections, getSectionById };

//actions
export const { setSectionIsError, setSectionIsSuccess } = sectionslice.actions;
