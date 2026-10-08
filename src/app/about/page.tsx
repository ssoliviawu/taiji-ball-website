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
              国际武术太极球联合会，是以传承中华太极文脉、建立标准化太极球功法体系、推动太极球运动全球普及、践行全民健康理念为核心宗旨的国际性武术专业组织。联合会以《28式太极球竞赛套路》和新编《精炼9式太极球》两大核心功法为载体，汇聚国内国际武林泰斗、体育院校专家教授、各大太极流派代表性传承人，构建集功法创编、人才培养、赛事认证、学术研究、文化传播、标准化建设、国际官网运营于一体的完整行业生态，致力于将太极球打造为兼具传统内功修炼、大众康养健身、专业竞技赛事三重属性的中华国粹运动，以武道联结世界，助力人类健康命运共同体建设。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 太极球发展史 */}
      <section className="py-20 px-4 bg-bg-paper">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl text-primary text-center mb-8">
              太极球发展史
            </h2>
            <div className="space-y-8">
              <div className="card-new-chinese p-8">
                <h3 className="font-serif text-xl text-accent mb-4">一、远古雏形：道家养生与古武功力器具</h3>
                <p className="text-muted leading-relaxed">
                  太极球雏形最早可追溯至唐宋道家修行体系，修道之人以天然石球、木球开展周身经络滚动、丹田导引训练，打通气血、调和阴阳，是最早的球体养生功法雏形；明清时期，陈氏、杨氏、武当等太极门派均将石球、铜球作为闭门内功、推手沾连粘随专项辅具，仅在门内嫡传，无统一名称、无成套标准化套路，传承零散、秘而不宣。
                </p>
              </div>
              <div className="card-new-chinese p-8">
                <h3 className="font-serif text-xl text-accent mb-4">二、近代探索：民国太极球技法初步成型</h3>
                <p className="text-muted leading-relaxed">
                  民国时期，武术家许禹生率先以球体作为推手专项训练器材，形成单练、双人对练等基础模式；吴鉴泉弟子褚民谊正式定名&ldquo;太极球&rdquo;，创制悬挂式铜球训练法，太极球正式走入公开武术视野，但仍以零散功法、小众练习为主，始终缺少统一规范的完整套路体系。
                </p>
              </div>
              <div className="card-new-chinese p-8">
                <h3 className="font-serif text-xl text-accent mb-4">三、当代断层与革新契机</h3>
                <p className="text-muted leading-relaxed">
                  近现代数十年间，传统太极球功法流派繁杂、动作不一、轻重标准混乱，缺少权威理论支撑与竞赛规范，始终无法规模化推广。在此背景下，业内亟需一套兼顾传统拳理、人体工学、大众康养、竞技标准的官方统一套路，为太极球运动正名、定标、立脉，28式太极球、新编精炼9式太极球应运而生。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 创立背景 */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-bg-paper rounded-xl p-8 md:p-12"
          >
            <h2 className="font-serif text-3xl text-primary text-center mb-6">创立背景</h2>
            <div className="ink-flow-line w-24 mx-auto mb-8" />
            <p className="text-muted leading-relaxed text-center md:text-lg">
              为终结太极球行业杂乱无序的发展现状，搭建全球统一的管理、教学、赛事、认证平台，在中华武林泰斗、中国武术研究院专家委员会专家张山先生全程悉心指导下，由其入室弟子刘海全、张洁纯两位核心发起人，联合张保生、郑达柱、郑定朴、冯海啸、李文军、张超等共同组建国际武术太极球联合会；同时吸纳全国多所体育院校教授、各太极拳流派代表性传承人组成专家顾问团，为功法创编、体系搭建提供权威学术支撑。
            </p>
          </motion.div>
        </div>
      </section>

  {/* 联合会核心宗旨、使命、愿景 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-bg-paper rounded-xl p-8 md:p-12"
          >
            <h3 className="font-serif text-2xl text-primary mb-6 text-center">联合会核心宗旨、使命、愿景</h3>
            <div className="ink-flow-line w-24 mx-auto mb-8" />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: '宗旨', desc: '守正太极本源，创新功法体系；统一行业标准，规范教学赛事；普及康养武道，传承中华文脉。' },
                { title: '使命', desc: '以28式太极球、新编精炼9式太极球为载体，传承上古圣贤道统，打通“易、武、医、道”四维合一的养生修炼路径，以武术健康文化联结全球。' },
                { title: '愿景', desc: '打造全球最权威的太极球专业组织，让太极球成为全民康养标配运动、国际正式武术竞赛项目，助力构建人类健康命运共同体。' },
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
            <h2 className="font-serif text-3xl text-primary mb-2">创始团队</h2>
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
                desc: '国家级社会体育指导；中国武术六段；国家健身气功一级裁判；师承中国武术泰斗国家体局总局武术研究院荣誉专家张山先生；青城太极传人。荣获全运会健身气功项目铜牌、全省健身气功赛事多项冠军，获评全球首届太极拳网络之星、2025武学百家年度影响力人物。'
              },
              {
                name: '冯海啸',
                title: '联合创始人',
                desc: '毕业于首都体育学院，武术散打六段，师承“醉鬼张三”长孙张家良先生；中国武术泰斗、国家体育总局武术研究院荣誉专家张山先生。负责联合会组织架构搭建、分会管理、会员体系建设、资质认证规范制定，统筹全国各级分支机构标准化运营。'
              },
              {
                name: '郑定朴',
                title: '联合创始人',
                desc: '传统武术文化研究学者，负责太极球文化溯源、拳理典籍整理、学术论文编撰，完善功法文化理论根基。'
              },
              {
                name: '张山',
                title: '终身首席顾问、功法总指导',
                desc: '国内武术界泰斗、中国武术研究院专家委员会权威专家，全程把控28式太极球创编方向、拳理内核、动作科学性与武术规范性，审定全套竞赛标准、教材内容，为整个项目提供国家级权威背书，把控武道传承底线与行业发展格局。'
              },
              {
                name: '专家顾问团',
                title: '智库支持',
                desc: '汇聚全国体育院校高校教授、陈式、杨式、吴式、武式、孙式六大太极拳流派代表性传承人、武术段位评审专家，形成多元、权威的学术智囊团队，保障功法科学、正统、兼容。'
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
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