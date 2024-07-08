// import { createSlice } from '@reduxjs/toolkit';


// // const storedData = localStorage.getItem("data");
// // let parsedData = null;

// // try {
// //     if (storedData && typeof storedData === 'string' && storedData.trim() !== '') {
// //         // eslint-disable-next-line no-unused-vars
// //         parsedData = JSON.parse(storedData);
// //     }
// // } catch (error) {
// //     console.error("Error parsing stored data:", error);
// // }

// // const initialState = {
// //     data: null,
// //     currentUser: null
// // };



// // const tokenLocalStorage = localStorage.getItem("token");
// // console.log(tokenLocalStorage)

// const initialState = {
//     // token : localStorage.getItem("token") || null,
//     isAuthenticated: false,
//     currentUser: null
// };

// const userSlice = createSlice({
//     name: 'user',
//     initialState,

//     reducers: {
//         signInSuccess: (state, action) => {
//             state.isAuthenticated = true;
//             state.currentUser = action.payload;
//             console.log(state.currentUser);
//         },
//     }
// });



// export const { signInSuccess } = userSlice.actions;

// export default userSlice.reducer;






















import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    localstorage: localStorage.getItem("userdata") || null,
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
            localStorage.setItem('userdata', JSON.stringify(action.payload));
            console.log(action.payload)
        },
        logout(state) {
            state.isLoggedIn = false;
            state.userData = null;
            localStorage.removeItem('userdata');
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;