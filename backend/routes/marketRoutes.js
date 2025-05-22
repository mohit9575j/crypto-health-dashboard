// backend/routes/marketRoutes.js
import express from 'express';
 import getMarketPrices from '../controllers/market.js';

const router = express.Router();

router.get('/market-prices', getMarketPrices);

export default router;
