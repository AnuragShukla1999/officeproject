// eslint-disable-next-line no-unused-vars
import React from "react";
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Dashboard } from "@/layouts";


// eslint-disable-next-line react/prop-types
export const PrivateRoute = () => {
    // const { userData } = useSelector((state) => state.user);

    const isLoggedIn = localStorage.getItem('token');

    // console.log(userData.token)
    console.log(isLoggedIn);

    return (
        isLoggedIn ? <Dashboard/> : <Navigate to={"/"} /> 
    )
}