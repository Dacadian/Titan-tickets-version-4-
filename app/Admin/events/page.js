'use client'
import { useState, useEffect } from 'react'
import EventForm from '@/components/Admin/EventForm'
import EventsTable from '@/components/Admin/EventsTable'
import { getEvents } from '@/lib/db'
import Link from 'next/link'

export default function EventsManagement() {
  const [events, setEvents] = useState([])
  const [showCreateForm, setShowCreateForm] = useState(false)

  useEffect(() => {
    setEvents(getEvents())
  }, [])

  const handleEventCreated = (newEvent) => {
    setEvents([newEvent, ...events])
    setShowCreateForm(false)
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div>
          <h1 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
            Event Management
          </h1>
          <p className="text-xl text-gray-400">Create, edit, and manage your events</p>
        </div>
        <button 
          onClick={() => setShowCreateForm(true)}
          className="btn-primary px-12 py-6 text-xl shadow-2xl"
        >
          + Create Event
        </button>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <div className="glass-effect rounded-3xl p-2 lg:p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black text-white">New Event</h2>
            <button 
              onClick={() => setShowCreateForm(false)}
              className="text-gray-400 hover:text-white p-2 rounded-xl hover:bg-gray-800/50 transition-all"
            >
              ✕
            </button>
          </div>
          <EventForm onSuccess={handleEventCreated} />
        </div>
      )}

      {/* Events Table */}
      <div className="glass-effect rounded-3xl p-8">
        <EventsTable events={events} />
      </div>
    </div>
  )
}
