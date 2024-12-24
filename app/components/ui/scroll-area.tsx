import React from 'react'
import { UIComponentProps } from '../../types/ui'

export const ScrollArea = ({ children, className = '' }: UIComponentProps) => (
  <div className={`overflow-auto ${className}`}>
    {children}
  </div>
)
