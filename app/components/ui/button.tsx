"use client"

import React, { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  asChild?: boolean
}

export type { ButtonProps }

export const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '', 
  asChild = false,
  ...props 
}: ButtonProps) => {
  if (asChild) {
    return <>{children}</>
  }

  const baseClasses = 'rounded-md focus:outline-none focus:ring-2'
  const variantClasses = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-gray-300 hover:bg-gray-100',
    ghost: 'hover:bg-gray-100'
  }
  const sizeClasses = {
    default: 'px-4 py-2 text-base',
    sm: 'px-2 py-1 text-sm',
    lg: 'px-6 py-3 text-lg',
    icon: 'p-2'
  }

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  )
}
