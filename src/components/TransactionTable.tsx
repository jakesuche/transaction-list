
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Transaction } from '@/types'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface TransactionTableProps {
  transactions: Transaction[]
  currentPage: number
  onPageChange: (page: number) => void
  sortColumn: string | null
  sortDirection: 'asc' | 'desc'
  onSort: (column: string) => void
  filter: string | null
}

const ITEMS_PER_PAGE = 10

export default function TransactionTable({
  transactions,
  currentPage,
  onPageChange,
  sortColumn,
  sortDirection,
  onSort,
  filter,
}: TransactionTableProps) {
  const filteredTransactions = filter
    ? transactions.filter((t) => t.status === filter)
    : transactions

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (!sortColumn) return 0
    const aValue = a[sortColumn as keyof Transaction]
    const bValue = b[sortColumn as keyof Transaction]
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  const totalPages = Math.ceil(sortedTransactions.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedTransactions = sortedTransactions.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )

  const renderSortIcon = (column: string) => {
    if (sortColumn !== column) return null
    return sortDirection === 'asc' ? '▲' : '▼'
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead onClick={() => onSort('date')}>
              Date {renderSortIcon('date')}
            </TableHead>
            <TableHead onClick={() => onSort('amount')}>
              Amount {renderSortIcon('amount')}
            </TableHead>
            <TableHead>Description</TableHead>
            <TableHead onClick={() => onSort('status')}>
              Status {renderSortIcon('status')}
            </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>${transaction.amount.toFixed(2)}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>
                <span
                  className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                    transaction.status === 'success'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {transaction.status}
                </span>
              </TableCell>
              <TableCell>
                <Link href={`/dashboard/transaction/${transaction.id}`}>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex items-center justify-between">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

