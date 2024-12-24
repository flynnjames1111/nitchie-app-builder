import { useState } from 'react'

export function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname)
  
  return pathname
}

export function useRouter() {
  return {
    push: (path: string) => {
      window.location.href = path
    }
  }
}
