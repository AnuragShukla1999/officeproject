
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token'),
    isLoggedIn: false,
    userData: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.userData = action.payload;
            state.isLoggedIn = true;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        },
        logout(state) {
            state.isLoggedIn = false;
            state.token = null;
            localStorage.removeItem('token');
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;