import { motion } from 'framer-motion'
import { ExternalLink, Zap } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { projects } from '../../data/portfolio'
import BentoCard from '../ui/BentoCard'
import TechTag from '../ui/TechTag'
import SectionHeader from '../ui/SectionHeader'

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const isFeatured = project.featured

  return (
    <BentoCard
      featured={isFeatured}
      delay={index * 0.08}
      className={isFeatured ? 'col-span-1 md:col-span-2' : 'col-span-1'}
    >
      {/* Top gradient strip for featured */}
      {isFeatured && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500" />
      )}

      <div className="p-6 sm:p-8 h-full flex flex-col justify-between">
        <div>
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2.5 flex-wrap">
                {isFeatured && (
                  <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 border border-emerald-500/30">
                    <Zap size={10} className="fill-current" />
                    Flagship
                  </span>
                )}
                {project.status && (
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {project.status}
                  </span>
                )}
              </div>
              <h3
                className={`font-bold text-white leading-tight ${isFeatured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'}`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {project.title}
              </h3>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 p-2.5 text-slate-400 hover:text-white glass rounded-xl border border-white/5 hover:border-white/15 transition-all duration-200 hover:scale-105 flex items-center justify-center"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon size={18} />
            </a>
          </div>

          {/* Description */}
          <p
            className={`text-slate-400 leading-relaxed mb-6 ${isFeatured ? 'text-sm sm:text-base' : 'text-sm'}`}
          >
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.techStack.map((tech, i) => (
              <TechTag
                key={tech}
                label={tech}
                variant={i % 3 === 0 ? 'emerald' : i % 3 === 1 ? 'cyan' : 'default'}
              />
            ))}
          </div>

          {/* View Project link for featured */}
          {isFeatured && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              View on GitHub
              <ExternalLink size={14} />
            </motion.a>
          )}
        </div>
      </div>
    </BentoCard>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Featured Work"
          title="Projects"
          subtitle="A curated collection of systems I've engineered — from AI multi-agent platforms to full-stack applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
