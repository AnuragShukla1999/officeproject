import express from 'express';
import { authToken } from '../middleware/authToken.js';
import { UploadProductDetails } from '../controllers/productController.js';

const router = express.Router();


router.post('/productorderdetails', authToken, UploadProductDetails);

export default router;