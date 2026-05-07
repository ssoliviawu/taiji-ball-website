'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'

// 3D组件使用动态导入避免SSR问题
const TaiChiBall = dynamic(() => import('@/components/TaichiBall'), {
  ssr: false,
  loading: () => (
    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent/50 to-accent/10 border-2 border-accent/30 flex items-center justify-center animate-float">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/80 to-white/20" />
    </div>
  ),
})

// 首页 Hero Section
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 背景视频占位 - 后续可替换为实际视频 */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary opacity-90" />

        {/* 水墨流线装饰 */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20" viewBox="0 0 1200 800">
            <path
              d="M0,400 Q300,200 600,400 T1200,400"
              stroke="#D4A84B"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0,500 Q400,300 800,500 T1200,500"
              stroke="#D4A84B"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        {/* 主内容 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-0"
          >
            {/* 3D太极球 */}
            <TaiChiBall />
          </motion.div>

          <h1 className="font-display text-5xl md:text-5xl text-white mb-6 text-shadow-soft">
            以球演道
          </h1>
          <p className="font-serif text-5xl md:text-5xl text-accent mb-6">
            动静圆融
          </p>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
              传承太极文化精髓，在旋转中感悟生命的韵律与和谐
            </p>

          <Link href="/about" className="btn-accent">
            了解更多
          </Link>
        </motion.div>

        {/* 底部流线 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 100" className="w-full">
            <path
              d="M0,100 Q600,20 1200,100"
              fill="#FAF7F2"
            />
          </svg>
        </div>
      </section>

      {/* 协会简介卡片 */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
              太极球 · 传统与现代的融合
            </h2>
            <div className="ink-flow-line w-32 mx-auto mb-6" />
            <p className="text-muted max-w-2xl mx-auto">
              太极球运动融合传统太极拳的精髓，通过球体的旋转与控制，
              锻炼身体的协调性、平衡感和内在力量
            </p>
          </motion.div>

          {/* 特点展示 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '强身健体',
                desc: '增强心肺功能，改善血液循环，提升身体协调性',
                icon: 'Health',
              },
              {
                title: '修身养性',
                desc: '调节呼吸节奏，放松身心，达到内心宁静',
                icon: 'Mental',
              },
              {
                title: '传承文化',
                desc: '弘扬太极文化，体验东方智慧的生命哲学',
                icon: 'Culture',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="card-new-chinese p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <span className="font-display text-2xl text-accent">{item.icon}</span>
                </div>
                <h3 className="font-serif text-xl text-primary mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 视频预览区 */}
      <section className="py-20 px-4 bg-bg-paper">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl text-primary mb-2">精选视频</h2>
            <div className="ink-flow-line w-24 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: '太极球入门教学', category: '入门教学' },
              { title: '名家表演精选', category: '名家表演' },
            ].map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card-new-chinese aspect-video relative group cursor-pointer overflow-hidden"
              >
                {/* 视频封面占位 */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-accent/50 transition-colors">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <span className="text-accent text-xs">{video.category}</span>
                  <h3 className="text-white font-medium">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/videos" className="btn-accent">
              查看更多视频
            </Link>
          </div>
        </div>
      </section>

      {/* 快速导航 */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: '协会介绍', path: '/about', icon: 'About us' },
              { name: '视频中心', path: '/videos', icon: 'Videos' },
              { name: '新闻活动', path: '/events', icon: 'Events' },
              { name: '加入我们', path: '/join', icon: 'Join us' },
            ].map((item, idx) => (
              <Link key={idx} href={item.path}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="card-new-chinese p-6 text-center hover:bg-accent/5"
                >
                  <span className="font-display text-3xl text-accent block mb-2">{item.icon}</span>
                  <span className="text-primary font-medium">{item.name}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}