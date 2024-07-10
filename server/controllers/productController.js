import productModel from "../models/productSchema.js"


export const UploadProductDetails = async () => {
    try {


        const { consignee, customerAddress, orderDetails } = req.body;


        const newProduct = new productModel({
            consignee,
            customerAddress,
            orderDetails
        });

        // Save the product to the database
        const savedProduct = await newProduct.save();


        res.status(201).json({
            message: "Successfully Added Details"
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create product' });
    }
}