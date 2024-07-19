/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { AddDetailsModal } from '../../component/AddNewProduct';
import { Link } from 'react-router-dom';


import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';


// import 'primereact/resources/themes/lara-light-blue/theme.css'
// // import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';



// import 'primereact/resources/themes/mdc-light-deeppurple/theme.css'
// import 'primeicons/primeicons.css';

export const Orders = () => {
    const [productDetails, setProductDetails] = useState([]);
    // const [loading, setLoading] = useState(true);


    const [selectedProducts, setSelectedProducts] = useState(null);
    // const [selectedSingleProducts, setSelectedSingleProducts] = useState(false);


    // const onRowEditComplete = (e) => {
    //     let _products = [...productDetails];
    //     let { newData, index } = e;

    //     _products[index] = newData;

    //     setProductDetails(_products);
    // };


    // const allowEdit = (rowData) => {
    //     return rowData.name !== 'Blue Band';
    // };


    // //// this is for AddDetails
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const openModal = () => {
    //     setIsModalOpen(true)
    // };

    // const closeModal = () => {
    //     setIsModalOpen(false)
    // }







    const [statuses] = useState(['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK']);

    // useEffect(() => {
    //     ProductService.getProductsMini().then((data) => setProducts(data));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getSeverity = (value) => {
        switch (value) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <Tag value={option} severity={getSeverity(option)}></Tag>;
                }}
            />
        );
    };

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)}></Tag>;
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    };

    const allowEdit = (rowData) => {
        return rowData.name !== 'Blue Band';
    };


    // for fetching the product Details Data
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const res = await fetch('http://localhost:7000/api/getproductdetails');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                console.log(data.data);
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



    // function to handle adding product from modal
    // const handleAddProduct = (newProduct) => {
    //     setProductDetails([...productDetails, newProduct]);
    //     setIsModalOpen(false);
    // }


    return (
        <>
            {/* <div className="container mx-auto px-4 py-8">
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
                                    </tr>
                                </thead>

                                <tbody>
                                    {productDetails.map((detail) => (
                                        <tr key={detail._id} className="bg-slate-200">
                                            <td className="border border-gray-800 px-4 py-2">{detail.orderId}</td>
                                            <td className="border border-gray-800 px-4 py-2">{detail.productName}</td>
                                            <td className="border border-gray-800 px-4 py-2 flex flex-col"><div>₹{detail.orderValue}</div> <div>{detail.paymentMode}</div></td>
                                            <td className="border border-gray-800 px-4 py-2" > <Link to={`/ordersbyid/${detail._id}`}><div>{detail.fullName}</div></Link>   <div>{detail.mobileNo}</div></td>
                                            <td className="border border-gray-800 px-4 py-2">{detail.physicalWeight}</td>
                                            <td className="border border-gray-800 px-4 py-2">{detail.pincode}</td>
                                            <td className="border border-gray-800 px-4 py-2">{detail.state}</td>
                                            <td className="border border-gray-800 px-4 py-2">{detail.pickupLocation}</td>
                                            <td className="border border-gray-800 px-4 py-2">{detail.landmark}</td>
                                            <td className="border border-gray-800 px-4 py-2">{new Date(detail.orderDate).toLocaleDateString()}</td>
                                            <td className="border border-gray-800 px-4 py-2">{detail.paymentMode}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <AddDetailsModal
                                open={isModalOpen}
                                close={closeModal}
                                addProduct={handleAddProduct}
                            />
                        </div>
                    )
                }
            </div> */}



            {/* <div className="card" >
                <DataTable value={productDetails} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }} selectionMode={'checkbox'} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id" selectableRows>
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="orderId" header="Order ID" ></Column>
                    <Column field="productName" header="Product Name" ></Column>
                    <Column field="orderValue" header="Order Value" ></Column>
                    <Column field="fullName" header="Customer Details"></Column>
                    <Column field="physicalWeight" header="Billable Weight"></Column>
                    <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                </DataTable>
            </div> */}



            <div className="card">
                <DataTable value={productDetails} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }} selectionMode="multiple" selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id">
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="orderId" header="Order ID"></Column>
                    <Column field="productName" header="Product Name"></Column>
                    <Column field="orderValue" header="Order Value"></Column>
                    <Column field="fullName" header="Customer Details"></Column>
                    <Column field="physicalWeight" header="Billable Weight"></Column>
                    <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                </DataTable>
            </div>




            {/* <AddDetailsModal
                open={isModalOpen}
                close={closeModal}
                addProduct={handleAddProduct}
            /> */}
        </>
    );
};

export default Orders;
