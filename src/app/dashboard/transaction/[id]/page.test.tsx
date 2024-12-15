import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import TransactionDetailPage from './page'

vi.mock('next/navigation', () => ({
  useParams: () => ({ id: '1' }),
}))

vi.mock('@/store/transactionStore', () => ({
  useTransactionStore: () => ({
    getTransactionById: () => ({
      id: '1',
      date: '2023-07-01',
      amount: 100,
      description: 'Test transaction',
      status: 'success',
    }),
  }),
}))

describe('TransactionDetailPage', () => {
  it('renders correctly', () => {
    render(<TransactionDetailPage />)
    expect(screen.getByText('Transaction Details')).toBeInTheDocument()
    expect(screen.getByText('Test transaction')).toBeInTheDocument()
    expect(screen.getByText('$100.00')).toBeInTheDocument()
    expect(screen.getByText('success')).toBeInTheDocument()
  })
})

