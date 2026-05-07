import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// 用于前端提交报名（只有写入权限）
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 用于管理后台读取数据（有完整权限，只在服务端使用）
export const supabaseAdmin = supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null

export interface Registration {
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

export async function insertRegistration(data: {
  name: string
  phone: string
  email?: string
  experience?: string
  message?: string
}) {
  const { error } = await supabase
    .from('registrations')
    .insert([
      {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        experience: data.experience || null,
        message: data.message || null,
        status: 'pending',
      },
    ])

  if (error) {
    console.error('插入数据失败:', error)
    throw error
  }
}

export async function getAllRegistrations(): Promise<Registration[]> {
  if (!supabaseAdmin) {
    throw new Error('Service role key 未配置')
  }

  const { data, error } = await supabaseAdmin
    .from('registrations')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('获取数据失败:', error)
    throw error
  }

  return data || []
}

export async function updateRegistration(id: number, data: { status?: string; operator?: string }) {
  if (!supabaseAdmin) {
    throw new Error('Service role key 未配置')
  }

  const updateData: Record<string, string> = {}
  if (data.status) updateData.status = data.status
  if (data.operator) updateData.operator = data.operator

  const { error } = await supabaseAdmin
    .from('registrations')
    .update(updateData)
    .eq('id', id)

  if (error) {
    console.error('更新数据失败:', error)
    throw error
  }
}

export async function deleteRegistration(id: number) {
  if (!supabaseAdmin) {
    throw new Error('Service role key 未配置')
  }

  const { error } = await supabaseAdmin
    .from('registrations')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('删除数据失败:', error)
    throw error
  }
}
