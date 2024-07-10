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
};





// update Details 
export const updateProductDetails = async (req, res, next) => {
    if (req.users._id !== req.params.id) {
        return res.status(401).json({
            message: "You can only update your own accound"
        });
    }


    try {
        const updateDetails = await productModel(
            req.params.id,

            {
                $set: {
                    fullName: req.body.username,
                    mobileNo: req.body.mobileNo,
                    email: req.body.email,
                    completeAddress: req.body.completeAddress,
                    pincode: req.body.pincode,
                    state: req.body.state,
                    city: req.body.city,
                    landmark: req.body.landmark,
                    orderId: req.body.orderId,
                    orderDate: req.body.orderDate,
                    paymentMode: req.body.paymentMode,
                },
            },

            { new: true }
        );



        const { fullName, ...rest } = updateDetails._doc;

        res.status(201).json({
            message: "Successfully Updated your details"
        })
    } catch (error) {
        next(error);
    }
}