import express from 'express';
import { UploadProductDetails } from '../controllers/productController.js';
import { authToken } from '../utils/authToken.js';
// import { authToken } from '../utils/authToken.js';

const router = express.Router();


router.post('/productorderdetails', authToken, UploadProductDetails);

export default router;