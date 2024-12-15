'use client'

import { useState } from 'react'
import { useTransactionStore } from '@/store/transactionStore'
import TransactionTable from '@/components/TransactionTable'
import TransactionFilter from '@/components/TransactionFilter'
import { Button } from '@/components/ui/button'
import { downloadCSV } from '@/lib/utils'

export default function DashboardPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [filter, setFilter] = useState<string | null>(null)

  const { transactions } = useTransactionStore()

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const handleFilter = (status: string | null) => {
    setFilter(status)
    setCurrentPage(1)
  }

  const handleDownloadCSV = () => {
    downloadCSV(transactions, 'transactions.csv')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Transaction History</h1>
        <Button onClick={handleDownloadCSV}>Download CSV</Button>
      </div>
      <TransactionFilter onFilter={handleFilter} />
      <TransactionTable
        transactions={transactions}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        onSort={handleSort}
        filter={filter}
      />
    </div>
  )
}

