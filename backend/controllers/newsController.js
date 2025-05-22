import axios from 'axios';

let cachedNews = null;
let lastFetchTime = 0;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

const NEWS_API_KEY = '6cefd679150142c7b3c30edcf1f61783';

export const getCryptoNews = async (req, res) => {
  try {
    const now = Date.now();

    if (cachedNews && (now - lastFetchTime < CACHE_DURATION)) {
      return res.json(cachedNews);
    }

    const url = `https://newsapi.org/v2/everything?q=crypto&language=en&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;
    const response = await axios.get(url);

    cachedNews = response.data;
    lastFetchTime = now;

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};
