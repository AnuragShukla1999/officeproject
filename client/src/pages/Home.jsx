// eslint-disable-next-line no-unused-vars
import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate();
    const { userData } = useSelector((state) => state.user);

    console.log(userData)

    if (!userData) {
        navigate('/')
    }

    return (
        <div className="mt-12">
            <h1 >Home Page</h1>
        </div>
    )
}