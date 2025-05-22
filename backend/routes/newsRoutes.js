import express from 'express';
import { getCryptoNews } from '../controllers/newsController.js';

const router = express.Router();

router.get('/news', getCryptoNews);

export default router;
