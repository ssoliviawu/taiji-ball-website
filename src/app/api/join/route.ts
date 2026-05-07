import { NextResponse } from 'next/server'
import { insertRegistration } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, phone, email, experience, message } = data

    if (!name || !phone) {
      return NextResponse.json(
        { error: '姓名和联系电话为必填项' },
        { status: 400 }
      )
    }

    await insertRegistration({
      name,
      phone,
      email,
      experience,
      message,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('保存报名数据失败:', error)
    return NextResponse.json(
      { error: '提交失败，请稍后重试' },
      { status: 500 }
    )
  }
}
