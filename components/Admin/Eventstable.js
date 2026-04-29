'use client'
import { Edit3, Trash2, Eye, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function EventsTable({ events }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="py-6 px-6 text-left text-xl font-bold text-white">Event</th>
            <th className="py-6 px-6 text-left text-xl font-bold text-white">Date</th>
            <th className="py-6 px-6 text-left text-xl font-bold text-white">Location</th>
            <th className="py-6 px-6 text-left text-xl font-bold text-white">Price</th>
            <th className="py-6 px-6 text-left text-xl font-bold text-white">Tickets</th>
            <th className="py-6 px-6 text-right text-xl font-bold text-white">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {events.map((event) => (
            <tr key={event.id} className="hover:bg-gray-800/50 transition-colors group">
              <td className="py-8 px-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{event.title}</h3>
                    <p className="text-gray-500 text-sm">{event.description}</p>
                  </div>
                </div>
              </td>
              <td className="py-8 px-6 text-gray-400 font-semibold">{new Date(event.date).toLocaleDateString()}</td>
              <td className="py-8 px-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800/50 text-gray-300">
                  {event.location}
                </span>
              </td>
              <td className="py-8 px-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-black font-bold">
                  <DollarSign className="w-4 h-4 mr-2" />
                  {event.price.toLocaleString()}
                </div>
              </td>
              <td className="py-8 px-6 font-bold text-lg text-orange-400">{event.availableTickets}</td>
              <td className="py-8 px-6 text-right">
                <div className="flex items-center justify-end space-x-2">
                  <Link href={`/event/${event.id}`} className="p-3 hover:bg-gray-700 rounded-xl transition-colors">
                    <Eye className="w-5 h-5 text-gray-400 hover:text-white" />
                  </Link>
                  <button className="p-3 hover:bg-gray-700 rounded-xl transition-colors">
                    <Edit3 className="w-5 h-5 text-gray-400 hover:text-orange-400" />
                  </button>
                  <button className="p-3 hover:bg-gray-700 rounded-xl transition-colors">
                    <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-400" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
