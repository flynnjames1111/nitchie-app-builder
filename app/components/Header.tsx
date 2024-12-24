import React from 'react'
import { Link } from '../components/ui/link'

interface HeaderProps {
  isLoggedIn: boolean
  onLoginClick: () => void
  onLogoutClick: () => void
  onCreateAppClick: () => void
}

export default function Header({ isLoggedIn, onLoginClick, onLogoutClick, onCreateAppClick }: HeaderProps) {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              NitchieApps
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</Link>
              <Link href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</Link>
              {isLoggedIn && (
                <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition">Dashboard</Link>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <button
                  onClick={onCreateAppClick}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  Create App
                </button>
                <button
                  onClick={onLogoutClick}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Login / Sign Up
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
