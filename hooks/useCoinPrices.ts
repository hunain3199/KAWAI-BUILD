export const fetchCoinPrices = async (coins: string[]) => {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(",")}&vs_currencies=usd&include_24hr_change=true`);
    const data = await response.json();
    const coinPrices = Object.entries(data).map(([coin, price]: [coin: string, price: any]) => ({
      price: price.usd,
      price_change: price.usd_24h_change,
    }));

    return { coinPrices }
  } catch (error) {
    console.error("Error fetching cryptocurrencies:", error);
  }
};