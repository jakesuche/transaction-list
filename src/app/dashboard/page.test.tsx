import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import DashboardPage from './page'

vi.mock('@/store/transactionStore', () => ({
  useTransactionStore: () => ({
    transactions: [],
  }),
}))

describe('DashboardPage', () => {
  it('renders correctly', () => {
    render(<DashboardPage />)
    expect(screen.getByText('Transaction History')).toBeInTheDocument()
    expect(screen.getByText('Download CSV')).toBeInTheDocument()
  })
})

