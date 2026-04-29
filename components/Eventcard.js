'use client'
import Link from 'next/link'
import { Calendar, MapPin, Users, DollarSign, TicketCheck } from 'lucide-react'
import { format } from 'date-fns'
import { useState } from 'react'

export default function EventCard({ event }) {
  const [showDetails, setShowDetails] = useState(false)
  const formattedDate = format(new Date(event.date), 'PPPp')

  return (
    <Link href={`/event/${event.id}`} className="block card-hover">
      <div className="glass-effect rounded-3xl p-8 h-full">
        {/* Image */}
        <div className="relative h-56 mb-8 overflow-hidden rounded-2xl group-hover:scale-105 transition-transform duration-500">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute top-6 left-6">
            <span className={`px-4 py-2 rounded-full text-sm font-bold ${
              event.availableTickets > 0 
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-black shadow-lg' 
                : 'bg-gray-600/80 text-gray-300 backdrop-blur-sm'
            }`}>
              {event.availableTickets > 0 ? 'Live Tickets' : 'Sold Out'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 leading-tight group-hover:text-orange-400 transition-colors">
              {event.title}
            </h3>
            <p className="text-gray-400 leading-relaxed line-clamp-2">{event.description}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span>{formattedDate.split(',')[0]}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>{event.location}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl">
                <Users className="w-5 h-5 text-black" />
              </div>
              <span className="text-gray-400">{event.availableTickets} left</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <DollarSign className="w-6 h-6 text-orange-500" />
              <span className="text-2xl font-black text-white">KSh {event.price.toLocaleString()}</span>
            </div>
          </div>

          <div className="pt-6">
            <div className="btn-primary w-full text-center text-lg font-black flex items-center justify-center space-x-3">
              <TicketCheck className="w-6 h-6" />
              <span>Secure Tickets</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
