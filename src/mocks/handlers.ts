import { http, HttpResponse } from 'msw'

const STORAGE_KEY = 'fast-money-track:transactions'

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

const SEED_DATA: Transaction[] = [
  {
    id: 1,
    title: 'Freelance de website',
    type: 'deposit',
    category: 'Dev',
    amount: 6000,
    createdAt: new Date('2021-02-12 09:00:00').toISOString(),
  },
  {
    id: 2,
    title: 'Aluguel',
    type: 'withdraw',
    category: 'Casa',
    amount: 1200,
    createdAt: new Date('2021-02-14 11:00:00').toISOString(),
  },
]

function getTransactions(): Transaction[] {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === null) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_DATA))
    return SEED_DATA
  }
  return JSON.parse(stored)
}

function saveTransactions(transactions: Transaction[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
}

export const handlers = [
  http.get('/api/transactions', () => {
    const transactions = getTransactions()
    return HttpResponse.json({ transactions })
  }),

  http.post('/api/transactions', async ({ request }) => {
    const data = await request.json() as Omit<Transaction, 'id'>
    const transactions = getTransactions()

    const transaction: Transaction = {
      id: Date.now(),
      ...data,
    }

    saveTransactions([...transactions, transaction])

    return HttpResponse.json({ transaction }, { status: 201 })
  }),
]
