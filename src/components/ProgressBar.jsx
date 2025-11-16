export default function ProgressBar({ value = 0 }) {
  return (
    <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-[#2ECFCF] to-[#1B2A41] transition-all"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}
