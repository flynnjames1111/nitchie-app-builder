import React from 'react'
import { ProgressProps } from '../../types/ui'

export type { ProgressProps }

export const Progress = ({ 
  value, 
  max = 100, 
  className = '' 
}: ProgressProps) => (
  <div 
    role="progressbar" 
    aria-valuenow={value} 
    aria-valuemin={0} 
    aria-valuemax={max}
    className={`bg-gray-200 rounded-full h-2.5 ${className}`}
  >
    <div 
      className="bg-blue-600 h-2.5 rounded-full" 
      style={{ width: `${(value / max) * 100}%` }}
    ></div>
  </div>
)
