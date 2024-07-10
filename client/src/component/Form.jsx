import { useState } from "react"

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
        paymentMode: ""
    });


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



        } catch (error) {
            console.log('Error', error)
        }
    }

    return (
        <div>

            {/* Consignee Details */}
            <div className="m-4">
                <h1 className="text-2xl mb-4">Consignee Details</h1>
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




            <div className="m-4">
                <h1 className="text-2xl mb-4">Constumer Address</h1>
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



            <div className="m-4">
                <h1 className="text-2xl mb-4">Order Details</h1>
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
                    <div className="flex flex-col gap-2">
                        <label>Payment Mode</label>
                        <select name="paymentMode" onChange={handleChange}>
                            <option value="upi">UPI</option>
                            <option value="credit card">Credit Card</option>
                            <option value="debit card">Debit Card</option>
                            <option value="net banking">Net Banking</option>
                        </select>
                    </div>
                </div>
            </div>



            <button className="bg-green-800 m-10 p-2 w-28 text-white rounded-lg text-xl"  onClick={handleSubmit}>Save</button>
        </div>
    )
}