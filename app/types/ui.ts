import React from 'react'

export interface UIComponentProps {
  children?: React.ReactNode
  className?: string
}

export interface LabelProps extends UIComponentProps {
  htmlFor?: string
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string
  value?: string
  onValueChange?: (value: string) => void
}

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
}

export interface TabProps extends UIComponentProps {
  label: string
  value: string
}

export interface TabsProps extends UIComponentProps {
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export interface SidebarProps extends UIComponentProps {
  isOpen?: boolean
  onToggle?: () => void
}

export type ToastVariant = 'default' | 'success' | 'error' | 'destructive' | 'info'

export interface ToastProps {
  id: string
  title: string
  description?: string
  status?: ToastVariant
  duration?: number
}
