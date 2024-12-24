"use client"

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '../components/ui/button'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'unauthenticated') {
    router.push('/login')
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Profile Information</h2>
          <div className="mt-4 space-y-2">
            <p><strong>Name:</strong> {session?.user?.name || 'Not provided'}</p>
            <p><strong>Email:</strong> {session?.user?.email}</p>
          </div>
        </div>

        <div className="mt-8">
          <Button 
            variant="destructive" 
            onClick={() => signOut({ callbackUrl: '/login' })}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  )
}
