import React from 'react'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => (
  <a href={href} {...props}>{children}</a>
)
