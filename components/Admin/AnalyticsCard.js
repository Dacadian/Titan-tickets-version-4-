import { TrendingUp, TrendingDown } from 'lucide-react'

export default function AnalyticsCard({ title, value, icon, trend, color }) {
  const isPositive = trend.includes('+')
  
  return (
    <div className="glass-effect rounded-3xl p-8 h-40 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 group cursor-pointer">
      <div className="flex items-center justify-between mb-6">
        <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl group-hover:scale-110 transition-transform">
          <span className="text-2xl">{icon}</span>
        </div>
        <div className={`text-sm font-bold px-3 py-1 rounded-full ${
          isPositive 
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
            : 'bg-red-500/20 text-red-400 border border-red-500/30'
        }`}>
          {trend}
        </div>
      </div>
      
      <div>
        <p className="text-gray-500 text-sm font-medium mb-2">{title}</p>
        <p className="text-3xl lg:text-4xl font-black gradient-text">{value}</p>
      </div>
    </div>
  )
}
