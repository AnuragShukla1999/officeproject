import mongoose from "mongoose";


const getLocationSchema = new mongoose.Schema({
    locationName: {
        type: Array,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    }
},
    { timestamps: true }
);


const locationModal = mongoose.model('location', getLocationSchema);

export default locationModal;