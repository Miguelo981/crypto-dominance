import type { ICryptoDominanceAPI } from "@/interfaces/crypto-dominance.ts";
import type { CryptoDominance, GetDominanceResponse, ProxyConfig } from "@/types.ts";
import { DOMINANCE_API_URL } from "@/constants.ts";
import { CryptoDominanceAdapter } from "@/adapters/crypto-dominance.ts";

export class CryptoDominanceAPI implements ICryptoDominanceAPI {
    //private client?: Deno.HttpClient;

    constructor(proxyConfig?: ProxyConfig) {
        if (!proxyConfig) return

        /* this.client = Deno.createHttpClient({
            proxy: {
              url: proxyConfig?.url,
              basicAuth: proxyConfig?.basicAuth
            }
        }); */
    }

    async getDominance(): Promise<CryptoDominance[]> {
      const res = await fetch(DOMINANCE_API_URL/* , {
          client: this.client!
      } */)

      if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json() as GetDominanceResponse;

      const adaptedData = data.data.configs.map((_, index) => new CryptoDominanceAdapter(data, index).toJSON())

      return adaptedData
    }
}