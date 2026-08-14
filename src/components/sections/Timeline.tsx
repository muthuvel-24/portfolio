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
    lineBg: 'from-emerald-500/50',
    label: 'Education',
  },
  experience: {
    icon: Briefcase,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/30',
    dotColor: 'bg-cyan-400',
    lineBg: 'from-cyan-500/50',
    label: 'Experience',
  },
  certification: {
    icon: Award,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/30',
    dotColor: 'bg-amber-400',
    lineBg: 'from-amber-500/50',
    label: 'Certification',
  },
}

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const config = typeConfig[item.type]
  const Icon = config.icon
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className={`relative flex items-center gap-6 lg:gap-0 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      {/* Card — takes up half the width on desktop */}
      <div className={`flex-1 ${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'}`}>
        <div className="glass card-hover rounded-2xl p-5 sm:p-6 border border-white/[0.07] hover:border-white/15">
          {/* Type badge */}
          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border mb-3 ${config.bg} ${config.color}`}
          >
            <Icon size={11} />
            {config.label}
          </div>

          {/* Period */}
          <div className="text-xs text-slate-500 mb-1.5 font-mono">{item.period}</div>

          {/* Title */}
          <h3
            className="text-base sm:text-lg font-semibold text-white mb-1 leading-snug"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {item.title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-slate-400 mb-2">{item.subtitle}</p>

          {/* Grade or detail */}
          {item.grade && (
            <span className={`inline-flex items-center gap-1 text-xs font-medium ${config.color}`}>
              {item.grade}
            </span>
          )}
          {item.detail && (
            <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
          )}
        </div>
      </div>

      {/* Center dot (desktop only) */}
      <div className="hidden lg:flex flex-col items-center absolute left-1/2 -translate-x-1/2">
        <div className={`w-4 h-4 rounded-full border-2 border-bg-primary ${config.dotColor} z-10`} />
      </div>

      {/* Right/Left spacer */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Background"
          title="Education & Experience"
          subtitle="My academic journey, hands-on experience, and professional certifications."
        />

        {/* Vertical line (desktop) */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/30 via-cyan-500/20 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-8">
            {timeline.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
