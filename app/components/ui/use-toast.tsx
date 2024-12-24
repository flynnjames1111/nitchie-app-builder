"use client";

import * as React from 'react'

export type ToastVariant = 'default' | 'success' | 'error' | 'info' | 'destructive'

export interface ToastProps {
  id?: string
  title?: string
  description?: string
  status?: ToastVariant
  duration?: number
  onClose?: () => void
}

interface ToastContextType {
  toast: (props: ToastProps) => void
  dismiss: (id: string) => void
  toasts: ToastProps[]
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastProps[]>([])

  const toast = (props: ToastProps) => {
    const id = props.id || `toast-${Date.now()}`
    const newToast = { ...props, id }
    setToasts(currentToasts => [...currentToasts, newToast])

    // Auto-dismiss after duration (default 3 seconds)
    const duration = props.duration || 3000
    setTimeout(() => {
      setToasts(currentToasts => 
        currentToasts.filter(toast => toast.id !== id)
      )
      props.onClose?.()
    }, duration)

    return { id }
  }

  const dismiss = (id: string) => {
    setToasts(currentToasts => 
      currentToasts.filter(toast => toast.id !== id)
    )
  }

  return (
    <ToastContext.Provider value={{ toast, dismiss, toasts }}>
      {children}
      <Toaster />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

function getToastColor(status?: ToastVariant) {
  switch (status) {
    case 'success': return 'bg-green-100 text-green-800'
    case 'error': return 'bg-red-100 text-red-800'
    case 'info': return 'bg-blue-100 text-blue-800'
    case 'destructive': return 'bg-red-500 text-white'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map(toast => (
        <div 
          key={toast.id} 
          className={`
            p-4 rounded-lg shadow-lg 
            ${getToastColor(toast.status)}
          `}
        >
          {toast.title && <div className="font-bold">{toast.title}</div>}
          {toast.description && <div>{toast.description}</div>}
        </div>
      ))}
    </div>
  )
}
