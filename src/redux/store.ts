import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import studentReducer from './student/student.slice';
import sessionReducer from './sessions/session.slice';
import feeTypeReducer from './feeType/feeType.slice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		student: studentReducer,
		session: sessionReducer,
		feeType: feeTypeReducer,
	},
});

// store
export default store;

// dispatcher
export type AppDispatcher = typeof store.dispatch;

// get state without selector
export type RootState = ReturnType<typeof store.getState>;
