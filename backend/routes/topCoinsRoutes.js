// backend/routes/topCoinsRoutes.js
import express from 'express';
import { getTopCoins } from '../controllers/topCoinsController.js';

const router = express.Router();

router.get('/top-coins', getTopCoins);

export default router;
