'use client'

import { motion } from 'framer-motion'

// 数据将由后台管理
type Announcement = {
  id: string | number
  type: string
  title: string
  tag?: string
  date: string
  content: string
  details?: { label: string; value: string }[]
  image?: string
  url?: string
}
const announcements: Announcement[] = [
  {
    id: 1,
    type: '通知',
    title: '中国政法大学｜国际体育裁判规则（太极球）高级研修班',
    tag: '招募中',
    date: '2026-11-28',
    content:
      '以武载道，以文润心，共建太极球标准化、国际化体系。',
    details: [
      { label: '时间', value: '2026年11月28日—29日' },
      { label: '地点', value: '北京·昌平校区' },
      { label: '课程', value: '28式太极球技法、国际裁判用语、竞赛规则、裁判法与教学理论' },
      { label: '师资', value: '北体大、北京武协、中医药大学、国际武术太极球联合会资深导师' },
      { label: '对象', value: '教练、体育教师、社体指导员、武术爱好者、高校学子' },
      { label: '咨询', value: '冯老师 15383533388｜刘老师 18410409515' },
    ],
    image: '/images/20261128政法研修班.jpg',
    url: 'https://mp.weixin.qq.com/s/5H8lrHFNPNohivmAss7s9w',
  },
]

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
                    <div className="flex-1 flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-medium text-primary">
                            {item.title}
                            {item.tag && (
                              <span className="ml-2 align-middle text-xs font-normal text-white bg-accent rounded-full px-2 py-0.5 whitespace-nowrap">
                                {item.tag}
                              </span>
                            )}
                          </h3>
                        </div>
                        <p className="text-muted text-sm">{item.content}</p>
                        {item.details && item.details.length > 0 && (
                          <dl className="mt-3 space-y-1">
                            {item.details.map((d) => (
                              <div key={d.label} className="flex gap-2 text-sm">
                                <dt className="text-accent shrink-0">{d.label}</dt>
                                <dd className="text-muted">{d.value}</dd>
                              </div>
                            ))}
                          </dl>
                        )}
                        {item.url && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-xs text-accent hover:underline"
                          >
                            查看详情 ↗
                          </a>
                        )}
                      </div>
                      {item.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full md:w-56 lg:w-64 shrink-0 md:aspect-[3/4] object-contain bg-white rounded-lg"
                        />
                      )}
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