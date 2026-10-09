'use client'

import { motion } from 'framer-motion'

// 数据将由后台管理
type Announcement = {
  id: string | number
  type: string
  title: string
  date: string
  content: string
}
const announcements: Announcement[] = []

// 近期活动展示（带图片）
const featuredEvents = [
  {
    id: 2,
    title: '张洁纯亮相第五届海峡两岸非遗武术展演',
    description: '2026年7月31日，第五届海峡两岸非物质文化遗产展演大会在山东潍坊安丘举行。国际武术太极球联合会张洁纯作为湖南省唯一参赛代表，以国家级非遗青城武术代表队领队兼队员身份出征，表演《青城十三式太极球》，斩获个人一等奖并带领代表队荣获团体一等奖。',
    image: '/images/海峡两岸非遗武术展演.jpeg',
    date: '2026-07-31',
    url: 'https://m.voc.com.cn/xhn/news/202607/33349495.html',
  },
  {
    id: 3,
    title: '“湘超”艺术团《球蕴乾坤，太极风华》斩获IFA国际模特大赛金奖',
    description: '2026年7月26日，第七季IFA国际模特大赛总决赛“高光姐姐赛事”在长沙芒果演播厅举行。湖南省旗袍文化促进会“湘超”艺术团演绎由国际武术太极球联合会张洁纯创编的国风跨界节目《球蕴乾坤，太极风华》，将28式太极球武学气韵与旗袍东方美学相融，斩获风华绝代·卓越团队金奖。',
    image: '/images/球蕴乾坤太极风华.jpg',
    date: '2026-07-27',
    url: 'https://m.voc.com.cn/xhn/news/202607/33294485.html',
  },
  {
    id: 1,
    title: '2025武学百家年度盛典',
    description: '国际武术太极球联合会刘海全、张洁纯于2026年1月16日-18日在保定出席”2025武学百家年度盛典”。期间，两人凭借在28式太极球创编、推广及武术传承中的突出贡献共同上榜”2025武学百家年度影响力人物。”',
    image: '/images/202601261.webp',
    date: '2026-01-18',
    url: 'https://www.sohu.com/a/977736760_118779',
  },
  {
    id: 4,
    title: '福泉太极球培训，展示太极风采',
    description: '2025年11月，受福泉市特邀，国际武术太极球联合会刘海全及张洁纯为150多名太极爱好者开展了为期四天的太极球培训。此次培训也是为即将举办的贵州省太极拳公开赛做准备。太极球已被确定为2025年贵州省太极拳公开赛开幕式展演节目之一。',
    image: '/images/福泉.png',
    date: '2025-11-24',
    url: 'https://mp.weixin.qq.com/s/3XGKRV6nZwgpfaB2NHNfHw',
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