import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award } from 'lucide-react'
import { timeline, TimelineItem } from '../../data/portfolio'
import SectionHeader from '../ui/SectionHeader'

const typeConfig = {
  education: {
    icon: GraduationCap,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/30',
    dotColor: 'bg-emerald-400',
    label: 'Education',
  },
  experience: {
    icon: Briefcase,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/30',
    dotColor: 'bg-cyan-400',
    label: 'Experience',
  },
  certification: {
    icon: Award,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/30',
    dotColor: 'bg-amber-400',
    label: 'Certification',
  },
}

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const config = typeConfig[item.type]
  const Icon = config.icon
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className={`relative flex items-center w-full ${
        isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Card container */}
      <div className={`w-full lg:w-1/2 ${isLeft ? 'lg:pr-10' : 'lg:pl-10'}`}>
        <div className="glass card-hover rounded-2xl p-5 sm:p-6 border border-white/[0.07] hover:border-white/15 text-left">
          {/* Top row: badge & period */}
          <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
            <div
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${config.bg} ${config.color}`}
            >
              <Icon size={11} />
              {config.label}
            </div>
            <span className="text-xs text-slate-500 font-mono">{item.period}</span>
          </div>

          {/* Title */}
          <h3
            className="text-base sm:text-lg font-bold text-white mb-1 leading-snug"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {item.title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-slate-400 mb-2">{item.subtitle}</p>

          {/* Grade or detail */}
          {item.grade && (
            <span className={`inline-flex items-center gap-1 text-xs font-semibold ${config.color}`}>
              {item.grade}
            </span>
          )}
          {item.detail && (
            <p className="text-xs text-slate-400/90 leading-relaxed mt-1">{item.detail}</p>
          )}
        </div>
      </div>

      {/* Center dot (desktop only) */}
      <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-10">
        <div className={`w-3.5 h-3.5 rounded-full border-2 border-[#090D16] ${config.dotColor} ring-4 ring-white/5`} />
      </div>

      {/* Empty space for opposite side on desktop */}
      <div className="hidden lg:block w-1/2" />
    </motion.div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Background"
          title="Education & Experience"
          subtitle="My academic foundation, software engineering training, and verified credentials."
        />

        {/* Timeline wrapper */}
        <div className="relative w-full">
          {/* Vertical central line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-emerald-500/40 via-cyan-500/30 to-emerald-500/10 -translate-x-1/2" />

          <div className="flex flex-col gap-6 sm:gap-7 w-full">
            {timeline.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
