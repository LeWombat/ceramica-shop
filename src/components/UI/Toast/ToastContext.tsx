"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Toast, ToastProps } from './Toast'

interface ToastContextProps {
  showToast: (props: Omit<ToastProps, 'onClose'>) => void
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([])

  const showToast = (props: Omit<ToastProps, 'onClose'>) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts(prev => [...prev, { ...props, id, onClose: () => removeToast(id) }])
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toasts.map(toast => (
        <Toast key={toast.id} {...toast} />
      ))}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
} 