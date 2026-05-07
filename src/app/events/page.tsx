'use client'

import { motion } from 'framer-motion'

// 示例新闻和活动数据
const announcements = [
  {
    id: 1,
    title: '2024年太极球培训班即将开班',
    date: '2024-03-15',
    type: '通知',
    content: '新一期太极球培训班将于3月20日正式开班，欢迎报名参加。',
  },
  {
    id: 2,
    title: '协会春季交流活动安排',
    date: '2024-03-10',
    type: '公告',
    content: '4月5日将举办春季交流活动，届时将有名家表演和教学分享。',
  },
]

const activities = [
  {
    id: 1,
    title: '社区太极球公益推广',
    date: '2024-02-28',
    content: '协会成员走进社区，开展太极球公益推广活动。',
    author: '会员小明',
  },
  {
    id: 2,
    title: '我的太极球学习心得',
    date: '2024-02-20',
    content: '分享练习太极球三个月的体会和收获。',
    author: '会员小红',
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
            {announcements.map((item, idx) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* 成员风采 */}
      <section className="py-20 px-4 bg-bg-paper">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl text-primary mb-2">成员风采</h2>
            <div className="ink-flow-line w-24 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card-new-chinese p-6"
              >
                {/* 图片占位 */}
                <div className="aspect-video bg-gradient-to-br from-secondary/30 to-primary/30 rounded-lg mb-4 flex items-center justify-center">
                  <span className="font-display text-3xl text-accent/50">风采</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-muted">{item.date}</span>
                  <span className="text-xs text-accent">· {item.author}</span>
                </div>
                <h3 className="font-medium text-primary mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 活动日历 */}
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

          <div className="card-new-chinese p-8 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-muted mb-4">暂无近期活动安排，敬请关注后续通知</p>
              <div className="bg-bg-paper rounded-lg p-6">
                <p className="text-sm text-muted">
                  如需了解详细活动安排，请联系协会秘书处
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}