import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as classeService from './class.service';
import { STATUS } from '@/constants/constants';

const initialState: {
	classes: Classe[];
	selectedClasse: Classe | null;
	status: {
		isLoading: boolean;
		isSuccess: boolean;
		isError: boolean;
	};
	message: string | null;
} = {
	classes: [],
	selectedClasse: null,
	status: {
		isLoading: false,
		isSuccess: false,
		isError: false,
	},
	message: null,
};
const getClasses = createAsyncThunk('classes/getAll', classeService.getClasses);

const getClasseById = createAsyncThunk(
	'classes/getOne',
	classeService.getClasse
);

const classeSlice = createSlice({
	name: 'classe',
	initialState,
	reducers: {
		setClasseIsError: (state, { payload }) => {
			state.status.isError = payload;
		},
		setClasseIsSuccess: (state, { payload }) => {
			state.status.isSuccess = payload;
		},
	},
	extraReducers: (builder) => {
		builder

			// get classes
			.addCase(getClasses.pending, (state) => {
				state.status = STATUS.PENDING;
			})
			.addCase(getClasses.fulfilled, (state, { payload }) => {
				state.status = STATUS.SUCCESS;
				state.classes = payload.data;
				state.message = null;
			})
			.addCase(getClasses.rejected, (state, { payload }) => {
				state.status = STATUS.ERROR;
				state.message = payload as string;
			})

			// get classe by id
			.addCase(getClasseById.pending, (state) => {
				state.status = STATUS.PENDING;
			})
			.addCase(getClasseById.fulfilled, (state, { payload }) => {
				state.status = STATUS.SUCCESS;
				state.selectedClasse = payload.data;
				state.message = null;
			})
			.addCase(getClasseById.rejected, (state, { payload }) => {
				state.status = STATUS.ERROR;
				state.selectedClasse = null;
				state.message = payload as string;
			});
	},
});

// reducer
export default classeSlice.reducer;

//slices
export { getClasses, getClasseById };

//actions
export const { setClasseIsError, setClasseIsSuccess } = classeSlice.actions;
