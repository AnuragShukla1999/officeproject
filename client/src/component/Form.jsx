



export const Form = () => {

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
                            name="name"
                            className="border-2 border-gray-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Mobile No</label>
                        <input
                            type="number"
                            name="number"
                            className="border-2 border-gray-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Email Id</label>
                        <input
                            type="email"
                            name="email"
                            className="border-2 border-gray-500"
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
                            name="address"
                            className="border-2 border-gray-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Pincode</label>
                        <input
                            type="number"
                            name="number"
                            className="border-2 border-gray-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>State</label>
                        <input
                            type="text"
                            name="state"
                            className="border-2 border-gray-500"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>City</label>
                        <input
                            type="text"
                            name="city"
                            className="border-2 border-gray-500"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Famous Landmark</label>
                        <input
                            type="text"
                            name="landmark"
                            className="border-2 border-gray-500"
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
                            name="orderid"
                            className="border-2 border-gray-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Order Date</label>
                        <input
                            type="date"
                            name="orderdate"
                            className="border-2 border-gray-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Payment Mode</label>
                        <select name="payment">
                            <option value="upi">UPI</option>
                            <option value="credit card">Credit Card</option>
                            <option value="debit card">Debit Card</option>
                            <option value="net banking">Net Banking</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}