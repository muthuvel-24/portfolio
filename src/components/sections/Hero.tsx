import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Download, ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../ui/Icons'
import { personalInfo } from '../../data/portfolio'

const socialLinks = [
  { icon: GithubIcon, label: 'GitHub', href: personalInfo.links.github, color: 'hover:text-white' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: personalInfo.links.linkedin, color: 'hover:text-blue-400' },
  { icon: LeetCodeIcon, label: 'LeetCode', href: personalInfo.links.leetcode, color: 'hover:text-yellow-400' },
  { icon: Mail, label: 'Email', href: personalInfo.links.email, color: 'hover:text-emerald-400' },
  { icon: Phone, label: 'Phone', href: personalInfo.links.phone, color: 'hover:text-cyan-400' },
]

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden section-padding text-center"
    >
      {/* Background Orbs */}
      <div
        className="orb w-[480px] h-[480px] opacity-20 -top-24 left-1/2 -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }}
      />
      <div
        className="orb w-[380px] h-[380px] opacity-15 top-1/3 -right-20"
        style={{ background: 'radial-gradient(circle, #06B6D4, transparent 70%)' }}
      />
      <div
        className="orb w-[320px] h-[320px] opacity-10 bottom-10 -left-20"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent 70%)' }}
      />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.2 },
            },
          }}
          className="flex flex-col items-center justify-center text-center w-full"
        >
          {/* Location Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 glass mb-6 border border-white/10">
              <MapPin size={12} className="text-emerald-400" />
              {personalInfo.location}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3 leading-[1.1] text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {personalInfo.name.split(' ')[0]}{' '}
            <span className="gradient-text">{personalInfo.name.split(' ')[1]}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            className="text-base sm:text-xl font-medium text-slate-300 mb-5 max-w-2xl tracking-wide text-center"
          >
            {personalInfo.title}
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              show: { opacity: 1, scaleX: 1, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mb-6 rounded-full"
          />

          {/* Bio */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-9 text-center"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            className="flex flex-wrap items-center justify-center gap-3.5 mb-10"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-200 cursor-pointer border-none outline-none"
            >
              <ArrowDown size={16} />
              View Featured Projects
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-300 glass rounded-full hover:text-white hover:border-white/20 transition-all duration-200 border border-white/10"
            >
              <Download size={16} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            className="flex items-center justify-center gap-2.5 flex-wrap"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 text-slate-400 ${link.color} glass rounded-xl transition-all duration-200 border border-white/5 hover:border-white/15 flex items-center justify-center`}
                aria-label={link.label}
                title={link.label}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-gradient-to-b from-emerald-400 to-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
