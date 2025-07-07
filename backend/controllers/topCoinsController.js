
// backend/controllers/topCoinsController.js
import axios from 'axios';

let cachedTopCoins = null;
let lastFetchTime = 0;
const CACHE_DURATION = 10 * 60 * 1000; 

export const getTopCoins = async (req, res) => {
  try {
    const now = Date.now();

    if (cachedTopCoins && (now - lastFetchTime < CACHE_DURATION)) {
      return res.json(cachedTopCoins);
    }

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    const response = await axios.get(url);

    cachedTopCoins = response.data;
    lastFetchTime = now;

    res.json(cachedTopCoins);

  } catch (error) {
    console.error("Error fetching top coins:", error.message);
    res.status(500).json({ error: 'Failed to fetch top coins' });
  }
};
