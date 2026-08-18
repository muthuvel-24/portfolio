import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Copy, Check, MessageSquare } from 'lucide-react'
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../ui/Icons'
import { personalInfo } from '../../data/portfolio'
import SectionHeader from '../ui/SectionHeader'

const socialLinks = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: personalInfo.links.github,
    username: '@muthuvel-24',
    color: 'hover:border-white/30 hover:text-white',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: personalInfo.links.linkedin,
    username: 'in/muthuvel2004',
    color: 'hover:border-blue-500/30 hover:text-blue-400',
  },
  {
    icon: LeetCodeIcon,
    label: 'LeetCode',
    href: personalInfo.links.leetcode,
    username: 'Muthuvel_S',
    color: 'hover:border-yellow-500/30 hover:text-yellow-400',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      /* fallback */
    }
  }

  return (
    <section id="contact" className="section-padding flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="I'm open to full-time roles, software engineering internships, and impactful projects. Feel free to reach out!"
        />

        {/* Main contact card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="glass rounded-3xl overflow-hidden border border-white/[0.07] w-full"
        >
          {/* Top gradient strip */}
          <div className="h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500" />

          <div className="p-6 sm:p-10">
            {/* Email section */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-8 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center border border-emerald-500/20 flex-shrink-0">
                  <Mail size={20} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Primary Email</p>
                  <p className="text-sm sm:text-base font-semibold text-white break-all">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 w-full sm:w-auto">
                <motion.button
                  onClick={handleCopy}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer border-none outline-none flex-1 sm:flex-none ${
                    copied
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'glass border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check size={15} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      Copy Email
                    </>
                  )}
                </motion.button>

                <motion.a
                  href={personalInfo.links.email}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-200 flex-1 sm:flex-none"
                >
                  <MessageSquare size={15} />
                  Email Me
                </motion.a>
              </div>
            </div>

            {/* Social links */}
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-4 text-center sm:text-left">
              Find me on
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl glass border border-white/[0.06] text-slate-400 transition-all duration-200 ${link.color}`}
                >
                  <link.icon size={18} />
                  <div className="text-left">
                    <p className="text-xs font-semibold text-white">{link.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{link.username}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
