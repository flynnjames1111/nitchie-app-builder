'use client'

import React from 'react'
import { AppDetails } from '../types'

interface DashboardProps {
  apps: AppDetails[]
  onCreateApp?: () => void
}

export default function Dashboard({ 
  apps, 
  onCreateApp 
}: DashboardProps) {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Apps</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                {app.logo ? (
                  <img src={app.logo} alt={app.name} className="h-20 w-20 object-contain" />
                ) : (
                  <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-blue-500">{app.name[0]}</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{app.name}</h2>
                <p className="text-gray-600 mb-2">{app.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {app.category}
                  </span>
                  <button className="text-blue-500 hover:text-blue-700 font-medium">
                    Manage
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {onCreateApp && (
          <button onClick={onCreateApp} className="text-blue-500 hover:text-blue-700 font-medium mt-4">
            Create New App
          </button>
        )}
      </div>
    </div>
  )
}
