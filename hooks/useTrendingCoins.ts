export const fetchTrendingCoins = async () => {
  try {
    const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
    const data = await response.json();
    const trendingCoins = data.coins.map((coin) => ({
      name: coin.item.name,
      symbol: coin.item.symbol,
      price: coin.item.data.price,
      price_change: coin.item.data.price_change_percentage_24h.usd,
    }));
    return { trendingCoins };
  } catch (error) {
    console.error("Error fetching trending cryptocurrencies:", error);
  }
};