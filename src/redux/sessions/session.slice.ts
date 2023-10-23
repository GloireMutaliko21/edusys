import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as sessionService from './session.service';
import { STATUS } from '@/constants/constants';

const initialState: {
	sessions: Session[];
	selectedSession: Session | null;
	status: {
		isLoading: boolean;
		isSuccess: boolean;
		isError: boolean;
	};
	message: string | null;
} = {
	sessions: [],
	selectedSession: null,
	status: {
		isLoading: false,
		isSuccess: false,
		isError: false,
	},
	message: null,
};
const getSessions = createAsyncThunk(
	'sessions/getAll',
	sessionService.getSessions
);

const getSessionById = createAsyncThunk(
	'sessions/getOne',
	sessionService.getSession
);

const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		setSessionIsError: (state, { payload }) => {
			state.status.isError = payload;
		},
		setSessionIsSuccess: (state, { payload }) => {
			state.status.isSuccess = payload;
		},
	},
	extraReducers: (builder) => {
		builder

			// get sessions
			.addCase(getSessions.pending, (state) => {
				state.status = STATUS.PENDING;
			})
			.addCase(getSessions.fulfilled, (state, { payload }) => {
				state.status = STATUS.SUCCESS;
				state.sessions = payload.data;
				state.message = null;
			})
			.addCase(getSessions.rejected, (state, { payload }) => {
				state.status = STATUS.ERROR;
				state.message = payload as string;
			})

			// get session by id
			.addCase(getSessionById.pending, (state) => {
				state.status = STATUS.PENDING;
			})
			.addCase(getSessionById.fulfilled, (state, { payload }) => {
				state.status = STATUS.SUCCESS;
				state.selectedSession = payload.data;
				state.message = null;
			})
			.addCase(getSessionById.rejected, (state, { payload }) => {
				state.status = STATUS.ERROR;
				state.selectedSession = null;
				state.message = payload as string;
			});
	},
});

// reducer
export default sessionSlice.reducer;

//slices
export { getSessions, getSessionById };

//actions
export const { setSessionIsError, setSessionIsSuccess } = sessionSlice.actions;
