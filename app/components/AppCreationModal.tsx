"use client";

import React from 'react'
import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { useToast } from '../components/ui/use-toast'
import { Button, ButtonProps } from '../components/ui/button'
import { AppDetails, CreationType, DEFAULT_APP_TYPE } from '../types/index'

interface AppCreationModalProps {
  onClose: () => void
  onSubmit: (details: AppDetails) => void
  isLoggedIn: boolean
  onSignUpClick: () => void
}

export default function AppCreationModal({ 
  onClose, 
  onSubmit, 
  isLoggedIn, 
  onSignUpClick 
}: AppCreationModalProps) {
  const [appName, setAppName] = useState('')
  const appType: CreationType = DEFAULT_APP_TYPE
  const { toast } = useToast()

  const handleSubmit = () => {
    if (!appName) {
      toast({
        id: `toast-${Date.now()}`,
        status: 'error',
        title: 'Validation Error',
        description: 'Please provide an app name.'
      })
      return
    }

    const newApp: AppDetails = {
      id: `app-${Date.now()}`,
      name: appName,
      description: '',
      type: appType,
      createdAt: new Date().toISOString()
    }

    onSubmit(newApp)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4">Create New App</h2>
        
        {!isLoggedIn && (
          <div className="mb-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative">
            <p>You need to sign up or log in to create an app.</p>
            <Button 
              {...{ 
                onClick: onSignUpClick, 
                className: "mt-2 w-full", 
                variant: "outline", 
                children: "Sign Up / Log In" 
              } as ButtonProps}
            />
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="appName" className="block text-sm font-medium text-gray-700">
            App Name
          </label>
          <input
            type="text"
            id="appName"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            disabled={!isLoggedIn}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter your app name"
          />
        </div>

        <div className="flex justify-end space-x-2">
          <Button 
            {...{ 
              onClick: onClose, 
              variant: "outline", 
              children: "Cancel" 
            } as ButtonProps}
          />
          <Button 
            {...{ 
              onClick: handleSubmit, 
              disabled: !isLoggedIn || !appName,
              children: "Create App" 
            } as ButtonProps}
          />
        </div>
      </div>
    </div>
  )
}
