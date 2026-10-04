'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

// 功法介绍页面
export default function PracticePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const techniques = [
    {
      title: '28式太极球',
      subtitle: '标准竞赛套路 · 刘海全 主编',
      sections: [
        {
          heading: '创编定位',
          body: '国内首套官方标准化太极球竞赛专用套路，兼顾竞技展演、内功修炼、大众健身三大场景，彻底解决传统太极球无标准、无体系、无赛事依据的行业痛点，可用于段位考核、正式武术赛事、专业教练员培训、大众长期习练。',
        },
        {
          heading: '创编核心依据',
          body: '以传统太极阴阳虚实、圆转运化、丹田行气核心拳理为根基，融合太极拳缠丝劲、螺旋劲、推手八法，结合人体运动解剖学、中医经络养生理论，参考当代武术竞赛编排规范，由张山先生审定、专家团多轮论证打磨定稿，全套共4段28个定式，左右动作对称排布，演练时长3–4分钟，节奏规整、刚柔相济、章法严谨。',
        },
        {
          heading: '功法核心价值',
          items: [
            { label: '竞技层面', text: '动作规范统一、评分维度清晰，可纳入各级武术赛事、武术段位考评，具备完整竞技属性；' },
            { label: '养生层面', text: '球体引导周身圆旋运动，牵拉全身经络，强化肠胃蠕动、调和脏腑气血，改善腹部痰湿堆积、气血瘀滞、久坐劳损、体虚乏力等问题；' },
            { label: '内功层面', text: '以球领气、以身运球，实现“手中有球、心中无球，球身合一、天人相应”，夯实太极内功根基，是太极拳高阶修炼的必备辅修功法。' },
          ],
        },
        {
          heading: '适用人群',
          body: '武术专业运动员、太极拳资深习练者、教练员、赛事从业者、中老年长期康养人群、亚健康体质调理人群。',
        },
      ],
    },
    {
      title: '新编精炼9式太极球',
      subtitle: '刘海全 原创主编',
      sections: [
        {
          heading: '创编定位',
          body: '全民极简入门核心功法，专为零基础学员、时间碎片化人群、中老年康养群体打造，剔除繁杂招式，浓缩28式太极球全部核心拳理与行气逻辑，9个动作循环往复、简单易记、上手零门槛，是大众普及、公益推广、短期集训的首选功法。',
        },
        {
          heading: '功法核心价值',
          items: [
            { label: '低门槛易普及', text: '招式精简、节奏舒缓，不分年龄、体能基础均可快速学会，适合社区、康养机构、企事业单位集体推广；' },
            { label: '强肠胃、消脂瘦腹', text: '全程侧重腰腹运化、丹田开合，直接刺激中脘、天枢、气海、关元等关键养生穴位，强化肠道蠕动、排出宿便湿气，针对性改善大肚腩、腹胀、消化不良；' },
            { label: '筑基固本', text: '完整保留太极圆转、虚实转换核心精髓，打好身法、行气基础，为后续修习28式太极球搭建平稳进阶通道；' },
            { label: '日常便携修炼', text: '单次练习10–15分钟即可完成全套循环，可晨起、睡前居家练习，适配当代人快节奏生活。' },
          ],
        },
        {
          heading: '适用人群',
          body: '零基础武术爱好者、上班族、产后体态调理人群、中老年养生群体、公益培训学员。',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
              功法介绍
            </h1>
            <div className="ink-flow-line w-32 mx-auto mb-4" />
            <p className="text-white/80 max-w-xl mx-auto">
              联合会以《28式太极球竞赛套路》和新编《精炼9式太极球》两大核心功法为载体，构建入门筑基与专业深耕相递进的完整功法体系。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 28式太极球 & 9式太极球 - 折叠列表 */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          {techniques.map((tech, idx) => {
            const isOpen = openIndex === idx
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-new-chinese overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left p-6 md:p-8"
                >
                  <span>
                    <span className="font-serif text-xl md:text-2xl text-primary block">
                      （{idx === 0 ? '一' : '二'}）{tech.title}
                    </span>
                    <span className="text-accent text-sm">{tech.subtitle}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-accent text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    ⌄
                  </span>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="px-6 md:px-8 pb-8 space-y-6"
                  >
                    {tech.sections.map((sec, sIdx) => (
                      <div key={sIdx}>
                        <h3 className="font-serif text-lg text-accent mb-3">{sec.heading}</h3>
                        {'items' in sec && sec.items ? (
                          <ul className="text-muted space-y-3 leading-relaxed">
                            {sec.items.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start">
                                <span className="text-accent font-display mr-2">{item.label}：</span>
                                <span>{item.text}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-muted leading-relaxed">{sec.body}</p>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* 互补关系 */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-bg-paper rounded-xl p-8 md:p-12 text-center"
          >
            <h2 className="font-serif text-3xl text-primary mb-6">两大功法体系互补关系</h2>
            <div className="ink-flow-line w-24 mx-auto mb-6" />
            <p className="text-muted leading-relaxed text-lg">
              9式太极球做入门筑基，28式太极球做专业深耕，二者一脉同源、层层递进，构成&ldquo;普及—提升—竞技—传承&rdquo;完整闭环，覆盖全年龄段、全需求习武人群。
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
