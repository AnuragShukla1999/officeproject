// import mongoose from "mongoose";


// const getLocationSchema = new mongoose.Schema({
//     locationName: {
//         type: Array,
//         required: true
//     },
//     pincode: {
//         type: Number,
//         required: true
//     }
// },
//     { timestamps: true }
// );


// const locationModal = mongoose.model('location', getLocationSchema);

// export default locationModal;







import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    locationName: {
        type: String,
        required: true
    },
});

const locationSchema = new mongoose.Schema({
    pincode: {
        type: Number,
        required: true
    },
    addresses: {
        type: [addressSchema], // Array of addresses
        required: true
    }
}, { timestamps: true });

const locationModal = mongoose.model('locations', locationSchema);

export default locationModal;
