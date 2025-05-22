
// backend/server.js
import express from 'express';
import cors from 'cors';
import priceRoutes from './routes/priceRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import marketRoutes from './routes/marketRoutes.js';
import topCoinsRoutes from './routes/topCoinsRoutes.js';  
import coinChartRoutes from './routes/coinChartRoutes.js'; 

const app = express();
app.use(cors());
app.use(express.json());  
app.use('/api', priceRoutes);  
app.use('/api', newsRoutes);
app.use('/api', marketRoutes);
app.use('/api', topCoinsRoutes); 
app.use('/api', coinChartRoutes);  



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
