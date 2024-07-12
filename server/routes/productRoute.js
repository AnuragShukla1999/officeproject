import express from 'express';
import { updateProductDetails, UploadProductDetails } from '../controllers/productController.js';
// import { authToken } from '../utils/authToken.js';
import { getProductDetails, getProductDetailsById } from '../controllers/getProductDetails.js';
// import { authToken } from '../utils/authToken.js';

const router = express.Router();


router.post('/productorderdetails', UploadProductDetails);
router.get('/getproductdetails', getProductDetails);
router.get('/getproductdetails/:id', getProductDetailsById);
router.put('/updateproductdetails/:id', updateProductDetails);
router.delete('/deleteproductdetails/:id', updateProductDetails);

export default router;