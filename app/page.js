import EventCard from '@/components/EventCard'
import { getEvents } from '@/lib/db'

export default function Home() {
  const events = getEvents()

  return (
    <div className="container mx-auto px-4 py-16 lg:py-24">
      {/* Hero Section */}
      <div className="text-center mb-20 lg:mb-32">
        <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 bg-opacity-20 px-6 py-3 rounded-full mb-8">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Powered by M-Pesa</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-8 leading-tight">
          Titan Tickets
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Unleash epic experiences. Secure your spot with lightning-fast M-Pesa payments.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#events" className="group relative px-12 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold text-lg rounded-2xl shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-2 transition-all duration-500">
            <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 blur-sm"></span>
            <span className="relative">Explore Events</span>
          </a>
        </div>
      </div>

      {/* Events Grid */}
      <section id="events">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Live Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  )
}
