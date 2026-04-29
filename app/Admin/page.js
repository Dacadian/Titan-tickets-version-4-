'use client'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/Admin/Sidebar'
import AnalyticsCard from '@/components/Admin/AnalyticsCard'
import EventsTable from '@/components/Admin/EventsTable'
import { getEvents } from '@/lib/db'

export default function AdminDashboard() {
  const [events, setEvents] = useState([])
  const [activeTab, setActiveTab] = useState('dashboard')

  useEffect(() => {
    setEvents(getEvents())
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="ml-0 lg:ml-64 p-8 lg:p-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
              Titan Admin
            </h1>
            <p className="text-xl text-gray-400">Manage your events like a titan</p>
          </div>
          <button className="btn-primary px-10 py-5 text-xl mt-6 lg:mt-0">
            + New Event
          </button>
        </div>

        {/* Content */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnalyticsCard 
                title="Total Events" 
                value={events.length} 
                icon="🎫"
                trend="+12%"
                color="orange"
              />
              <AnalyticsCard 
                title="Tickets Sold" 
                value="2,847" 
                icon="🎟️"
                trend="+28%"
                color="emerald"
              />
              <AnalyticsCard 
                title="Revenue" 
                value="KSh 8.4M" 
                icon="💰"
                trend="+45%"
                color="yellow"
              />
              <AnalyticsCard 
                title="Conversion" 
                value="87%" 
                icon="📈"
                trend="+3%"
                color="purple"
              />
            </div>

            {/* Recent Events Table */}
            <div className="glass-effect rounded-3xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black text-white">Recent Events</h2>
                <a href="/admin/events" className="btn-secondary text-lg">
                  View All
                </a>
              </div>
              <EventsTable events={events.slice(0, 5)} />
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div>
            <EventsTable events={events} />
          </div>
        )}
      </main>
    </div>
  )
}
