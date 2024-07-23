import express from 'express';
import { createLocation, getLocation } from '../controllers/getLocationController.js';

const router = express.Router();

router.post('/location', createLocation);
router.get('/getlocation', getLocation);

export default router;