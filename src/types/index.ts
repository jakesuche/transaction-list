export interface Transaction {
  id: string
  date: string
  amount: number
  description: string
  status: 'success' | 'failed'
}

