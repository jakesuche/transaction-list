import { Transaction } from '@/types'

export function generateMockTransactions(count: number): Transaction[] {
  const transactions: Transaction[] = []
  for (let i = 0; i < count; i++) {
    transactions.push({
      id: `tr-${i + 1}`,
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString().split('T')[0],
      amount: +(Math.random() * 1000).toFixed(2),
      description: `Transaction ${i + 1}`,
      status: Math.random() > 0.2 ? 'success' : 'failed',
    })
  }
  return transactions
}

