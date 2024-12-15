import { Button } from '@/components/ui/button'

interface TransactionFilterProps {
  onFilter: (status: string | null) => void
}

export default function TransactionFilter({ onFilter }: TransactionFilterProps) {
  return (
    <div className="mb-4 flex space-x-2">
      <Button onClick={() => onFilter(null)} variant="outline">
        All
      </Button>
      <Button onClick={() => onFilter('success')} variant="outline">
        Success
      </Button>
      <Button onClick={() => onFilter('failed')} variant="outline">
        Failed
      </Button>
    </div>
  )
}

