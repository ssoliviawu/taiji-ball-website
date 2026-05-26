'use client'

import { motion } from 'framer-motion'

// 数据将由后台管理
const announcements: never[] = []

// 近期活动展示（带图片）
const featuredEvents = [
  {
    id: 1,
    title: '2025武学百家年度盛典',
    description: '国际武术太极球联合会刘海全、张洁纯于2026年1月16日-18日在保定出席”2025武学百家年度盛典”。期间，两人凭借在28式太极球创编、推广及武术传承中的突出贡献共同上榜”2025武学百家年度影响力人物。”',
    image: '/images/202601261.webp',
    date: '2026-01-18',
    url: 'https://www.sohu.com/a/977736760_118779',
  },
]

export default function EventsPage() {
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
              新闻活动
            </h1>
            <div className="ink-flow-line w-32 mx-auto mb-4" />
            <p className="text-white/80 max-w-xl mx-auto">
              了解最新动态，参与精彩活动
            </p>
          </motion.div>
        </div>
      </section>

      {/* 通知公告 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl text-primary mb-2">通知公告</h2>
            <div className="ink-flow-line w-24 mx-auto" />
          </motion.div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {announcements.length > 0 ? (
              announcements.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="card-new-chinese p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-display text-sm">{item.type}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-primary">{item.title}</h3>
                        <span className="text-xs text-muted">{item.date}</span>
                      </div>
                      <p className="text-muted text-sm">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="card-new-chinese p-8 text-center">
                <p className="text-muted">暂无通知公告</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 近期活动展示 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl text-primary mb-2">近期活动</h2>
            <div className="ink-flow-line w-24 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredEvents.map((item, idx) => (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card-new-chinese p-6 block hover:shadow-lg transition-shadow cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-video object-cover rounded-lg mb-4"
                />
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-muted">{item.date}</span>
                  <span className="text-xs text-accent">查看详情 ↗</span>
                </div>
                <h3 className="font-medium text-primary mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

          </div>
  )
}