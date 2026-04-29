'use client'
import Link from 'next/link'
import { Menu, X, Ticket } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="glass-effect fixed top-0 w-full z-50 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
            <Ticket className="w-7 h-7 text-black" />
          </div>
          <span className="text-2xl font-black gradient-text tracking-tight">Titan</span>
          <span className="text-xl font-bold text-orange-400">Tickets</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-lg font-semibold text-gray-300 hover:text-white hover:underline underline-offset-4 transition-all duration-300">
            Events
          </Link>
          <Link href="/admin" className="text-lg font-semibold text-gray-300 hover:text-white hover:underline underline-offset-4 transition-all duration-300">
            Admin
          </Link>
          <a href="#contact" className="btn-secondary">
            M-Pesa Ready
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-xl hover:bg-gray-800/50 transition-colors"
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-4 pt-4 border-t border-gray-800">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="py-3 px-4 rounded-xl hover:bg-gray-800/50 transition-all" onClick={() => setMobileOpen(false)}>
              Events
            </Link>
            <Link href="/admin" className="py-3 px-4 rounded-xl hover:bg-gray-800/50 transition-all" onClick={() => setMobileOpen(false)}>
              Admin
            </Link>
            <a href="#contact" className="btn-secondary text-center" onClick={() => setMobileOpen(false)}>
              M-Pesa Ready
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
