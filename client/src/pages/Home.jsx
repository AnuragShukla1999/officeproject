// eslint-disable-next-line no-unused-vars
import React from "react"
import { Sidebar } from "../component/Sidebar";
import { Form } from "../component/Form";
import Navbar from "../component/Navbar";
// import Footer from "../component/Footer";

export const Home = () => {

    return (
        <div className="flex flex-col">
            <Navbar />
            <div className="flex flex-row">
                <Sidebar />
                <Form />
            </div>
            {/* <Footer/> */}
        </div>
    )
}