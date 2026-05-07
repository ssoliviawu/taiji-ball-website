'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Registration {
  id: number
  name: string
  phone: string
  email: string | null
  experience: string | null
  message: string | null
  status: string
  operator: string | null
  created_at: string
}

const experienceLabels: Record<string, string> = {
  none: '无经验',
  beginner: '初学者（一年以内）',
  intermediate: '有一定基础（1-3年）',
  advanced: '资深习练者（3年以上）',
}

const statusLabels: Record<string, string> = {
  pending: '待联系',
  contacted: '已联系',
}

export default function RegistrationsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [authenticating, setAuthenticating] = useState(false)

  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editOperator, setEditOperator] = useState('')

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthenticating(true)
    setAuthError('')

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setIsAuthenticated(true)
        sessionStorage.setItem('admin_authenticated', 'true')
        setPassword('')
      } else {
        setAuthError(data.error || '密码错误')
      }
    } catch {
      setAuthError('网络错误')
    } finally {
      setAuthenticating(false)
    }
  }

  useEffect(() => {
    const authenticated = sessionStorage.getItem('admin_authenticated')
    if (authenticated === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      fetchRegistrations()
    }
  }, [isAuthenticated])

  const fetchRegistrations = async () => {
    try {
      const response = await fetch('/api/admin/registrations')
      const data = await response.json()
      if (response.ok && Array.isArray(data)) {
        setRegistrations(data)
      } else {
        setError(data.error || '获取数据失败')
      }
    } catch {
      setError('网络错误')
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (id: number, status: string) => {
    try {
      const response = await fetch('/api/admin/registrations', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      })
      if (response.ok) {
        setRegistrations(regs =>
          regs.map(r => (r.id === id ? { ...r, status } : r))
        )
      }
    } catch (err) {
      console.error('更新状态失败:', err)
    }
  }

  const handleOperatorSave = async (id: number) => {
    if (!editOperator.trim()) {
      setEditingId(null)
      return
    }
    try {
      const response = await fetch('/api/admin/registrations', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, operator: editOperator.trim() }),
      })
      if (response.ok) {
        setRegistrations(regs =>
          regs.map(r => (r.id === id ? { ...r, operator: editOperator.trim() } : r))
        )
      }
    } catch (err) {
      console.error('更新操作员失败:', err)
    }
    setEditingId(null)
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString('zh-CN')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('admin_authenticated')
    setLoading(true)
    setRegistrations([])
  }

  // 密码验证界面
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-new-chinese p-8 max-w-md w-full mx-4"
        >
          <div className="text-center mb-6">
            <h1 className="font-serif text-2xl text-primary mb-2">管理后台</h1>
            <p className="text-muted">请输入管理员密码</p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent bg-bg-paper text-primary"
                placeholder="请输入密码"
                autoFocus
              />
            </div>

            {authError && (
              <div className="text-center text-red-500 bg-red-50 p-3 rounded-lg text-sm">
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="btn-accent w-full disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={authenticating || !password}
            >
              {authenticating ? '验证中...' : '进入后台'}
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  // 已验证后的数据展示
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-primary">加载中...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="font-serif text-3xl text-primary mb-2">报名记录管理</h1>
          <p className="text-muted">共 {registrations.length} 条报名记录</p>
          <button
            onClick={handleLogout}
            className="mt-4 text-sm text-muted hover:text-accent underline"
          >
            退出登录
          </button>
        </motion.div>

        {!Array.isArray(registrations) || registrations.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-muted"
          >
            暂无报名记录
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-3 py-3 text-left">序号</th>
                    <th className="px-3 py-3 text-left">姓名</th>
                    <th className="px-3 py-3 text-left">电话</th>
                    <th className="px-3 py-3 text-left">邮箱</th>
                    <th className="px-3 py-3 text-left">经验</th>
                    <th className="px-3 py-3 text-left">说明</th>
                    <th className="px-3 py-3 text-left">处理状态</th>
                    <th className="px-3 py-3 text-left">操作员</th>
                    <th className="px-3 py-3 text-left">提交时间</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.map((reg, index) => (
                    <tr
                      key={reg.id}
                      className={index % 2 === 0 ? 'bg-bg-paper' : 'bg-white'}
                    >
                      <td className="px-3 py-3 text-primary">{reg.id}</td>
                      <td className="px-3 py-3 text-primary font-medium">{reg.name}</td>
                      <td className="px-3 py-3 text-primary">{reg.phone}</td>
                      <td className="px-3 py-3 text-muted text-sm">{reg.email || '-'}</td>
                      <td className="px-3 py-3 text-muted text-sm">
                        {reg.experience ? experienceLabels[reg.experience] || reg.experience : '-'}
                      </td>
                      <td className="px-3 py-3 text-muted text-sm max-w-xs truncate">
                        {reg.message || '-'}
                      </td>
                      <td className="px-3 py-3">
                        <select
                          value={reg.status || 'pending'}
                          onChange={e => handleStatusChange(reg.id, e.target.value)}
                          className={`px-2 py-1 rounded text-sm border cursor-pointer ${
                            reg.status === 'contacted'
                              ? 'bg-green-100 text-green-700 border-green-300'
                              : 'bg-yellow-100 text-yellow-700 border-yellow-300'
                          }`}
                        >
                          <option value="pending">待联系</option>
                          <option value="contacted">已联系</option>
                        </select>
                      </td>
                      <td className="px-3 py-3">
                        {editingId === reg.id ? (
                          <input
                            type="text"
                            value={editOperator}
                            onChange={e => setEditOperator(e.target.value)}
                            onBlur={() => handleOperatorSave(reg.id)}
                            onKeyDown={e => {
                              if (e.key === 'Enter') handleOperatorSave(reg.id)
                              if (e.key === 'Escape') setEditingId(null)
                            }}
                            autoFocus
                            className="px-2 py-1 rounded border text-sm w-24"
                            placeholder="输入姓名"
                          />
                        ) : (
                          <span
                            onClick={() => {
                              setEditingId(reg.id)
                              setEditOperator(reg.operator || '')
                            }}
                            className={`text-sm cursor-pointer px-2 py-1 rounded ${
                              reg.operator
                                ? 'text-primary hover:bg-gray-100'
                                : 'text-muted hover:bg-gray-100 italic'
                            }`}
                          >
                            {reg.operator || '点击编辑'}
                          </span>
                        )}
                      </td>
                      <td className="px-3 py-3 text-muted text-sm">
                        {formatDate(reg.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}