import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as feeTypeService from './feeType.service';
import { STATUS } from '@/constants/constants';

const initialState: {
	feeTypes: FeeType[];
	selectedFeeType: FeeType | null;
	status: {
		isLoading: boolean;
		isSuccess: boolean;
		isError: boolean;
	};
	message: string | null;
} = {
	feeTypes: [],
	selectedFeeType: null,
	status: {
		isLoading: false,
		isSuccess: false,
		isError: false,
	},
	message: null,
};
const getFeeTypes = createAsyncThunk(
	'feeTypes/getAll',
	feeTypeService.getFeeTypes
);

const getFeeTypeById = createAsyncThunk(
	'feeTypes/getOne',
	feeTypeService.getFeeType
);

const feeTypeSlice = createSlice({
	name: 'feeType',
	initialState,
	reducers: {
		setFeeTypeIsError: (state, { payload }) => {
			state.status.isError = payload;
		},
		setFeeTypeIsSuccess: (state, { payload }) => {
			state.status.isSuccess = payload;
		},
	},
	extraReducers: (builder) => {
		builder

			// get feeTypes
			.addCase(getFeeTypes.pending, (state) => {
				state.status = STATUS.PENDING;
			})
			.addCase(getFeeTypes.fulfilled, (state, { payload }) => {
				state.status = STATUS.SUCCESS;
				state.feeTypes = payload.data;
				state.message = null;
			})
			.addCase(getFeeTypes.rejected, (state, { payload }) => {
				state.status = STATUS.ERROR;
				state.message = payload as string;
			})

			// get feeType by id
			.addCase(getFeeTypeById.pending, (state) => {
				state.status = STATUS.PENDING;
			})
			.addCase(getFeeTypeById.fulfilled, (state, { payload }) => {
				state.status = STATUS.SUCCESS;
				state.selectedFeeType = payload.data;
				state.message = null;
			})
			.addCase(getFeeTypeById.rejected, (state, { payload }) => {
				state.status = STATUS.ERROR;
				state.selectedFeeType = null;
				state.message = payload as string;
			});
	},
});

// reducer
export default feeTypeSlice.reducer;

//slices
export { getFeeTypes, getFeeTypeById };

//actions
export const { setFeeTypeIsError, setFeeTypeIsSuccess } = feeTypeSlice.actions;
