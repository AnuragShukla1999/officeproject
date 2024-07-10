import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    // Consignee Details
    consignee: {
        fullName: {
            type: String,
            required: true
        },
        mobileNo: {
            type: Number,
            required: true
        },
        email: {
            type: String
        }
    },

    // Customer Address
    customerAddress: {
        completeAddress: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true
        },
        state: {
            type: String
        },
        city: {
            type: String
        },
        landmark: {
            type: String
        }
    },



    // Order Details
    orderDetails: {
        orderId: {
            type: String,
            required: true
        },
        orderDate: {
            type: Date,
            required: true
        },
        paymentMode: {
            type: String, enum: ['upi', 'credit card', 'debit card', 'net banking']
        }
    }
},
    {
        timestamps: true
    });


const productModel = mongoose.model("user", productSchema);

export default productModel;