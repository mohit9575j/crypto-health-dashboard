


// backend/controllers/priceController.js
import axios from 'axios';

let cachedPrices = null;             
let lastFetchTime = 0;                
const CACHE_DURATION = 10 * 60 * 1000;  

export const getCryptoPrices = async (req, res) => {
  try {
    const coinsList = req.query.coins;

    const now = Date.now();

     if (cachedPrices && (now - lastFetchTime < CACHE_DURATION)) {
      return res.json(cachedPrices);
    }

     const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinsList}&vs_currencies=usd`;
    const response = await axios.get(url);

    cachedPrices = response.data;      
    lastFetchTime = now;             

    res.json(response.data);           

  } catch (error) {
    console.error("Error fetching prices:", error.message);
    res.status(500).json({ error: 'Failed to fetch prices' });
  }
};
