// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const PrivateRoute = () => {
    const { userData } = useSelector((state) => state.user);

    console.log(userData)


    return (
        userData ? <Navigate to={'/home'} /> : <Navigate to={"/"} /> 
    )
}