import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as studentService from './student.service';
import { STATUS } from '@/constants/constants';

const initialState: {
	students: StudentGlobal[];
	selectedSudent: StudentGlobal | null;
	status: {
		isLoading: boolean;
		isSuccess: boolean;
		isError: boolean;
	};
	message: string | null;
} = {
	students: [],
	selectedSudent: null,
	status: {
		isLoading: false,
		isSuccess: false,
		isError: false,
	},
	message: null,
};
const getStudents = createAsyncThunk(
	'students/getAll',
	studentService.getStudents
);

const getStudentById = createAsyncThunk(
	'students/getOne',
	studentService.getStudent
);

const studentSlice = createSlice({
	name: 'student',
	initialState,
	reducers: {
		setStudentIsError: (state, { payload }) => {
			state.status.isError = payload;
		},
		setStudentIsSuccess: (state, { payload }) => {
			state.status.isSuccess = payload;
		},
	},
	extraReducers: (builder) => {
		builder

			// get students
			.addCase(getStudents.pending, (state) => {
				state.status = STATUS.PENDING;
			})
			.addCase(getStudents.fulfilled, (state, { payload }) => {
				state.status = STATUS.SUCCESS;
				state.students = payload.data;
				state.message = null;
			})
			.addCase(getStudents.rejected, (state, { payload }) => {
				state.status = STATUS.ERROR;
				state.message = payload as string;
			})

			// get student by id
			.addCase(getStudentById.pending, (state) => {
				state.status = STATUS.PENDING;
			})
			.addCase(getStudentById.fulfilled, (state, { payload }) => {
				state.status = STATUS.SUCCESS;
				state.selectedSudent = payload.data;
				state.message = null;
			})
			.addCase(getStudentById.rejected, (state, { payload }) => {
				state.status = STATUS.ERROR;
				state.selectedSudent = null;
				state.message = payload as string;
			});
	},
});

// reducer
export default studentSlice.reducer;

//slices
export { getStudents, getStudentById };

//actions
export const { setStudentIsError, setStudentIsSuccess } = studentSlice.actions;
