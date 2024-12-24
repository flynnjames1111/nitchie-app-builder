"use client"

import React, { ReactNode } from 'react'

interface CardComponentProps {
  children: ReactNode
  className?: string
  [key: string]: any
}

export const Card = ({ children, className = '', ...props }: CardComponentProps) => (
  <div className={className} {...props}>{children}</div>
)

export const CardContent = ({ children, className = '', ...props }: CardComponentProps) => (
  <div className={className} {...props}>{children}</div>
)

export const CardDescription = ({ children, className = '', ...props }: CardComponentProps) => (
  <p className={className} {...props}>{children}</p>
)

export const CardFooter = ({ children, className = '', ...props }: CardComponentProps) => (
  <div className={className} {...props}>{children}</div>
)

export const CardHeader = ({ children, className = '', ...props }: CardComponentProps) => (
  <div className={className} {...props}>{children}</div>
)

export const CardTitle = ({ children, className = '', ...props }: CardComponentProps) => (
  <h2 className={className} {...props}>{children}</h2>
)

export const CardPlaceholder = () => <div>Card placeholder</div>
export const CardContentPlaceholder = () => <div>Card content placeholder</div>
export const CardDescriptionPlaceholder = () => <p>Card description placeholder</p>
export const CardFooterPlaceholder = () => <div>Card footer placeholder</div>
export const CardHeaderPlaceholder = () => <div>Card header placeholder</div>
export const CardTitlePlaceholder = () => <h2>Card title placeholder</h2>
