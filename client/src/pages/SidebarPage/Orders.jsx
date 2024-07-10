// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';





// eslint-disable-next-line react/prop-types
const AddDetailsModal = ({ open, close }) => {

    const [formData, setFormData] = useState({
        fullName: '',
        mobileNo: '',
        email: '',
        completeAddress: '',
        pincode: '',
        state: '',
        city: '',
        landmark: '',
        orderId: '',
        orderDate: '',
        paymentMode: ''
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };



    const handleSub = (e) => {
        e.preventDefault();
    }


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
                                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            </div>
                            {/* Add other form fields similar to fullName */}

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







export const Orders = () => {

    const [productDetails, setProductDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);




    const openModal = () => {
        setIsModalOpen(true)
    };


    const closeModal = () => {
        setIsModalOpen(false)
    }



    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const res = await fetch('http://localhost:7000/api/getproductdetails');

                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await res.json();

                console.log(data);

                if (data.success && data.data.length > 0) {
                    setProductDetails(data.data);
                } else {
                    console.error('Error fetching data:', data.message);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, []);

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
                                    <th className="border border-gray-800 px-4 py-2">Costumer Full Name</th>
                                    <th className="border border-gray-800 px-4 py-2">Mobile No</th>
                                    <th className="border border-gray-800 px-4 py-2">Email Id</th>
                                    <th className="border border-gray-800 px-4 py-2">Complete Address</th>
                                    <th className="border border-gray-800 px-4 py-2">Pincode</th>
                                    <th className="border border-gray-800 px-4 py-2">State</th>
                                    <th className="border border-gray-800 px-4 py-2">City</th>
                                    <th className="border border-gray-800 px-4 py-2">Famous Landmark</th>
                                    <th className="border border-gray-800 px-4 py-2">Order id</th>
                                    <th className="border border-gray-800 px-4 py-2">Order Date</th>
                                    <th className="border border-gray-800 px-4 py-2">Payment Mode</th>
                                </tr>
                            </thead>
                            <tbody>

                                {productDetails.map((detail) => (
                                    <tr key={detail._id} className="bg-slate-200">
                                        <td className="border border-gray-800 px-4 py-2">{detail.fullName}</td>
                                        <td className="border border-gray-800 px-4 py-2">{detail.mobileNo}</td>
                                        <td className="border border-gray-800 px-4 py-2">{detail.email}</td>
                                        <td className="border border-gray-800 px-4 py-2">{detail.completeAddress}</td>
                                        <td className="border border-gray-800 px-4 py-2">{detail.pincode}</td>
                                        <td className="border border-gray-800 px-4 py-2">{detail.state}</td>
                                        <td className="border border-gray-800 px-4 py-2">{detail.city}</td>
                                        <td className="border border-gray-800 px-4 py-2">{detail.landmark}</td>
                                        <td className="border border-gray-800 px-4 py-2">{detail.orderId}</td>
                                        <td className="border border-gray-800 px-4 py-2">{new Date(detail.orderDate).toLocaleDateString()}</td>
                                        <td className="border border-gray-800 px-4 py-2">{detail.paymentMode}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>



                        <AddDetailsModal open={isModalOpen} close={closeModal} />
                    </div>
                )
            }
        </div>
    );
};

export default Orders;
