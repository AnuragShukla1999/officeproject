import express from 'express';
import { google, logout, signin, signup, updateUser } from '../controllers/authController.js';



const router = express.Router();


router.post('/signup', signup);
router.post('/signin', signin);
router.get('/logout', logout);
router.put('/updateuser', updateUser);


router.post('/google', google);

export default router;