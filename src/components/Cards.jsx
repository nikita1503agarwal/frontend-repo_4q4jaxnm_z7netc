import { CheckCircle2, Flame, Clock, Star } from 'lucide-react'

export function StatCard({ title, value, hint, icon: Icon = Star }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-600 text-sm">{title}</p>
          <p className="text-2xl font-semibold text-slate-900 mt-1">{value}</p>
        </div>
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#2ECFCF]/20 to-[#A78BFA]/20 grid place-items-center text-[#1B2A41]">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {hint && <p className="text-xs text-slate-500 mt-3">{hint}</p>}
    </div>
  )
}

export function TopicCard({ title, label }) {
  const styles = {
    new_topic: 'bg-[#2ECFCF]/10 text-[#0E6B6B] border-[#2ECFCF]/30',
    review_topic: 'bg-[#A78BFA]/10 text-[#5B3FA8] border-[#A78BFA]/30',
    rest_day: 'bg-slate-100 text-slate-600 border-slate-200',
  }
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-slate-900">{title}</h4>
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${styles[label]}`}>
          {label.replace('_', ' ')}
        </span>
      </div>
    </div>
  )
}

export function PreferenceCard({ title, tone, icon: Icon }) {
  const tones = {
    playful: 'from-[#2ECFCF]/20 to-[#A78BFA]/20 text-[#1B2A41]',
    motivating: 'from-[#1B2A41]/10 to-[#2ECFCF]/10 text-[#1B2A41]',
    soft: 'from-white to-slate-50 text-slate-800',
    genz: 'from-[#A78BFA]/20 to-[#2ECFCF]/20 text-[#1B2A41]'
  }
  return (
    <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm hover:shadow-md transition">
      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br grid place-items-center ${tones[tone]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-3 font-medium text-slate-900">{title}</p>
      <p className="text-sm text-slate-600">{tone.replace('_', ' ')} tone</p>
    </div>
  )
}
