'use client'
import { useState } from 'react'
import { initiateSTKPush } from '@/lib/mpesa'
import { purchaseTicket } from '@/lib/db'
import { Loader2, CheckCircle, Phone, Ticket, User } from 'lucide-react'

export default function TicketPurchase({ event, onSuccess }) {
  const [formData, setFormData] = useState({
    phone: '',
    tickets: 1,
    customerName: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const totalAmount = event.price * parseInt(formData.tickets)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const ticket = purchaseTicket({
        eventId: event.id,
        customerName: formData.customerName,
        phone: formData.phone,
        quantity: parseInt(formData.tickets),
        amount: totalAmount,
        eventTitle: event.title
      })

      const mpesaResponse = await initiateSTKPush(
        formData.phone,
        totalAmount,
        `TITAN-${ticket.id}`,
        `Titan Tickets: ${event.title}`
      )

      setMessage('🔥 Payment request sent! Check your phone for M-Pesa PIN prompt.')
      onSuccess(ticket)
    } catch (error) {
      setMessage('❌ Payment failed. Please check your details and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="glass-effect rounded-3xl p-10 max-w-lg mx-auto shadow-2xl">
      <div className="text-center mb-10">
        <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-2xl mb-6 shadow-2xl">
          <Ticket className="w-10 h-10 text-black mr-3" />
          <div>
            <h2 className="text-3xl font-black text-white">{event.title}</h2>
            <p className="text-orange-400 font-bold text-xl">KSh {event.price.toLocaleString()}</p>
          </div>
        </div>
      </div>
      
      {message && (
        <div className={`p-6 rounded-2xl mb-8 backdrop-blur-sm ${
          message.includes('sent') 
            ? 'bg-emerald-500/20 border-2 border-emerald-500/50 text-emerald-100' 
            : 'bg-red-500/20 border-2 border-red-500/50 text-red-100'
        }`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="glass-effect rounded-2xl p-5">
          <label className="flex items-center text-gray-300 mb-3 font-semibold">
            <User className="w-5 h-5 mr-3 text-orange-400" />
            Full Name
          </label>
          <input
            type="text"
            required
            className="w-full bg-transparent border border-gray-700 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all"
            placeholder="John Doe"
            value={formData.customerName}
            onChange={(e) => setFormData({...formData, customerName: e.target.value})}
          />
        </div>

        <div className="glass-effect rounded-2xl p-5">
          <label className="flex items-center text-gray-300 mb-3 font-semibold">
            <Phone className="w-5 h-5 mr-3 text-orange-400" />
            M-Pesa Number
          </label>
          <input
            type="tel"
            pattern="254[17][0-9]{8}"
            placeholder="2547XXXXXXXX"
            required
            className="w-full bg-transparent border border-gray-700 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        <div className="glass-effect rounded-2xl p-5">
          <label className="block text-gray-300 mb-3 font-semibold">
            Tickets ({event.price.toLocaleString()} each)
          </label>
          <select
            required
            className="w-full bg-transparent border border-gray-700 rounded-xl px-5 py-3 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none"
            value={formData.tickets}
            onChange={(e) => setFormData({...formData, tickets: e.target.value})}
          >
            {[1,2,3,4,5].map((num) => (
              <option key={num} value={num} className="bg-gray-800 text-white">
                {num} ticket{num > 1 ? 's' : ''} = KSh {(event.price * num).toLocaleString()}
              </option>
            ))}
          </select>
        </div>

        <div className="pt-4">
          <div className="text-right mb-6">
            <div className="text-3xl font-black gradient-text">
              Total: KSh {totalAmount.toLocaleString()}
            </div>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary text-xl flex items-center justify-center space-x-4 shadow-2xl"
          >
            {loading ? (
              <>
                <Loader2 className="w-8 h-8 animate-spin" />
                <span>Processing Payment...</span>
              </>
            ) : (
              <>
                <Phone className="w-8 h-8" />
                <span>Pay with M-Pesa</span>
                <CheckCircle className="w-8 h-8" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
