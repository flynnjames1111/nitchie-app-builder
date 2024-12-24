export const DEFAULT_APP_TYPE = 'custom' as const
export type CreationType = typeof DEFAULT_APP_TYPE | 'generate' | 'url'

export interface AppDetails {
  id: string
  name: string
  description?: string
  type: CreationType
  url?: string
  createdAt: string
  logo?: string
  color?: string
  category?: string
}

export interface UserProfile {
  id: string
  name: string
  email: string
  avatar?: string
  role?: 'user' | 'admin'
  createdAt: string
}
