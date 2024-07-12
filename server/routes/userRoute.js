import express from 'express';
import { getUserById } from '../controllers/userController.js';
import { getProductDetailsById } from '../controllers/getProductDetails.js';

const router = express.Router();


router.get('/user', getUserById);
router.get('/user/:id', getProductDetailsById)

export default router;