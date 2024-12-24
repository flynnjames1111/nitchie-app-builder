import React from 'react'
import { ProgressProps } from '../../types/ui'

export type { ProgressProps }

export const Progress = ({ 
  value, 
  max = 100, 
  className = '',
  ...props 
}: ProgressProps & { className?: string }) => {
  return (
    <div 
      role="progressbar" 
      aria-valuenow={value} 
      aria-valuemin={0} 
      aria-valuemax={max}
      className={`bg-gray-200 rounded-full h-2 ${className}`}
    >
      <div 
        className="bg-blue-500 h-full rounded-full" 
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  )
}
