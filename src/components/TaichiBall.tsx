'use client'

import { useState, useEffect } from 'react'

// 去背景的太极球图片列表 - 模拟360度旋转
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

  // 快速轮播模拟360度旋转效果（每250ms切换，过渡时间150ms）
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % taichiImages.length)
    }, 250)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* 太极球360度旋转展示 - 圆形容器 */}
      <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden animate-float">
        {taichiImages.map((src, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={`太极球实物 ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-contain p-4 transition-opacity ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDuration: '150ms',
              transitionTimingFunction: 'ease-in-out'
            }}
          />
        ))}
      </div>
    </div>
  )
}