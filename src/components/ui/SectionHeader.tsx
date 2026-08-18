import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function SectionHeader({ eyebrow, title, subtitle, children }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center mx-auto mb-14 max-w-2xl px-2"
    >
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
        {eyebrow}
      </span>
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed text-center">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  )
}
