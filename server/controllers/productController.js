import productModel from "../models/productSchema.js"


export const UploadProductDetails = async (req, res) => {
    try {


        const { fullName, mobileNo, email, completeAddress, pincode, state, city, landmark, orderId, orderDate, paymentMode } = req.body;


        const newProduct = new productModel({ fullName, mobileNo, email, completeAddress, pincode, state, city, landmark, orderId, orderDate, paymentMode });

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