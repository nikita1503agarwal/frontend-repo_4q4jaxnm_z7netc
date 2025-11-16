import { Link, useLocation } from 'react-router-dom'
import { Menu, Bot, Bell, Calendar, Home, User, ListChecks, Settings2 } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/schedule', label: 'Schedule', icon: Calendar },
  { to: '/quiz', label: 'Quiz', icon: ListChecks },
  { to: '/results', label: 'Results', icon: Settings2 },
  { to: '/notifications', label: 'Notifications', icon: Bell },
  { to: '/profile', label: 'Profile', icon: User },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <div className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#2ECFCF] to-[#1B2A41] grid place-items-center text-white shadow-md shadow-cyan-500/20">
              <Bot className="h-5 w-5" />
            </div>
            <span className="font-semibold text-slate-900 tracking-tight">Kaizen Learn</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, label, icon: Icon }) => {
              const active = location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all ${
                    active
                      ? 'bg-slate-900 text-white shadow-sm shadow-slate-900/10'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              )
            })}
          </nav>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 text-slate-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
