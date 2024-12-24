import * as React from 'react'
import { ToastProps, ToastVariant } from './use-toast'

export function Toaster() {
  const [toasts, setToasts] = React.useState<ToastProps[]>([])

  const removeToast = (id: string) => {
    setToasts((currentToasts: ToastProps[]) => 
      currentToasts.filter((toast: ToastProps) => toast.id !== id)
    )
  }

  const renderToast = (message: ToastProps) => {
    const variantStyles: Record<ToastVariant, string> = {
      default: 'bg-gray-800 text-white',
      success: 'bg-green-500 text-white',
      destructive: 'bg-red-500 text-white',
      info: 'bg-blue-500 text-white',
      error: 'bg-red-500 text-white'
    }

    const toastStyle = variantStyles[message.status || 'default']

    return (
      <div 
        key={message.id} 
        className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${toastStyle}`}
        role="alert"
      >
        {message.title && <div className="font-bold">{message.title}</div>}
        {message.description && <div>{message.description}</div>}
        <button 
          onClick={() => removeToast(message.id || 'default-id')} 
          className="absolute top-1 right-1 text-sm"
        >
          ×
        </button>
      </div>
    )
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map(renderToast)}
    </div>
  )
}

export const toast = {
  success: (message: string) => console.log('Success:', message),
  error: (message: string) => console.error('Error:', message)
}
