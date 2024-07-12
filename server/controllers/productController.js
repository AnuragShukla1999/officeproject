import productModel from "../models/productSchema.js"


export const UploadProductDetails = async (req, res) => {
    try {
        const {
            fullName,
            mobileNo,
            email,
            completeAddress,
            pincode,
            state,
            city,
            landmark,
            orderId,
            orderDate,
            paymentMode,
            productName,
            category,
            quantity,
            orderValue,
            hsn,
            physicalWeight,
            length,
            breadth,
            height,
            pickupLocation
        } = req.body;

        const newProduct = new productModel({
            fullName,
            mobileNo,
            email,
            completeAddress,
            pincode,
            state,
            city,
            landmark,
            orderId,
            orderDate,
            paymentMode,
            productName,
            category,
            quantity,
            orderValue,
            hsn,
            physicalWeight,
            length,
            breadth,
            height,
            pickupLocation
        });

        const savedProduct = await newProduct.save();
        console.log(savedProduct)
        res.status(201).json({
            message: "Successfully Added Details"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create product' });
    }
};




// update Details 
// export const updateProductDetails = async (req, res, next) => {
//     if (req.users._id !== req.params.id) {
//         return res.status(401).json({
//             message: "You can only update your own accound"
//         });
//     }

//     try {
//         const updateDetails = await productModel(
//             req.params.id,

//             {
//                 $set: {
//                     fullName: req.body.username,
//                     mobileNo: req.body.mobileNo,
//                     email: req.body.email,
//                     completeAddress: req.body.completeAddress,
//                     pincode: req.body.pincode,
//                     state: req.body.state,
//                     city: req.body.city,
//                     landmark: req.body.landmark,
//                     orderId: req.body.orderId,
//                     orderDate: req.body.orderDate,
//                     paymentMode: req.body.paymentMode,
//                 },
//             },

//             { new: true }
//         );

//         const { fullName, ...rest } = updateDetails._doc;

//         res.status(201).json({
//             message: "Successfully Updated your details"
//         })
//     } catch (error) {
//         next(error);
//     }
// }






export const updateProductDetails = async (req, res) => {
    const productId = req.params.id;

    try {
        const {
            fullName,
            mobileNo,
            email,
            completeAddress,
            pincode,
            state,
            city,
            landmark,
            orderId,
            orderDate,
            paymentMode,
            productName,
            category,
            quantity,
            orderValue,
            hsn,
            physicalWeight,
            length,
            breadth,
            height,
            pickupLocation
        } = req.body;


        const updatedProduct = await productModel.findByIdAndUpdate(productId, {
            fullName,
            mobileNo,
            email,
            completeAddress,
            pincode,
            state,
            city,
            landmark,
            orderId,
            orderDate,
            paymentMode,
            productName,
            category,
            quantity,
            orderValue,
            hsn,
            physicalWeight,
            length,
            breadth,
            height,
            pickupLocation
        }, { new: true });


        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            message: "Product details updated successfully",
            updatedProduct
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update product details' });
    }
};





export const deleteProductDetailsById = async () => {
    const productId = req.params.id;

    try {
        const deletedProduct = await productModel.findByIdAndDelete(productId);

        if (!deletedProduct) {
            res.status(401).json({
                message: "product not found"
            })
        }

        res.status(200).json({
            message: "Product deleted successfully",
            deletedProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete product' });
    }
}