import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Movie App',
  description: 'Search Movies and Add them to your Watchlist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
