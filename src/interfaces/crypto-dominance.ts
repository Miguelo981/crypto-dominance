import type { CryptoDominance } from '@/types.ts'

export interface ICryptoDominanceAPI {
    getDominance(): Promise<CryptoDominance[]>;
}