import type { CryptoDominance, GetDominanceResponse } from '@/types.ts'

export class CryptoDominanceAdapter implements CryptoDominance {
    private data: GetDominanceResponse;
    private index: number

    constructor(data: GetDominanceResponse, index: number) {
        this.data = data
        this.index = index
    }

    get token(): { name: string; symbol?: string; } {
        return {
            name: this.data.data.configs.at(this.index)!.name,
            symbol: this.data.data.configs.at(this.index)!.symbol
        }
    }

    get timestamp(): Date {
        return new Date(this.data.status.timestamp)
    }

    get marketcapProportion(): number {
        return this.data.data.dominance.at(this.index)!.mcProportion
    }

    get marketcapChangeInPast30Days(): number {
        return this.data.data.dominance.at(this.index)!.mcChangePct30d
    }

    get dominanceLastMonth(): number {
        return this.data.data.dominanceLastMonth.at(this.index)!.mcProportion
    }

    get dominanceLastWeek(): number {
        return this.data.data.dominanceLastWeek.at(this.index)!.mcProportion
    }

    get dominanceYearlyHigh(): number {
        return this.data.data.dominanceYearlyHigh.at(this.index)!.mcProportion
    }

    get dominanceYesterday(): number {
        return this.data.data.dominanceYesterday.at(this.index)!.mcProportion
    }

    get dominanceYearlyLow(): number {
        return this.data.data.dominanceYearlyLow.at(this.index)!.mcProportion
    }

    toJSON(): CryptoDominance {
        return {
            token: this.token,
            marketcapProportion: this.marketcapProportion,
            marketcapChangeInPast30Days: this.marketcapChangeInPast30Days,
            dominanceLastMonth: this.dominanceLastMonth,
            dominanceLastWeek: this.dominanceLastWeek,
            dominanceYearlyHigh: this.dominanceYearlyHigh,
            dominanceYesterday: this.dominanceYesterday,
            dominanceYearlyLow: this.dominanceYearlyLow,
            timestamp: this.timestamp
        }
    }
}