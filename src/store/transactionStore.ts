import { create } from 'zustand'
import { Transaction } from '@/types'
import { generateMockTransactions } from '@/lib/mockData'

interface TransactionState {
  transactions: Transaction[]
  getTransactionById: (id: string) => Transaction | undefined
}

export const useTransactionStore = create<TransactionState>((set, get) => ({
  transactions: generateMockTransactions(100),
  getTransactionById: (id: string) => {
    return get().transactions.find(t => t.id === id)
  },
}))

