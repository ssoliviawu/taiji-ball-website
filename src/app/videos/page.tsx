'use client'

import { motion } from 'framer-motion'

export default function VideosPage() {
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
              扫码观看表演视频
            </p>
          </motion.div>
        </div>
      </section>

      {/* 视频展示 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl text-primary mb-2">名家表演</h2>
            <div className="ink-flow-line w-24 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-new-chinese p-8 max-w-md mx-auto text-center"
          >
            <h3 className="font-medium text-primary mb-4">刘海全二十八式太极球表演</h3>
            <p className="text-muted text-sm mb-6">微信扫码观看</p>

            {/* 二维码 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/演示视频二维码.jpg"
              alt="演示视频二维码"
              className="w-48 h-48 mx-auto mb-4"
            />

            <p className="text-sm text-muted">
              扫描二维码观看精彩表演视频
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}