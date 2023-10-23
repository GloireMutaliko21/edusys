import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as staffService from './staff.service';
import { STATUS } from '@/constants/constants';

const initialState: {
	staffs: Staff[];
	selectedStaff: Staff | null;
	status: {
		isLoading: boolean;
		isSuccess: boolean;
		isError: boolean;
	};
	message: string | null;
} = {
	staffs: [],
	selectedStaff: null,
	status: {
		isLoading: false,
		isSuccess: false,
		isError: false,
	},
	message: null,
};
const getStaffs = createAsyncThunk('staffs/getAll', staffService.getStaffs);

const getStaffById = createAsyncThunk('staffs/getOne', staffService.getStaff);

const staffSlice = createSlice({
	name: 'staff',
	initialState,
	reducers: {
		setStaffIsError: (state, { payload }) => {
			state.status.isError = payload;
		},
		setStaffIsSuccess: (state, { payload }) => {
			state.status.isSuccess = payload;
		},
	},
	extraReducers: (builder) => {
		builder

			// get staffs
			.addCase(getStaffs.pending, (state) => {
				state.status = STATUS.PENDING;
			})
			.addCase(getStaffs.fulfilled, (state, { payload }) => {
				state.status = STATUS.SUCCESS;
				state.staffs = payload.data;
				state.message = null;
			})
			.addCase(getStaffs.rejected, (state, { payload }) => {
				state.status = STATUS.ERROR;
				state.message = payload as string;
			})

			// get staff by id
			.addCase(getStaffById.pending, (state) => {
				state.status = STATUS.PENDING;
			})
			.addCase(getStaffById.fulfilled, (state, { payload }) => {
				state.status = STATUS.SUCCESS;
				state.selectedStaff = payload.data;
				state.message = null;
			})
			.addCase(getStaffById.rejected, (state, { payload }) => {
				state.status = STATUS.ERROR;
				state.selectedStaff = null;
				state.message = payload as string;
			});
	},
});

// reducer
export default staffSlice.reducer;

//slices
export { getStaffs, getStaffById };

//actions
export const { setStaffIsError, setStaffIsSuccess } = staffSlice.actions;
