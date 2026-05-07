'use client'

import { motion } from 'framer-motion'

interface InkFlowDividerProps {
  width?: string
  className?: string
}

export default function InkFlowDivider({ width = 'w-32', className }: InkFlowDividerProps) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`ink-flow-line ${width} mx-auto ${className}`}
    />
  )
}