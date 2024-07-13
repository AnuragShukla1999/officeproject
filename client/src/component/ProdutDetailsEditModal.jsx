/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
export const AddDetailsEditModal = ({ open, close, isEditing, editingDetail }) => {


    const params = useParams();

    const initialFormData = {
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
    };

    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        if (isEditing && editingDetail) {
            setFormData({
                fullName: editingDetail.fullName,
                mobileNo: editingDetail.mobileNo,
                email: editingDetail.email,
                completeAddress: editingDetail.completeAddress,
                pincode: editingDetail.pincode,
                state: editingDetail.state,
                city: editingDetail.city,
                landmark: editingDetail.landmark,
                orderId: editingDetail.orderId,
                orderDate: editingDetail.orderDate,
                paymentMode: editingDetail.paymentMode,
                productName: editingDetail.productName,
                category: editingDetail.category,
                quantity: editingDetail.quantity,
                orderValue: editingDetail.orderValue,
                hsn: editingDetail.hsn,
                physicalWeight: editingDetail.physicalWeight,
                length: editingDetail.length,
                breadth: editingDetail.breadth,
                height: editingDetail.height,
                pickupLocation: editingDetail.pickupLocation
            });
        } else {
            setFormData(initialFormData);
        }
    }, [isEditing, editingDetail]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(e.target.value)
    };


    const handleSub = async (e) => {
        e.preventDefault();
        try {
            const url = isEditing ? `http://localhost:7000/api/updateproductdetails/${params.productId}` : 'http://localhost:7000/api/productorderdetails';
            const method = isEditing ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
                credentials: 'include'
            });
            const resData = await res.json();
            console.log(resData);

            toast.success("Product Details Updated");

            close();
        } catch (error) {
            console.log('Error', error);
        }
    };


    return (
        <div className={`fixed z-10 inset-0 overflow-y-auto ${open ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <form onSubmit={handleSub}>
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="mb-4">

                                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Costumer Full Name:</label>

                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                />
                            </div>


                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Mobile No:</label>

                                <input
                                    type="number"
                                    id="mobileNo"
                                    name="mobileNo"
                                    value={formData.mobileNo}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Email Id:</label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Complete Address:</label>

                                <input
                                    type="text"
                                    id="completeAddress"
                                    name="completeAddress"
                                    value={formData.completeAddress}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Pincode:</label>

                                <input
                                    type="number"
                                    id="pincode"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">State:</label>

                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">City:</label>

                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Famous Landmark:</label>

                                <input
                                    type="text"
                                    id="landmark"
                                    name="landmark"
                                    value={formData.landmark}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Order id:</label>

                                <input
                                    type="text"
                                    id="orderId"
                                    name="orderId"
                                    value={formData.orderId}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Order Date:</label>

                                <input
                                    type="date"
                                    id="orderDate"
                                    name="orderDate"
                                    value={formData.orderDate}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>


                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Payment Mode:</label>

                                <input
                                    type="text"
                                    id="paymentMode"
                                    name="paymentMode"
                                    value={formData.paymentMode}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>


                            <div className="mb-4">
                                <label htmlFor="productName" className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>

                                <input
                                    type="text"
                                    id="productName"
                                    name="productName"
                                    value={formData.productName}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>



                            <div className="mb-4">
                                <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                                <select name="category" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
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


                            <div className="mb-4">
                                <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">Quantity (In Numbers):</label>

                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>


                            <div className="mb-4">
                                <label htmlFor="orderValue" className="block text-gray-700 text-sm font-bold mb-2">Order Value (In Numbers):</label>

                                <input
                                    type="number"
                                    id="orderValue"
                                    name="orderValue"
                                    value={formData.orderValue}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>



                            <div className="mb-4">
                                <label htmlFor="hsn" className="block text-gray-700 text-sm font-bold mb-2">HSN:</label>

                                <input
                                    type="text"
                                    id="hsn"
                                    name="hsn"
                                    value={formData.hsn}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>


                            <div className="mb-4">
                                <label htmlFor="orderValue" className="block text-gray-700 text-sm font-bold mb-2">Physical Weight:</label>

                                <input
                                    type="text"
                                    id="physicalWeight"
                                    name="physicalWeight"
                                    value={formData.physicalWeight}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>



                            <div className="mb-4">
                                <label htmlFor="orderValue" className="block text-gray-700 text-sm font-bold mb-2">Length:</label>

                                <input
                                    type="number"
                                    id="length"
                                    name="length"
                                    value={formData.length}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>


                            <div className="mb-4">
                                <label htmlFor="orderValue" className="block text-gray-700 text-sm font-bold mb-2">Breadth:</label>

                                <input
                                    type="number"
                                    id="breadth"
                                    name="breadth"
                                    value={formData.breadth}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>


                            <div className="mb-4">
                                <label htmlFor="orderValue" className="block text-gray-700 text-sm font-bold mb-2">Height:</label>

                                <input
                                    type="number"
                                    id="height"
                                    name="height"
                                    value={formData.height}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>



                            <div className="mb-4">
                                <label htmlFor="orderValue" className="block text-gray-700 text-sm font-bold mb-2">Pickup Location:</label>

                                <input
                                    type="text"
                                    id="pickupLocation"
                                    name="pickupLocation"
                                    value={formData.pickupLocation}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                                Save
                            </button>
                            <button type="button" onClick={close} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}