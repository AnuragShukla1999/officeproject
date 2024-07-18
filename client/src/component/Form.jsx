import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";

import jsPDF from 'jspdf';

import toast from "react-hot-toast";
import { productData } from "../redux/user/userSlice.js";

export const Form = () => {
    const [productDetails, setProductDetails] = useState({
        fullName: "",
        mobileNo: "",
        email: "",
        completeAddress: "",
        pincode: "",
        state: "",
        city: "",
        landmark: "",
        orderId: "",
        orderDate: "",
        paymentMode: "",
        productName: "",
        category: "",
        quantity: "",
        orderValue: "",
        hsn: "",
        physicalWeight: "",
        length: "",
        breadth: "",
        height: "",
        courierservices: "",
        amount: ""

    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
        console.log(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:7000/api/productorderdetails', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productDetails),
                credentials: 'include'
            });
            const resData = await res.json();
            console.log(resData);

            dispatch(productData(resData))

            generatePDF(productDetails);

            window.print();
            toast.success("Product Created Successfully");

            setProductDetails({
                fullName: "",
                mobileNo: "",
                email: "",
                completeAddress: "",
                pincode: "",
                state: "",
                city: "",
                landmark: "",
                orderId: "",
                orderDate: "",
                paymentMode: "",
                productName: "",
                category: "",
                quantity: "",
                orderValue: "",
                hsn: "",
                physicalWeight: "",
                length: "",
                breadth: "",
                height: "",
                courierservices: "",
                amount: ""
            });
        } catch (error) {
            console.log('Error', error)
        }
    };

    const generatePDF = (formData) => {
        const doc = new jsPDF();
        doc.text(`Name: ${formData.name}`, 10, 10);
        doc.text(`Email: ${formData.email}`, 10, 20);
        doc.save('form-data.pdf');
    };

    return (

        <>
            <div className="w-full">
                {/* Consignee Details */}
                <div>
                    <h3>*All Fields Required</h3>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="m-4 mt-10 ">

                        <div className="flex flex-row gap-3 items-center mb-4">
                            <div className="w-6 bg-blue-950 h-6 rounded-xl text-white flex items-center justify-center">1</div>
                            <div><h1 className="text-2xl font-semibold">Consignee Details</h1></div>
                        </div>

                        <div className="grid grid-cols-4 gap-3">
                            <div className="flex flex-col ">
                                <label htmlFor="fullName" className=" text-sm font-medium leading-6 text-gray-900">Costumer Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col ">
                                <label htmlFor="mobileNo" className=" text-sm font-medium leading-6 text-gray-900">Mobile No</label>
                                <input
                                    type="number"
                                    name="mobileNo"
                                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col ">
                                <label htmlFor="email" className=" text-sm font-medium leading-6 text-gray-900">Email Id</label>
                                <input
                                    type="email"
                                    name="email"
                                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}

                                />
                            </div>
                        </div>

                    </div>





                    <div className="m-4 mt-10">

                        <div className="flex flex-row gap-3 items-center mb-4">
                            <div className="w-6 bg-blue-950 h-6 rounded-xl text-white flex items-center justify-center">2</div>
                            <h1 className="text-2xl">Constumer Address</h1>
                        </div>

                        <div className="grid grid-cols-4 gap-3">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="completeAddress" className=" text-sm font-medium leading-6 text-gray-900">Complete Address</label>
                                <input
                                    type="text"
                                    name="completeAddress"
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="pincode" className=" text-sm font-medium leading-6 text-gray-900">Pincode</label>
                                <input
                                    type="number"
                                    name="pincode"
                                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="state" className=" text-sm font-medium leading-6 text-gray-900">State</label>
                                <input
                                    type="text"
                                    name="state"
                                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="city" className=" text-sm font-medium leading-6 text-gray-900">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="landmark" className=" text-sm font-medium leading-6 text-gray-900">Famous Landmark</label>
                                <input
                                    type="text"
                                    name="landmark"
                                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>



                    <div className="m-4 mt-10">
                        <div className="flex flex-row gap-3 items-center mb-4">
                            <div className="w-6 bg-blue-950 h-6 rounded-xl text-white flex items-center justify-center">3</div>
                            <h1 className="text-2xl">Order Details</h1>
                        </div>

                        <div className="grid grid-cols-4 gap-3">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="orderId" className=" text-sm font-medium leading-6 text-gray-900">Order id</label>
                                <input
                                    type="text"
                                    name="orderId"
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="orderDate" className="text-sm font-medium leading-6 text-gray-900">Order Date</label>
                                <input
                                    type="date"
                                    name="orderDate"
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2 border-1 border-black">
                                <label htmlFor="paymentMode" className="text-sm font-medium leading-6 text-gray-900">Payment Mode</label>
                                <select name="paymentMode" onChange={handleChange} className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option value="cod">COD</option>
                                    <option value="prepaid">Prepaid Card</option>
                                </select>
                            </div>


                            <div className="flex flex-col gap-2">
                                <label htmlFor="productName" className="text-sm font-medium leading-6 text-gray-900">Product Name</label>
                                <input
                                    type="text"
                                    name="productName"
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="category" className="text-sm font-medium leading-6 text-gray-900">Category</label>
                                <select name="category" onChange={handleChange} className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option value="accessories">Accessories</option>
                                    <option value="fashion and clothing">Fashion & Clothing</option>
                                    <option value="accessories">Beauty and & Stationary</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="fmcg">FMCG</option>
                                    <option value="footwear">Footwear</option>
                                    <option value="toys">Toys</option>
                                    <option value="sports equipment">Sports Equipment</option>
                                    <option value="others">Others</option>
                                    <option value="wellness">Wellness</option>
                                    <option value="medicines">Medicines</option>
                                </select>
                            </div>


                            <div className="flex flex-col gap-2">
                                <label htmlFor="quantity" className="text-sm font-medium leading-6 text-gray-900">Quantity (In Numbers)</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    onChange={handleChange}
                                />
                            </div>


                            <div className="flex flex-col gap-2">
                                <label htmlFor="orderValue" className="text-sm font-medium leading-6 text-gray-900">Order Value (In Numbers)</label>
                                <input
                                    type="number"
                                    name="orderValue"
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="hsn" className="text-sm font-medium leading-6 text-gray-900">HSN</label>
                                <input
                                    type="text"
                                    name="hsn"
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>


                        <button className="flex flex-row mt-5 items-center gap-2 bg-green-500 p-2 pr-3 pl-3 rounded-full text-sm text-white">
                            <div>
                                <FaPlus />
                            </div>
                            Add More Item
                        </button>


                        <div className="flex flex-row gap-8 mt-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="physicalWeight" className="text-sm font-medium leading-6 text-gray-900">Physical Weight</label>
                                <input
                                    type="text"
                                    name="physicalWeight"
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    onChange={handleChange}
                                />
                            </div>


                            <div className="flex flex-col gap-2">
                                <label htmlFor="length" className="text-sm font-medium leading-6 text-gray-900">Length</label>
                                <input
                                    type="number"
                                    name="length"
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    onChange={handleChange}
                                />
                            </div>


                            <div className="flex flex-col gap-2">
                                <label htmlFor="breadth" className="text-sm font-medium leading-6 text-gray-900">Breadth</label>
                                <input
                                    type="number"
                                    name="breadth"
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    onChange={handleChange}
                                />
                            </div>


                            <div className="flex flex-col gap-2">
                                <label htmlFor="height" className="text-sm font-medium leading-6 text-gray-900">Height</label>
                                <input
                                    type="number"
                                    name="height"
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="m-4 mt-10">
                        <div className="flex flex-row gap-3 items-center mb-4">
                            <div className="w-6 bg-blue-950 h-6 rounded-xl text-white flex items-center justify-center">4</div>
                            <h1 className="text-2xl">Forwarding Through</h1>
                        </div>


                        <div className="flex flex-col gap-2">
                            <label htmlFor="courierservices" className="text-sm font-medium leading-6 text-gray-900">courier services</label>
                            <select name="courierservices" onChange={handleChange} className="w-60 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value="xpressbees">Xpressbees</option>
                                <option value="dtdc">DTDC Courier Service.</option>
                                <option value="delhivery">Delhivery</option>
                                <option value="indiaPost">IndiaPost</option>
                                <option value="bluedart">Blue Dart Express</option>
                            </select>
                        </div>

                    </div>


                    <div className="m-4 mt-10">
                        <div className="flex flex-row gap-3 items-center mb-4">
                            <div className="w-6 bg-blue-950 h-6 rounded-xl text-white flex items-center justify-center">5</div>
                            <h1 className="text-2xl">Total Amount</h1>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="amount">Amount</label>
                            <input
                                type="number"
                                name="amount"
                                className="w-60 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button type="submit" className="bg-blue-950 m-10 p-2 w-28 text-white rounded-lg text-xl">Add Order</button>

                </form>
            </div>
        </>
    )
}