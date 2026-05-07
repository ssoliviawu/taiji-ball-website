'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// 视频分类
const categories = [
  { id: 'basic', name: '入门教学' },
  { id: 'master', name: '名家表演' },
  { id: 'events', name: '活动回顾' },
]

// 示例视频数据
const videos = [
  {
    id: 1,
    title: '太极球入门基础动作',
    category: 'basic',
    duration: '15:30',
    desc: '适合初学者的基础动作讲解',
  },
  {
    id: 2,
    title: '太极球基本功练习',
    category: 'basic',
    duration: '12:20',
    desc: '掌握太极球的基本握法和姿势',
  },
  {
    id: 3,
    title: '李老师太极球表演',
    category: 'master',
    duration: '08:45',
    desc: '协会会长精彩表演',
  },
  {
    id: 4,
    title: '全国太极球大赛金奖表演',
    category: 'master',
    duration: '10:00',
    desc: '获奖作品精彩展示',
  },
  {
    id: 5,
    title: '2024年协会年会精彩片段',
    category: 'events',
    duration: '20:00',
    desc: '年度盛会精彩回顾',
  },
  {
    id: 6,
    title: '社区太极球推广活动',
    category: 'events',
    duration: '18:30',
    desc: '公益推广活动记录',
  },
]

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState('basic')
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null)

  const filteredVideos = videos.filter(v => v.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
              视频中心
            </h1>
            <div className="ink-flow-line w-32 mx-auto mb-4" />
            <p className="text-white/80 max-w-xl mx-auto">
              从入门到精通，探索太极球的魅力
            </p>
          </motion.div>
        </div>
      </section>

      {/* 分类筛选 */}
      <section className="py-10 px-4 sticky top-16 bg-white/95 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-accent text-white'
                    : 'bg-bg-paper text-muted hover:text-primary'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 视频列表 */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedVideo(video)}
                className="card-new-chinese cursor-pointer group overflow-hidden"
              >
                {/* 视频封面 */}
                <div className="aspect-video bg-gradient-to-br from-secondary to-primary relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-accent/50 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* 时长标签 */}
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-medium text-primary mb-1">{video.title}</h3>
                  <p className="text-muted text-sm">{video.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox 视频播放弹窗 */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* 视频播放区域占位 */}
              <div className="aspect-video bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="font-serif text-xl mb-2">{selectedVideo.title}</p>
                  <p className="text-sm text-white/60">视频播放区域（实际项目中嵌入视频链接）</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-lg text-primary mb-2">{selectedVideo.title}</h3>
                <p className="text-muted text-sm mb-4">{selectedVideo.desc}</p>

                {/* 关闭按钮 */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="btn-accent w-full"
                >
                  关闭
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}