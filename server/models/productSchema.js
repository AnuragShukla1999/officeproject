import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        unique: true,
        required: true
    },
    category: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number
    },
    sellingPrice : Number
},
{
    timestamps: true
});


const productModel = mongoose.model("user", productSchema);

export default productModel;