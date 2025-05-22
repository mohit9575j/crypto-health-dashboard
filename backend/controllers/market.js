// backend/controllers/marketPriceController.js 
import axios from 'axios';

let cachedMarketPrices = null;
let lastFetchTime = 0;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

 const getMarketPrices = async (req, res) => {
  try {
    const coins = req.query.coins; // frontend se: bitcoin,ethereum,etc.

    const now = Date.now();

    if (cachedMarketPrices && (now - lastFetchTime < CACHE_DURATION)) {
      return res.json(cachedMarketPrices);
    }

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${coins}`;
    const response = await axios.get(url);

    cachedMarketPrices = response.data;
    lastFetchTime = now;

    res.json(cachedMarketPrices);

  } catch (error) {
    console.error("Error fetching market prices:", error.message);
    res.status(500).json({ error: "Failed to fetch market prices" });
  }
};

export default getMarketPrices;
