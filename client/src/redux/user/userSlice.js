
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token'),
    isLoggedIn: false,
    userData: null,
    product: []
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
            state.userData = null;
            state.token = null;
            localStorage.removeItem('token');
        },

        productData(state, action) {
            state.product = action.payload
        }
    },
});

export const { login, logout, productData } = userSlice.actions;

export default userSlice.reducer;