// eslint-disable-next-line no-unused-vars
import React from "react"
// import { Form } from "../component/Form";
import { Sidebar } from "../component/Sidebar";
import { Form } from "../component/Form";
// import { ProductForm } from "../component/ProductForm";
// import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom";

export const Home = () => {

    // const navigate = useNavigate();
    // const { userData } = useSelector((state) => state.user);

    // console.log(userData)

    // if (!userData) {
    //     navigate('/')
    // }
    

    console.log("Home Page is on Screen");

    return (
        <div className="mt-12 flex flex-row">
            {/* <ProductForm/> */}

            {/* <Form/> */}

            <Sidebar/>

            <Form/>
        </div>
    )
}