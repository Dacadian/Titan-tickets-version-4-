'use client'
import { useState } from 'react'
import { createEvent } from '@/lib/db'
import { Plus, Image, Calendar, MapPin, DollarSign } from 'lucide-react'

export default function EventForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    price: '',
    availableTickets: '',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const newEvent = createEvent(formData)
      onSuccess(newEvent)
      setFormData({
        title: '',
        description: '',
        date: '',
        location: '',
        price: '',
        availableTickets: '',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'
      })
    } catch (error) {
      console.error('Error creating event:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="glass-effect rounded-3xl p-10 max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-2xl mb-6 shadow-2xl mx-auto w-fit">
          <Plus className="w-8 h-8 text-black mr-3" />
          <h2 className="text-3xl font-black text-white">Create New Event</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-gray-300 font-semibold mb-4 flex items-center">
              <Image className="w-5 h-5 mr-3 text-orange-400" />
              Event Title
            </label>
            <input
              type="text"
              required
              className="w-full bg-transparent border border-gray-700 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all"
              placeholder="e.g. Titan Tech Summit 2024"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-4 flex items-center">
              <DollarSign className="w-5 h-5 mr-3 text-orange-400" />
              Ticket Price (KSh)
            </label>
            <input
              type="number"
              required
              className="w-full bg-transparent border border-gray-700 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all"
              placeholder="2500"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: parseInt(e.target.value)})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-gray-300 font-semibold mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-3 text-orange-400" />
              Event Date & Time
            </label>
            <input
              type="datetime-local"
              required
              className="w-full bg-transparent border border-gray-700 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-4 flex items-center">
              <Users className="w-5 h-5 mr-3 text-orange-400" />
              Available Tickets
            </label>
            <input
              type="number"
              required
              className="w-full bg-transparent border border-gray-700 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all"
              placeholder="1000"
              value={formData.availableTickets}
              onChange={(e) => setFormData({...formData, availableTickets: parseInt(e.target.value)})}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-300 font-semibold mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-3 text-orange-400" />
            Location
          </label>
          <input
            type="text"
            required
            className="w-full bg-transparent border border-gray-700 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all"
            placeholder="e.g. KICC - Nairobi"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-gray-300 font-semibold mb-4">
            Event Description
          </label>
          <textarea
            rows="4"
            required
            className="w-full bg-transparent border border-gray-700 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all resize-vertical"
            placeholder="Tell attendees why they should attend your event..."
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary text-xl py-6 shadow-2xl flex items-center justify-center space-x-4"
        >
          {loading ? (
            <>
              <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-2xl animate-spin" />
              <span>Creating Event...</span>
            </>
          ) : (
            <>
              <Plus className="w-8 h-8" />
              <span>Launch Event</span>
            </>
          )}
        </button>
      </form>
    </div>
  )
}
