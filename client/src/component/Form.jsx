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



            // handlePrint();
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
        doc.text(`Name: ${formData.fullName}`, 10, 10);
        doc.text(`Email: ${formData.email}`, 10, 20);
        doc.text(`mobileNo: ${formData.mobileNo}`, 10, 30);
        doc.text(`completeAddress: ${formData.completeAddress}`, 10, 40);
        doc.text(`pincode: ${formData.pincode}`, 10, 50);
        doc.text(`state: ${formData.state}`, 10, 60);
        doc.text(`city: ${formData.city}`, 10, 70);
        doc.text(`landmark: ${formData.landmark}`, 10, 80);
        doc.text(`orderId: ${formData.orderId}`, 10, 90);
        doc.text(`orderDate: ${formData.orderDate}`, 10, 100);
        doc.text(`paymentMode: ${formData.paymentMode}`, 10, 110);
        doc.text(`productName: ${formData.productName}`, 10, 120);
        doc.text(`quantity: ${formData.quantity}`, 10, 130);
        doc.text(`orderValue: ${formData.orderValue}`, 10, 140);
        doc.text(`hsn: ${formData.hsn}`, 10, 150);
        doc.text(`physicalWeight: ${formData.physicalWeight}`, 10, 160);
        doc.text(`breadth: ${formData.breadth}`, 10, 170);
        doc.text(`height: ${formData.height}`, 10, 180);
        doc.text(`courierservices: ${formData.courierservices}`, 10, 190);
        doc.text(`amount: ${formData.amount}`, 10, 200);
        doc.save('form-data.pdf');
    };


    const handleSubmitPdf = () => {
        generatePDF(productDetails);
    }

    //     const printContent = `
    //         <h1>Product Details:</h1>
    //         <p><strong>Full Name:</strong> ${productDetails.fullName}</p>
    //         <p><strong>Mobile No:</strong> ${productDetails.mobileNo}</p>
    //         <p><strong>Email:</strong> ${productDetails.email}</p>
    //         <p><strong>Complete Address:</strong> ${productDetails.completeAddress}</p>
    //         <p><strong>Pincode:</strong> ${productDetails.pincode}</p>
    //         <p><strong>State:</strong> ${productDetails.state}</p>
    //         <p><strong>City:</strong> ${productDetails.city}</p>
    //         <p><strong>Landmark:</strong> ${productDetails.landmark}</p>
    //         <p><strong>Order ID:</strong> ${productDetails.orderId}</p>
    //         <p><strong>Order Date:</strong> ${productDetails.orderDate}</p>
    //         <p><strong>Payment Mode:</strong> ${productDetails.paymentMode}</p>
    //         <p><strong>Product Name:</strong> ${productDetails.productName}</p>
    //         <p><strong>Category:</strong> ${productDetails.category}</p>
    //         <p><strong>Quantity:</strong> ${productDetails.quantity}</p>
    //         <p><strong>Order Value:</strong> ${productDetails.orderValue}</p>
    //         <p><strong>HSN:</strong> ${productDetails.hsn}</p>
    //         <p><strong>Physical Weight:</strong> ${productDetails.physicalWeight}</p>
    //         <p><strong>Length:</strong> ${productDetails.length}</p>
    //         <p><strong>Breadth:</strong> ${productDetails.breadth}</p>
    //         <p><strong>Height:</strong> ${productDetails.height}</p>
    //         <p><strong>Courier Services:</strong> ${productDetails.courierservices}</p>
    //         <p><strong>Amount:</strong> ${productDetails.amount}</p>
    //     `;

    //     const popupWin = window.open('', '_blank', 'width=600,height=600');
    //     popupWin.document.open();
    //     popupWin.document.write(`
    //         <html>
    //             <head>
    //                 <title>Print Product Details</title>
    //                 <style>
    //                     body {
    //                         font-family: Arial, sans-serif;
    //                         padding: 20px;
    //                     }
    //                     h1 {
    //                         color: #333;
    //                     }
    //                     p {
    //                         margin-bottom: 10px;
    //                     }
    //                 </style>
    //             </head>
    //             <body>${printContent}</body>
    //         </html>`
    //     );
    //     popupWin.document.close();
    //     popupWin.focus();
    //     popupWin.print();
    //     popupWin.close();
    // };

    return (

        <>
            <div className="w-full">
                {/* Consignee Details */}
                <div className="mt-6 ml-4">
                    <h3> <span className="text-rose-600 text-xl">*</span> All Fields Required</h3>
                </div>

                <form>
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
                            <h1 className="text-2xl font-semibold">Constumer Address</h1>
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
                            <h1 className="text-2xl font-semibold">Order Details</h1>
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
                            <h1 className="text-2xl font-semibold">Forwarding Through</h1>
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
                            <h1 className="text-2xl font-semibold">Total Amount</h1>
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

                    <button className="bg-blue-950 m-10 p-2 w-28 text-white rounded-lg text-xl" onClick={handleSubmit}>Add Order</button>
                    <button className="bg-sky-800 m-10 p-2 w-28 text-white rounded-lg text-xl" onClick={handleSubmitPdf}>Print</button>

                </form>

            </div>
        </>
    )
}