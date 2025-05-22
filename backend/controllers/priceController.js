 

// backend/controllers/priceController.js
import axios from 'axios';

let cachedPrices = null;             // Data cache
let lastFetchTime = 0;               // Last fetch timestamp
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

export const getCryptoPrices = async (req, res) => {
  try {
    const coinsList = req.query.coins;

    const now = Date.now();

    // ✅ Agar cache hai aur 10 minute se kam hue hain to wahi return karo
    if (cachedPrices && (now - lastFetchTime < CACHE_DURATION)) {
      return res.json(cachedPrices);
    }

    // ✅ Nahi to CoinGecko se fresh data lo
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinsList}&vs_currencies=usd`;
    const response = await axios.get(url);

    cachedPrices = response.data;      // Save new data
    lastFetchTime = now;               // Update time

    res.json(response.data);           // Send fresh response

  } catch (error) {
    console.error("Error fetching prices:", error.message);
    res.status(500).json({ error: 'Failed to fetch prices' });
  }
};
