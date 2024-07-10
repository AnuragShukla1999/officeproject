import productModel from "../models/productSchema.js"


export const getProductDetails = async (req, res) => {
    try {
        const allDetails = await productModel.find().sort({ createdAt : -1 });


        res.json({
            message: "All Product Detail got",
            success: true,
            data: allDetails
        })
    } catch (error) {
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
};