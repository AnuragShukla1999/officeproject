import express from 'express';
import { updateProductDetails, UploadProductDetails } from '../controllers/productController.js';
// import { authToken } from '../utils/authToken.js';
import { getProductDetails } from '../controllers/getProductDetails.js';
// import { authToken } from '../utils/authToken.js';

const router = express.Router();


router.post('/productorderdetails', UploadProductDetails);
router.get('/getproductdetails', getProductDetails);
router.put('/updateproductdetails', updateProductDetails);

export default router;