'use client'

import { useState } from 'react'
import { UserProfile } from '../types/index'
import { FcGoogle } from 'react-icons/fc'
import { XCircle } from 'lucide-react'

interface AuthModalProps {
  onClose: () => void
  onLogin: (profile: UserProfile) => void
  selectedPlan?: string
}

export default function AuthModal({ onClose, onLogin, selectedPlan }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newUser: UserProfile = {
      id: `user-${Date.now()}`,
      name,
      email,
      createdAt: new Date().toISOString()
    }
    onLogin(newUser)
  }

  const handleGoogleSignUp = () => {
    // Implement Google Sign-Up logic here
    console.log('Google Sign-Up')
    // After successful sign-up, call onLogin with the user profile
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <XCircle size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-6">{isLogin ? 'Login' : 'Sign Up'}</h2>
        {selectedPlan && (
          <p className="mb-4 text-blue-600">You're signing up for the {selectedPlan} plan</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-4">
          <button
            onClick={handleGoogleSignUp}
            className="w-full bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition flex items-center justify-center"
          >
            <FcGoogle className="mr-2" size={20} />
            Sign up with Google
          </button>
        </div>
        <p className="mt-4 text-center">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  )
}
