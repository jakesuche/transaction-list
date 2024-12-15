import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/')
  }

  return (
    <header className="flex items-center justify-between bg-gray-800 px-6 py-4">
      <h1 className="text-2xl font-bold">Transaction Dashboard</h1>
      <Button onClick={handleLogout} variant="outline">
        Logout
      </Button>
    </header>
  )
}

