'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// 去背景的太极球图片列表
const taichiImages = [
  '/images/processed/太极球1_nobg.png',
  '/images/processed/太极球2_nobg.png',
  '/images/processed/太极球3_nobg.png',
  '/images/processed/太极球4_nobg.png',
  '/images/processed/太极球5_nobg.png',
]

interface TaiChiBallProps {
  className?: string
}

export default function TaiChiBall({ className }: TaiChiBallProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % taichiImages.length)
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center">
      {/* 图片切换指示器 - 放在上方 */}
      <div className="flex justify-center gap-3 mb-4">
        {taichiImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-accent scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`切换到图片 ${index + 1}`}
          />
        ))}
      </div>

      {/* 太极球实物照片轮播 - 圆形展示 */}
      <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden animate-float">
        {taichiImages.map((src, index) => (
          <motion.img
            key={src}
            src={src}
            alt={`太极球实物 ${index + 1}`}
            className="absolute inset-0 w-full h-full object-contain p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 0.8
            }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </div>
  )
}