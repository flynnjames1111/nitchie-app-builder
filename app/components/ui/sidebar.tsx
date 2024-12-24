"use client"

import React, { createContext, useContext, useState } from 'react'
import { UIComponentProps } from '../../types/ui'

interface SidebarContextType {
  isOpen: boolean
  toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  toggleSidebar: () => {}
})

export const SidebarProvider: React.FC<UIComponentProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

export const Sidebar: React.FC<UIComponentProps> = ({ children, className = '' }) => {
  const { isOpen } = useSidebar()

  return (
    <div 
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${className}`}
    >
      {children}
    </div>
  )
}

export const SidebarHeader: React.FC<UIComponentProps> = ({ children, className = '' }) => (
  <div className={`p-4 border-b ${className}`}>{children}</div>
)

export const SidebarContent: React.FC<UIComponentProps> = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
)

export const SidebarMenu: React.FC<UIComponentProps> = ({ children, className = '' }) => (
  <nav className={`${className}`}>{children}</nav>
)

export const SidebarMenuItem: React.FC<UIComponentProps & { active?: boolean }> = ({ 
  children, 
  className = '', 
  active = false 
}) => (
  <div 
    className={`p-2 hover:bg-gray-100 cursor-pointer 
      ${active ? 'bg-blue-50 text-blue-600' : ''} ${className}`}
  >
    {children}
  </div>
)

export const SidebarTrigger: React.FC<UIComponentProps> = ({ children, className = '' }) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button 
      onClick={toggleSidebar} 
      className={`p-2 hover:bg-gray-100 ${className}`}
    >
      {children}
    </button>
  )
}

export const SidebarMenuButton: React.FC<{
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean 
}> = ({ 
  children, 
  className = '', 
  onClick, 
  isActive = false 
}) => (
  <button 
    onClick={onClick} 
    className={`w-full text-left p-2 hover:bg-gray-100 
      ${isActive ? 'bg-blue-50 text-blue-600' : ''} ${className}`}
  >
    {children}
  </button>
)
