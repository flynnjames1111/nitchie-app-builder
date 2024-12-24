import React from 'react'
import { UIComponentProps } from '../../types/ui'

export interface LabelProps extends UIComponentProps {
  htmlFor?: string
}

export const Label = ({ 
  children, 
  className = '', 
  htmlFor 
}: LabelProps) => (
  <label 
    htmlFor={htmlFor} 
    className={`block text-sm font-medium text-gray-700 ${className}`}
  >
    {children}
  </label>
)
