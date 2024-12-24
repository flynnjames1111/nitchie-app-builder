"use client"

import React from 'react'
import { SelectProps } from '../../types/ui'

export const Select = ({ 
  children, 
  placeholder, 
  value, 
  className = '', 
  onValueChange,
  ...props 
}: SelectProps) => (
  <select 
    value={value} 
    className={`border rounded px-2 py-1 ${className}`} 
    onChange={(e) => onValueChange?.(e.target.value)}
    {...props}
  >
    {placeholder && (
      <option value="" disabled>
        {placeholder}
      </option>
    )}
    {children}
  </select>
)

export const SelectContent = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={className}>{children}</div>
)

export const SelectTrigger = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <button className={className}>{children}</button>
)

export const SelectValue = ({ placeholder, className = '' }: { placeholder?: string, className?: string }) => (
  <span className={className}>{placeholder}</span>
)

export const SelectItem = ({ children, value }: { children: React.ReactNode, value: string }) => (
  <option value={value}>{children}</option>
)
