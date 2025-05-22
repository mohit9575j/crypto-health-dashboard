// backend/routes/coinChartRoutes.js
import express from 'express';
import { getCoinChart } from '../controllers/coinChartController.js';

const router = express.Router();

router.get('/coin-chart', getCoinChart); // e.g., /api/coin-chart?coinId=bitcoin&days=30

export default router;
