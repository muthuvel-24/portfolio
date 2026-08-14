interface TechTagProps {
  label: string
  variant?: 'emerald' | 'cyan' | 'default'
}

export default function TechTag({ label, variant = 'default' }: TechTagProps) {
  const variants = {
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    default: 'bg-white/5 text-slate-300 border-white/10',
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${variants[variant]} transition-colors duration-200`}
    >
      {label}
    </span>
  )
}
