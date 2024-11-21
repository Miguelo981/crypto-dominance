export interface GetDominanceResponse {
    data:   Data;
    status: Status;
}

export interface Data {
    configs:             Config[];
    dominance:           Dominance[];
    dominanceLastMonth:  DominanceLastMonthElement[];
    dominanceLastWeek:   DominanceLastMonthElement[];
    dominanceYearlyHigh: DominanceYearly[];
    dominanceYearlyLow:  DominanceYearly[];
    dominanceYesterday:  DominanceLastMonthElement[];
}

export interface Config {
    id?:     number;
    name:    string;
    symbol?: string;
}

export interface Dominance {
    mcChangePct30d: number;
    mcProportion:   number;
}

export interface DominanceLastMonthElement {
    mcProportion: number;
}

export interface DominanceYearly {
    timestamp:    string;
    mcProportion: number;
}

export interface Status {
    timestamp:     string;
    error_code:    string;
    error_message: string;
    elapsed:       string;
    credit_count:  number;
}

export interface ProxyConfig {
    url: string
    basicAuth?: {
        username: string
        password: string
    }
}

export interface CryptoDominance {
    token: {
        name: string
        symbol?: string
    },
    marketcapProportion: number
    marketcapChangeInPast30Days: number
    dominanceLastMonth: number
    dominanceLastWeek: number
    dominanceYearlyHigh: number
    dominanceYesterday: number
    dominanceYearlyLow: number
    timestamp: Date
}