import { Transaction } from '@/types'
import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function downloadCSV(data: Transaction[], filename: string) {
  const csvContent = [
    ['ID', 'Date', 'Amount', 'Description', 'Status'],
    ...data.map(t => [t.id, t.date, t.amount.toString(), t.description, t.status])
  ].map(e => e.join(',')).join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', filename)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}