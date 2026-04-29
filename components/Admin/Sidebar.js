'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Calendar, 
  Ticket, 
  Users, 
  BarChart3, 
  Settings,
  LogOut 
} from 'lucide-react'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/events', label: 'Events', icon: Calendar },
  { href: '/admin/tickets', label: 'Tickets', icon: Ticket },
  { href: '/admin/users', label: 'Users', icon: Users },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 glass-effect transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out lg:static lg:inset-0">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-8 border-b border-gray-800">
          <Link href="/admin" className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-2xl">
              <Ticket className="w-8 h-8 text-black" />
            </div>
            <div>
              <h2 className="text-2xl font-black gradient-text">Titan</h2>
              <p className="text-sm text-gray-400 font-medium">Admin Panel</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.label.toLowerCase()
            return (
              <button
                key={item.href}
                onClick={() => setActiveTab(item.label.toLowerCase())}
                className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 group ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-black shadow-2xl shadow-orange-500/25 scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50 hover:shadow-lg'
                }`}
              >
                <item.icon className={`w-6 h-6 ${isActive ? 'text-black' : 'group-hover:text-orange-400'}`} />
                <span className="font-semibold">{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-gray-800">
          <button className="w-full flex items-center space-x-4 px-6 py-4 rounded-2xl bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-300 group">
            <LogOut className="w-6 h-6 group-hover:text-orange-400" />
            <span className="font-semibold">Logout</span>
          </button>
        </div>
      </div>
    </div>

    {/* Mobile backdrop */}
    <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" />
  )
}
