'use client'

import { motion } from 'framer-motion'

// 协会介绍页面
export default function AboutPage() {
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
              协会介绍
            </h1>
            <div className="ink-flow-line w-32 mx-auto mb-4" />
            <p className="text-white/80 max-w-xl mx-auto">
              国际武术太极球联合会（IWTBF）
总部设于中国香港，已完成联合国官方备案。是专注于太极球文化传承与国际化发展的非政府、非商业、非营利国际专业机构。
本会以弘扬中华传统武学、推动太极球运动全球普及与规范发展为使命，独立运营、自主管理，拥有完善的行业标准、赛事体系与教练员、裁判员权威认证体系。
作为全球太极球领域唯一联合国备案的权威引领机构，联合会致力于构建国际化、专业化、规范化的行业发展平台，促进全球武术文化交流互鉴，守护与提升中华武学的国际地位与影响力。
            </p>
          </motion.div>
        </div>
      </section>

  {/* 历史与理念 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-serif text-3xl text-primary text-center mb-8">
              历史与理念
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="card-new-chinese p-8">
                <h3 className="font-serif text-xl text-accent mb-4">二十八式太极球套路</h3>
                <p className="text-muted leading-relaxed">
                  太极球套路是依据易经、武术、天文星象、阴阳五行之理，结合中医经络学说，及丹道导引功法，与内家武学太极拳完美融合，凝聚民族传统智慧，挖掘整理创编而成；其内容蕴含阴阳哲理、符合人体结构，演绎宇宙运行规律，属于太极体系的升级套路。套路特点是拳功一体、练养结合，动作如行云流水、连绵不断，演练中犹如漫步于宇宙星空，道法自然、天人合一，充分展现了太极大道生生不息，无穷运转之玄妙。
                </p>
              </div>
              <div className="card-new-chinese p-8">
                <h3 className="font-serif text-xl text-accent mb-4">健康益处</h3>
                <ul className="text-muted space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">·</span>
                    增强肢体协调性和平衡感
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">·</span>
                    改善心肺功能，促进血液循环
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">·</span>
                    缓解压力，调节情绪，修身养性
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">·</span>
                    锻炼专注力，提升身体觉知能力
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 协会理念 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-bg-paper rounded-xl p-8 md:p-12"
          >
            <h3 className="font-serif text-xl text-primary mb-6 text-center">协会核心理念</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: '传承', desc: '弘扬传统太极文化，传承武术精髓' },
                { title: '健康', desc: '倡导科学健身，追求身心健康' },
                { title: '融合', desc: '传统与现代结合，理论与实践统一' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <span className="font-display text-4xl text-accent block mb-2">{item.title}</span>
                  <p className="text-muted text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> 

      {/* 师资名家 */}
      <section className="py-20 px-4 bg-bg-paper">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl text-primary mb-2">师资名家</h2>
            <div className="ink-flow-line w-24 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: '刘海全',
                title: '协会会长、创始人',
                desc: '祖籍山东省菏泽市曹县，毕业于首都体育学院，中国武术六段，中国国家一级武术裁判。师承“中华武林百杰”绵掌翻子拳宗师乔秀川；中国武术泰斗，国家体育总局武术研究院荣誉专家张山先生。',
              },
              {
                name: '张洁纯',
                title: '协会副会长',
                desc: '青城太极传人，中国武术六段，国家级社会体育指导员，健身气功国家一级裁判员。师承中国武术泰斗张山先生。荣获全运会健身气功项目铜牌、全省健身气功赛事多项冠军，获评全球首届太极拳网络之星、2025武学百家年度影响力人物。'
              }
            ].map((teacher, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card-new-chinese"
              >
                {/* 头像 */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`/images/${teacher.name}.jpg`}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-lg text-primary">{teacher.name}</h3>
                  <p className="text-accent text-sm mb-2">{teacher.title}</p>
                  <p className="text-muted text-xs">{teacher.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 誉墙 - 暂时隐藏 */}
      {/* <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl text-primary mb-2">荣誉展示</h2>
            <div className="ink-flow-line w-24 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: '全国太极球比赛金奖', year: '2023' },
              { title: '省级武术表演大赛一等奖', year: '2022' },
              { title: '优秀体育协会表彰', year: '2021' },
              { title: '太极文化传承贡献奖', year: '2020' },
            ].map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card-new-chinese p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-display">奖</span>
                </div>
                <div>
                  <h3 className="font-medium text-primary">{award.title}</h3>
                  <p className="text-muted text-sm">{award.year}年</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  )
}