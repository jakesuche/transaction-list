'use client'

import { useParams } from 'next/navigation'
import { useTransactionStore } from '@/store/transactionStore'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TransactionDetailPage() {
  const { id } = useParams()
  const { getTransactionById } = useTransactionStore()
  const transaction = getTransactionById(id as string)

  if (!transaction) {
    return <div>Transaction not found</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction Details</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-gray-400">ID</dt>
            <dd className="mt-1 text-lg">{transaction.id}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">Date</dt>
            <dd className="mt-1 text-lg">{transaction.date}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">Amount</dt>
            <dd className="mt-1 text-lg">${transaction.amount.toFixed(2)}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">Status</dt>
            <dd className="mt-1 text-lg capitalize">{transaction.status}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-sm font-medium text-gray-400">Description</dt>
            <dd className="mt-1 text-lg">{transaction.description}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}

