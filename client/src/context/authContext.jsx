/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { AuthContext } from "./index.js";
import toast from "react-hot-toast";


const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [product, setProduct] = useState([]);


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);


    const signin = async (userData) => {
        try {
            const res = await fetch('http://localhost:7000/api/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            const resData = await res.json();
            if (res.ok) {
                setUser(resData);
                localStorage.setItem('user', JSON.stringify(resData));
                toast.success('Signed in successfully!');
            } else {
                toast.error('Sign in failed. Please check your credentials.');
            }
            return res;
        } catch (error) {
            console.error('Signin error:', error);
            toast.error('Error signing in. Please try again later.');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };


    const addProductDetail = async (productDetails) => {
        try {
            const res = await fetch('http://localhost:7000/api/productorderdetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productDetails),
                credentials: 'include'
            });

            const resData = await res.json();
            console.log(resData);

            toast.success('Product Created Successfully');

        } catch (error) {
            console.error('Error', error);
        }
    }



    return (
        <AuthContext.Provider value={{ user, setUser, signin, logout, addProductDetail, product, setProduct }}>
            {children}
        </AuthContext.Provider>
    )
};


export default AuthContextProvider;