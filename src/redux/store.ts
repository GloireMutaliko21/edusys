import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {},
});

// store
export default store;

// dispatcher
export type AppDispatcher = typeof store.dispatch;

// get state without selector
export type RootState = ReturnType<typeof store.getState>;
