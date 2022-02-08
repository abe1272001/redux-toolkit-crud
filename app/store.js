import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/Users/index.js';

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
});
