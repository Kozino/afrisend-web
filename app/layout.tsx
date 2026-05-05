import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AfriSend - Send Money to Africa with Love, Not Fees',
  description: 'The fastest, most secure way for the Qatari diaspora to support family back home.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  )
}