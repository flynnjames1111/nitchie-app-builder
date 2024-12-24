"use client";

import * as React from 'react'
import dynamic from 'next/dynamic'
import { AppDetails, CreationType, UserProfile } from './types/index'
import { useToast } from './components/ui/use-toast'
import { Toaster } from './components/ui/use-toast'

// Dynamically import client-side components
const Dashboard = dynamic(() => import('./components/Dashboard'), { 
  ssr: false,
  loading: () => <p>Loading dashboard...</p>
})

const AuthModal = dynamic(() => import('./components/AuthModal'), { 
  ssr: false,
  loading: () => <p>Loading authentication...</p>
})

const AppCreationModal = dynamic(() => import('./components/AppCreationModal'), { 
  ssr: false,
  loading: () => <p>Loading app creation...</p>
})

const ChatbotWidget = dynamic(() => import('./components/ChatbotWidget'), { 
  ssr: false,
  loading: () => <p>Loading chatbot...</p>
})

const Button = dynamic(() => import('./components/ui/button').then(mod => mod.Button), { 
  ssr: false,
  loading: () => <p>Loading button...</p>
})

export default function Home() {
  const [showAppCreationForm, setShowAppCreationForm] = React.useState(false)
  const [showAuthModal, setShowAuthModal] = React.useState(false)
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [userProfile, setUserProfile] = React.useState<UserProfile | null>(null)
  const [userApps, setUserApps] = React.useState<AppDetails[]>([])
  const [selectedPlan, setSelectedPlan] = React.useState<string | null>(null)
  const { toast } = useToast()

  React.useEffect(() => {
    // Check login status on initial load
    const checkLoginStatus = async () => {
      try {
        // Simulated login check
        const storedEmail = localStorage.getItem('userEmail')
        if (storedEmail) {
          setIsLoggedIn(true)
          setUserProfile({ 
            id: `user-${Date.now()}`,
            name: storedEmail, 
            email: storedEmail,
            createdAt: new Date().toISOString()
          })
        }
      } catch (error) {
        console.error('Login check failed', error)
      }
    }

    checkLoginStatus()
  }, [])

  const handleCreateApp = (details: AppDetails) => {
    setUserApps([...userApps, details])
    setShowAppCreationForm(false)

    toast({
      status: 'success', 
      title: 'App Created', 
      description: `Your app "${details.name}" has been created successfully.`
    })
  }

  const handleLogin = (profile: UserProfile) => {
    setIsLoggedIn(true)
    setUserProfile(profile)
    localStorage.setItem('userEmail', profile.email)
    setShowAuthModal(false)

    toast({
      status: 'success',
      title: 'Login Successful',
      description: `Welcome back, ${profile.email}!`
    })
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserProfile(null)
    localStorage.removeItem('userEmail')

    toast({
      status: 'info',
      title: 'Logged Out',
      description: 'You have been successfully logged out.'
    })
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">NitchieApps</h1>
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">{userProfile?.email}</span>
              <Button onClick={handleLogout} variant="outline">
                Logout
              </Button>
            </div>
          ) : (
            <Button onClick={() => setShowAuthModal(true)}>
              Sign Up / Login
            </Button>
          )}
        </header>

        {isLoggedIn && (
          <>
            <div className="mb-6">
              <Button onClick={() => setShowAppCreationForm(true)}>
                Create New App
              </Button>
            </div>

            <Dashboard 
              apps={userApps} 
              onCreateApp={() => setShowAppCreationForm(true)}
            />
          </>
        )}

        {showAuthModal && (
          <AuthModal 
            onClose={() => setShowAuthModal(false)}
            onLogin={handleLogin}
          />
        )}

        {showAppCreationForm && (
          <AppCreationModal 
            onClose={() => setShowAppCreationForm(false)}
            onSubmit={handleCreateApp}
            isLoggedIn={isLoggedIn}
            onSignUpClick={() => {
              setShowAuthModal(true)
              setShowAppCreationForm(false)
            }}
          />
        )}

        <Toaster />
      </div>
    </main>
  )
}
