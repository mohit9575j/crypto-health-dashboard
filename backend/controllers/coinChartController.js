// backend/controllers/coinChartController.js

import axios from 'axios';

const cache = new Map();
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

export const getCoinChart = async (req, res) => {
  try {
    const { coinId, days } = req.query; // ?coinId=bitcoin&days=30
    const cacheKey = `${coinId}_${days}`;
    const now = Date.now();

    if (cache.has(cacheKey)) {
      const { timestamp, data } = cache.get(cacheKey);
      if (now - timestamp < CACHE_DURATION) {
        return res.json(data); // ✅ Return cached data
      }
    }

    const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=inr&days=${days}`;
    const response = await axios.get(url);

    // ✅ Update cache
    cache.set(cacheKey, {
      timestamp: now,
      data: response.data,
    });

    res.json(response.data);

  } catch (error) {
    console.error("Error fetching coin chart data:", error.message);
    res.status(500).json({ error: "Failed to fetch coin chart data" });
  }
};
