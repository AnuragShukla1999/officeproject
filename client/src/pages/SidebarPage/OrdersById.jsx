/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { AddDetailsEditModal } from '../../component/ProdutDetailsEditModal';
import { AddDetailsModal } from '../../component/AddNewProduct';

import { useParams } from 'react-router-dom';

export const OrdersById = () => {

    const [productDetails, setProductDetails] = useState([]);
    const [loading, setLoading] = useState(true);


    const params = useParams();

    ///   Edit modal
    const [isEditingModalOpen, setIsEditingModal] = useState(false);
    const [editingDetail, setEditingDetail] = useState(null);
    const [isEditing, setIsEditing] = useState(false);


    const openEditModal = (detail) => {
        setIsEditingModal(true);
        if (detail) {
            setEditingDetail(detail);
            setIsEditing(true);
        } else {
            setIsEditing(false);
        }
    };

    const closeEditModal = () => {
        setIsEditingModal(false);
        setEditingDetail(null);
        setIsEditing(false);
        console.log("Clicked in closeEditModal")
    };



    //// this is for AddDetails
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    };

    const closeModal = () => {
        setIsModalOpen(false)
    }




    // for fetching the product Details Data
    useEffect(() => {
        /// fetch product Details by id
        const fetchProductDetailsById = async () => {
            try {
                const productId = params;

                const res = await fetch(`http://localhost:7000/api/getproductdetails/${productId}`);

                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchProductDetailsById();
    }, [params]);



    // delete product details by id function
    const deleteProductDetailsById = async (e) => {
        try {
            const res = await fetch(`http://localhost:7000/api/deleteproductdetails/${e._id}`);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const resData = await res.json();
            console.log(resData);

            setProductDetails(resData.data)
            console.log("Click on delete button")
        } catch (error) {
            console.error("Error in deleting product by id", error);
        }
    }



    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Orders</h1>

            <button className="bg-green-800 m-10 p-2 w-28 text-white rounded-lg text-xl" onClick={openModal}>Add</button>
            {
                loading ? "Loading..........." : (
                    <div className="overflow-x-auto">
                        <table className="table-auto border-collapse border border-gray-200 w-full">
                            <thead>
                                <tr className="bg-blue-400">
                                    <th className="border border-gray-800 px-4 py-2">Order id</th>
                                    <th className="border border-gray-800 px-4 py-2">Product Name</th>
                                    <th className="border border-gray-800 px-4 py-2">Order Value</th>
                                    <th className="border border-gray-800 px-4 py-2">Customer Details</th>
                                    <th className="border border-gray-800 px-4 py-2">Billable Weight</th>
                                    <th className="border border-gray-800 px-4 py-2">Pincode</th>
                                    <th className="border border-gray-800 px-4 py-2">State</th>
                                    <th className="border border-gray-800 px-4 py-2">Shipping Details</th>
                                    <th className="border border-gray-800 px-4 py-2">Famous Landmark</th>
                                    <th className="border border-gray-800 px-4 py-2">Order Date</th>
                                    <th className="border border-gray-800 px-4 py-2">Payment Mode</th>
                                    <th className="border border-gray-800 px-4 py-2">Update Datails</th>
                                </tr>
                            </thead>

                            <tbody>
                                {productDetails.map((detail) => (
                                    <tr key={detail._id} className="bg-slate-200">
                                        <td className="border border-gray-800 px-4 py-2">{detail.orderId}</td>
                                        <td className="border border-gray-800 px-4 py-2">{detail.productName}</td>
                                        <td className="border border-gray-800 px-4 py-2 flex flex-col"><div>₹{detail.orderValue}</div> <div>{detail.paymentMode}</div></td>
                                        <td className="border border-gray-800 px-4 py-2"><div>{detail.fullName}</div>   <div>{detail.mobileNo}</div></td>
                                        <td className="border border-gray-800 px-4 py-2">{detail.physicalWeight}</td>
                                        <td className="border border-gray-800 px-4 py-2">{detail.pincode}</td>
                                        <td className="border border-gray-800 px-4 py-2">{detail.state}</td>
                                        <td className="border border-gray-800 px-4 py-2">{detail.pickupLocation}</td>
                                        <td className="border border-gray-800 px-4 py-2">{detail.landmark}</td>
                                        <td className="border border-gray-800 px-4 py-2">{new Date(detail.orderDate).toLocaleDateString()}</td>
                                        <td className="border border-gray-800 px-4 py-2">{detail.paymentMode}</td>
                                        <td className="border border-gray-800 px-4 py-2">
                                            <div className='flex flex-row gap-5 text-2xl items-center justify-center'>
                                                <MdEdit onClick={openEditModal} />
                                                <MdDelete onClick={deleteProductDetailsById} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                        <AddDetailsModal
                            open={isModalOpen}
                            close={closeModal}
                        />

                        <AddDetailsEditModal
                            open={isEditingModalOpen}
                            close={closeEditModal}
                            isEditing={isEditing}
                            editingDetail={editingDetail}
                        />
                    </div>
                )
            }
        </div>
    );
};

export default OrdersById;
