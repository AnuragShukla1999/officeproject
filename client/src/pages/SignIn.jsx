// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom';

// import { setToken } from '../redux/user/userSlice.js'
import { useDispatch } from "react-redux";
import { login } from "../redux/user/userSlice.js";

export const SignIn = () => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    // const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
        console.log(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const res = await fetch('http://localhost:7000/api/signin', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            })

            const resData = await res.json();
            console.log(resData);


            // if (resData) {
            //     dispatch(signInSuccess())
            // }

            // if (res.token) {
            //     localStorage.setItem('token', res.token);
            //     // dispatch(setToken(res.token));

            // } else {
            //     alert(res.message);
            // }

            // toast.success("Signed in successfully!");
            // navigate('/home')



            if (res.ok) {
                // localStorage.setItem('token', res.token);
                dispatch(login(resData));
                toast.success("Signed in successfully!");
                navigate('/home');
            } else {
                toast.error("Sign in failed. Please check your credentials.");
            }


        } catch (error) {
            console.log('Error', error)
        }
    }

    // const notify = () => toast('Here is your toast');

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={handleSubmit}
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}