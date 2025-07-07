
// backend/routes/coinChartRoutes.js
import express from 'express';
import { getCoinChart } from '../controllers/coinChartController.js';

const router = express.Router();

router.get('/coin-chart', getCoinChart);  

export default router;
