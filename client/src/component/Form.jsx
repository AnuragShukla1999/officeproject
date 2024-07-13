import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import '../utitity/style.css'
import { useDispatch } from "react-redux";

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
        pickupLocation: ""
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

            toast.success("Product Created Successfully");
        } catch (error) {
            console.log('Error', error)
        }
    }


    return (
        <div className="relative bg-gray-100 overflow:hidden formPage">
            <div className="h-32 bg-blue-600 sticky">

            </div>

            <div className="rounded-2xl z-10 absolute top-20 left-5 bg-transparent ">

                {/* Consignee Details */}
                <div><h3 className="text-white">*All Fields Required</h3></div>

                <div className="m-4 mt-10">
                    <div className="flex flex-row gap-3 items-center ">
                        <div className="w-6 bg-blue-950 h-6 rounded-xl text-white flex items-center justify-center">1</div>
                        <div><h1 className="text-2xl">Consignee Details</h1></div>
                    </div>

                    <div className="flex flex-row gap-8">
                        <div className="flex flex-col gap-2">
                            <label>Costumer Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                className="border-2 border-gray-500"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Mobile No</label>
                            <input
                                type="number"
                                name="mobileNo"
                                className="border-2 border-gray-500"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Email Id</label>
                            <input
                                type="email"
                                name="email"
                                className="border-2 border-gray-500"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>



                <div className="m-4 mt-10">

                    <div className="flex flex-row gap-3 items-center ">
                        <div className="w-6 bg-blue-950 h-6 rounded-xl text-white flex items-center justify-center">2</div>
                        <h1 className="text-2xl">Constumer Address</h1>
                    </div>
                    <div className="flex flex-row gap-8">
                        <div className="flex flex-col gap-2">
                            <label>Complete Address</label>
                            <input
                                type="text"
                                name="completeAddress"
                                className="border-2 border-gray-500"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Pincode</label>
                            <input
                                type="number"
                                name="pincode"
                                className="border-2 border-gray-500"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>State</label>
                            <input
                                type="text"
                                name="state"
                                className="border-2 border-gray-500"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>City</label>
                            <input
                                type="text"
                                name="city"
                                className="border-2 border-gray-500"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Famous Landmark</label>
                            <input
                                type="text"
                                name="landmark"
                                className="border-2 border-gray-500"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>



                <div className="m-4 mt-10 gap-8 md:w-32">
                    <div className="flex flex-row gap-3 items-center ">
                        <div className="w-6 bg-blue-950 h-6 rounded-xl text-white flex items-center justify-center">3</div>
                        <h1 className="text-2xl">Order Details</h1>
                    </div>
                    <div className="flex flex-row gap-8">
                        <div className="flex flex-col gap-2">
                            <label>Order id</label>
                            <input
                                type="text"
                                name="orderId"
                                className="border-2 border-gray-500"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Order Date</label>
                            <input
                                type="date"
                                name="orderDate"
                                className="border-2 border-gray-500"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2 border-1 border-black">
                            <label>Payment Mode</label>
                            <select name="paymentMode" onChange={handleChange}>
                                <option value="cod">COD</option>
                                <option value="prepaid">Prepaid Card</option>
                            </select>
                        </div>


                        <div className="flex flex-col gap-2">
                            <label>Product Name</label>
                            <input
                                type="text"
                                name="productName"
                                className="border-2 border-gray-500"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Category</label>
                            <select name="category" onChange={handleChange}>
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
                            <label>Quantity (In Numbers)</label>
                            <input
                                type="number"
                                name="quantity"
                                className="border-2 border-gray-500"
                                required
                                onChange={handleChange}
                            />
                        </div>


                        <div className="flex flex-col gap-2">
                            <label>Order Value (In Numbers)</label>
                            <input
                                type="number"
                                name="orderValue"
                                className="border-2 border-gray-500"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>HSN</label>
                            <input
                                type="text"
                                name="hsn"
                                className="border-2 border-gray-500"
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
                            <label>Physical Weight</label>
                            <input
                                type="text"
                                name="physicalWeight"
                                className="border-2 border-gray-500"
                                required
                                onChange={handleChange}
                            />
                        </div>


                        <div className="flex flex-col gap-2">
                            <label>Length</label>
                            <input
                                type="number"
                                name="length"
                                className="border-2 border-gray-500"
                                required
                                onChange={handleChange}
                            />
                        </div>


                        <div className="flex flex-col gap-2">
                            <label>Breadth</label>
                            <input
                                type="number"
                                name="breadth"
                                className="border-2 border-gray-500"
                                required
                                onChange={handleChange}
                            />
                        </div>


                        <div className="flex flex-col gap-2">
                            <label>Height</label>
                            <input
                                type="number"
                                name="height"
                                className="border-2 border-gray-500"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>


                <div className="m-4 mt-10 gap-8">
                    <div className="flex flex-row gap-3 items-center ">
                        <div className="w-6 bg-blue-950 h-6 rounded-xl text-white flex items-center justify-center">4</div>
                        <h1 className="text-2xl">Pichup Location</h1>
                    </div>

                    <div className="flex flex-row gap-4 mt-5">
                        <label>Search Pickup Location</label>

                        <div className="flex flex-row">
                            <input
                                type="text"
                                name="pickupLocation"
                                className="border-2 border-gray-500"
                                required
                                onChange={handleChange}
                            />

                            <div className="border-2 border-black flex items-center justify-center p-1">
                                <FaSearch />
                            </div>
                        </div>

                        <button className="flex flex-row items-center justify-center gap-2 bg-blue-950 text-white p-2 pr-3 pl-3 rounded-full text-sm">
                            <FaPlus />
                            Add Warehouse
                        </button>
                    </div>
                </div>

                <button className="bg-blue-950 m-10 p-2 w-28 text-white rounded-lg text-xl" onClick={handleSubmit}>Add Order</button>
            </div>
        </div>
    )
}