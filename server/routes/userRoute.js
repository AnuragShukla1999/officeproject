import express from 'express';
import { getUserById } from '../controllers/userController.js';

const router = express.Router();


router.get('/:id/user', getUserById);

export default router;