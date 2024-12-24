"use client"

import React from 'react'
import { TabProps, TabsProps } from '../../types/ui'

export const Tabs: React.FC<TabsProps> = ({ 
  children, 
  defaultValue, 
  onValueChange, 
  className = '' 
}) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue || '')

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    onValueChange?.(value)
  }

  const tabChildren = React.Children.toArray(children)
  const tabList = tabChildren.filter(
    (child): child is React.ReactElement<TabProps> => 
      React.isValidElement(child) && child.type === Tab
  )

  const tabPanels = tabChildren.filter(
    (child): child is React.ReactElement<TabProps> => 
      React.isValidElement(child) && child.type === TabPanel
  )

  return (
    <div className={className}>
      <div className="flex border-b">
        {tabList.map(tab => (
          <button
            key={tab.props.value}
            onClick={() => handleTabChange(tab.props.value)}
            className={`px-4 py-2 ${
              activeTab === tab.props.value 
                ? 'border-b-2 border-blue-500 text-blue-500' 
                : 'text-gray-500'
            }`}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div>
        {tabPanels.find(panel => panel.props.value === activeTab)}
      </div>
    </div>
  )
}

export const Tab: React.FC<TabProps> = ({ children, label, value }) => {
  // This component is used for type checking and rendering in Tabs
  return null
}

export const TabPanel: React.FC<TabProps & { children: React.ReactNode }> = ({ 
  children, 
  value, 
  className = '' 
}) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
)

export const TabsContent = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={className}>{children}</div>
)

export const TabsList = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={className}>{children}</div>
)

export const TabsTrigger = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <button className={className}>{children}</button>
)
