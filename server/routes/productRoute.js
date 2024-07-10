import express from 'express';
import { UploadProductDetails } from '../controllers/productController.js';
import { authToken } from '../utils/authToken.js';
import { getProductDetails } from '../controllers/getProductDetails.js';
// import { authToken } from '../utils/authToken.js';

const router = express.Router();


router.post('/productorderdetails', authToken, UploadProductDetails);
router.get('/getproductdetails', getProductDetails)

export default router;