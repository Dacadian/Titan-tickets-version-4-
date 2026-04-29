import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Titan Tickets - Premier Event Ticketing Platform',
  description: 'Secure, fast ticketing with M-Pesa integration. Powered by Titan.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {children}
        </main>
      </body>
    </html>
  )
}
