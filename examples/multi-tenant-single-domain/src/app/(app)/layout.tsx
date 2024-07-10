import React from 'react'

import './index.scss'

const baseClass = 'multi-tenant'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={baseClass}>
      <body>{children}</body>
    </html>
  )
}
