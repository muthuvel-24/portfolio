import { motion } from 'framer-motion'
import { skillCategories } from '../../data/portfolio'
import BentoCard from '../ui/BentoCard'
import SectionHeader from '../ui/SectionHeader'

const accentColors = [
  { dot: 'bg-emerald-400', tag: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  { dot: 'bg-cyan-400', tag: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
  { dot: 'bg-violet-400', tag: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
  { dot: 'bg-amber-400', tag: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
  { dot: 'bg-rose-400', tag: 'text-rose-400 bg-rose-500/10 border-rose-500/20' },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Technical Arsenal"
          title="Skills & Technologies"
          subtitle="A breadth-first toolkit spanning frontend, backend, databases, and core computer science fundamentals."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillCategories.map((category, catIndex) => {
            const colors = accentColors[catIndex % accentColors.length]
            return (
              <BentoCard key={category.category} delay={catIndex * 0.08}>
                <div className="p-6 sm:p-7">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl">{category.icon}</span>
                    <h3
                      className="text-base font-semibold text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.05 + i * 0.04, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-default ${colors.tag}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </BentoCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
