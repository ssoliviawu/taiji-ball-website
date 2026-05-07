'use client'

import { motion } from 'framer-motion'

interface FloatingElementProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function FloatingElement({ children, delay = 0, className }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}