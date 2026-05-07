'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError(data.error || '提交失败，请稍后重试')
      }
    } catch {
      setError('网络错误，请稍后重试')
    } finally {
      setSubmitting(false)
    }
  }

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
              加入我们
            </h1>
            <div className="ink-flow-line w-32 mx-auto mb-4" />
            <p className="text-white/80 max-w-xl mx-auto">
              开启太极球的修行之旅，与志同道合的伙伴一起成长
            </p>
          </motion.div>
        </div>
      </section>

      {/* 报名表单 */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-new-chinese p-8 md:p-12"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-display text-3xl">成</span>
                </div>
                <h2 className="font-serif text-2xl text-primary mb-2">报名成功</h2>
                <p className="text-muted mb-6">感谢您的报名，我们将尽快与您联系</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-accent"
                >
                  继续报名
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-2xl text-primary mb-8 text-center">
                  在线报名
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-primary font-medium mb-2">
                      姓名 <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent bg-bg-paper text-primary"
                      placeholder="请输入您的姓名"
                    />
                  </div>

                  <div>
                    <label className="block text-primary font-medium mb-2">
                      联系电话 <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent bg-bg-paper text-primary"
                      placeholder="请输入您的联系电话"
                    />
                  </div>

                  <div>
                    <label className="block text-primary font-medium mb-2">
                      电子邮箱
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent bg-bg-paper text-primary"
                      placeholder="请输入您的邮箱地址"
                    />
                  </div>

                  <div>
                    <label className="block text-primary font-medium mb-2">
                      太极/武术经验
                    </label>
                    <select
                      value={formData.experience}
                      onChange={e => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent bg-bg-paper text-primary"
                    >
                      <option value="">请选择</option>
                      <option value="none">无经验</option>
                      <option value="beginner">初学者（一年以内）</option>
                      <option value="intermediate">有一定基础（1-3年）</option>
                      <option value="advanced">资深习练者（3年以上）</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-primary font-medium mb-2">
                      其他说明
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent bg-bg-paper text-primary resize-none"
                      placeholder="请输入您想说明的其他内容"
                    />
                  </div>

                  {error && (
                    <div className="text-center text-red-500 bg-red-50 p-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="btn-accent disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={submitting}
                    >
                      {submitting ? '提交中...' : '提交报名'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* 社交媒体和联系方式 */}
      <section className="py-20 px-4 bg-bg-paper">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl text-primary mb-2">关注我们</h2>
            <div className="ink-flow-line w-24 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8 max-w-xs mx-auto">
            {/* 微信公众号 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-new-chinese p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-lg overflow-hidden">
                <img
                  src="/images/公众号二维码.jpg"
                  alt="微信公众号二维码"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-primary mb-1">微信公众号</h3>
              <p className="text-muted text-sm">扫码关注获取更多信息</p>
            </motion.div>
          </div>

          {/* 联系信息 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-white rounded-xl p-8 max-w-xl mx-auto">
              <h3 className="font-serif text-lg text-primary mb-4">联系方式</h3>
              <div className="space-y-2 text-muted">
                <p>电话：+86 18410409515</p>
                <p>邮箱：iwtbf_secretariat@163.com</p>
                <p>地址：北京市昌平区小汤山龙脉</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}