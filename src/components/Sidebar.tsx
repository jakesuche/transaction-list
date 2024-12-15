import Link from 'next/link'
import { Home, FileText } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800">
      <nav className="mt-5 px-2">
        <Link
          href="/dashboard"
          className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          <Home className="mr-4 h-6 w-6" />
          Dashboard
        </Link>
        <Link
          href="/dashboard/transactions"
          className="group mt-1 flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          <FileText className="mr-4 h-6 w-6" />
          Transactions
        </Link>
      </nav>
    </aside>
  )
}

