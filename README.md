# Crypto Dominance API

**Crypto Dominance API** is a lightweight TypeScript library designed for Deno and Node.js, offering an easy way to fetch and adapt cryptocurrency market dominance data. It provides insights into the market capitalization proportions of major cryptocurrencies like Bitcoin, Ethereum, and others.

## Features

- **Fetch Cryptocurrency Dominance**: Retrieves the latest dominance metrics for Bitcoin, Ethereum, and other tokens.
- **Data Transformation**: Adapts raw API responses into a structured JSON format for easy integration.
- **Proxy Support**: Optional HTTP proxy configuration for enhanced security and customization (Deno-specific).

## Installation

Install the library via a URL import in your Deno project:

```typescript
import { ViewStatsAPI } from "https://github.com/Miguelo981/crypto-dominance/raw/main/index.ts";
```

```typescript
const api = new CryptoDominanceAPI();
const dominanceData = await api.getDominance();
```

## Proxy Configuration

> ⚠️ **Important note: this feature is not ready yet.**

To use a proxy, pass a ProxyConfig object during initialization:

```typescript
const proxyConfig = {
  url: "http://your-proxy-url:port",
  basicAuth: { username: "user", password: "password" },
};

const api = new CryptoDominanceAPI(proxyConfig);
const dominanceData = await api.getDominance();
```

## Response Structure

The `getDominance()` method returns an array of `CryptoDominance` objects with the following structure:

```typescript
[
  {
    token: { name: "Bitcoin", symbol: "BTC" },
    marketcapProportion: 59.674660858544,
    marketcapChangeInPast30Days: 2.363660858544,
    dominanceLastMonth: 57.0998,
    dominanceLastWeek: 59.9668,
    dominanceYearlyHigh: 60.0869,
    dominanceYesterday: 59.2093,
    dominanceYearlyLow: 49.603,
    timestamp: "2024-11-21T18:52:13.104Z"
  },
  {
    token: { name: "Ethereum", symbol: "ETH" },
    marketcapProportion: 12.440288938432,
    marketcapChangeInPast30Days: -1.153611061568,
    dominanceLastMonth: 13.7594,
    dominanceLastWeek: 12.8699,
    dominanceYearlyHigh: 11.9088,
    dominanceYesterday: 12.1399,
    dominanceYearlyLow: 18.1851,
    timestamp: "2024-11-21T18:52:13.104Z"
  },
  ...
]
```

## Error Handling

Errors during fetching or parsing data are thrown as JavaScript `Error` objects. Ensure proper error handling:

```typescript
try {
  const api = new CryptoDominanceAPI();
  const data = await api.getDominance();
} catch (error) {
  console.error("Error fetching dominance data:", error);
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to open issues and pull requests on the [GitHub repository](https://github.com/Miguelo981/crypto-dominance/issues).