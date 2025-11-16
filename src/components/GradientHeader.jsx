export default function GradientHeader({ title, subtitle, children }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#EAF6FF] via-white to-[#F5F3FF] border border-slate-200">
      <div className="absolute -top-24 -left-24 h-64 w-64 bg-[#2ECFCF]/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 h-64 w-64 bg-[#1B2A41]/20 blur-3xl rounded-full" />

      <div className="relative p-8 md:p-10">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-slate-600">{subtitle}</p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  )
}
