'use client'

import React from 'react'
import { Link } from '../components/ui/link'
import { usePathname } from '../hooks/useNavigation'
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger } from '@/components/ui/sidebar'
import { Home, LayoutDashboard, Settings, LogOut } from 'lucide-react'
import { UserProfile } from '../types'

interface AppShellProps {
  children: React.ReactNode
  isLoggedIn: boolean
  userProfile: UserProfile | null
  onLogout: () => void
}

export function AppShell({ children, isLoggedIn, userProfile, onLogout }: AppShellProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen">
      <Sidebar>
        <SidebarHeader>
          <Link href="/" className="flex items-center space-x-2 px-4 py-2">
            <span className="text-2xl font-bold">NitchieApps</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton 
                onClick={() => {}} 
                isActive={pathname === '/'}
              >
                <Link href="/">
                  <Home className="mr-2" />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            {isLoggedIn && (
              <>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => {}} 
                    isActive={pathname === '/dashboard'}
                  >
                    <Link href="/dashboard">
                      <LayoutDashboard className="mr-2" />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => {}} 
                    isActive={pathname === '/settings'}
                  >
                    <Link href="/settings">
                      <Settings className="mr-2" />
                      <span>Settings</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={onLogout}
                    isActive={false}
                  >
                    <LogOut className="mr-2" />
                    <span>Logout</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </>
            )}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <SidebarTrigger />
            {isLoggedIn && userProfile && (
              <span className="text-sm font-medium">Welcome, {userProfile.name}</span>
            )}
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  )
}
