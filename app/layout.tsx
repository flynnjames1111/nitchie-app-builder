import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { SidebarProvider } from '@/components/ui/sidebar'
import { ToastProvider } from '@/components/ui/use-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NitchieApps - No-Code App Builder',
  description: 'Build your app without writing a single line of code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ToastProvider>
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </ToastProvider>
      </body>
    </html>
  )
}
