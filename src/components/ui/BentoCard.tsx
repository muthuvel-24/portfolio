import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BentoCardProps {
  children: ReactNode
  className?: string
  featured?: boolean
  delay?: number
}

export default function BentoCard({ children, className = '', featured = false, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={`glass card-hover rounded-2xl overflow-hidden relative ${featured ? 'glow-emerald' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}
