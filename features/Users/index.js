import { createSlice } from '@reduxjs/toolkit';
import { usersData } from './fake.js';

export const userSlice = createSlice({
	name: 'users',
	initialState: {
		value: usersData,
	},
	reducers: {
		addUser: (state, action) => {
			state.value.push(action.payload);
		},
		deleteUser: (state, action) => {
			state.value = state.value.filter((user) => {
				return user.id !== action.payload;
			});
		},
		updateUser: (state, action) => {
			state.value.map((user) => {
				if (user.id === action.payload.id) {
					user.userName = action.payload.userName;
				}
			});
		},
	},
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
