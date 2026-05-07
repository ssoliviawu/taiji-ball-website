import { NextResponse } from 'next/server'
import { getAllRegistrations, updateRegistration } from '@/lib/db'

export async function GET() {
  try {
    const registrations = await getAllRegistrations()
    const response = NextResponse.json(registrations)
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate')
    return response
  } catch (error) {
    console.error('获取报名数据失败:', error)
    const errorMessage = error instanceof Error ? error.message : '获取数据失败'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json()
    const { id, status, operator } = data

    if (!id) {
      return NextResponse.json({ error: '缺少记录ID' }, { status: 400 })
    }

    await updateRegistration(id, { status, operator })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('更新报名数据失败:', error)
    const errorMessage = error instanceof Error ? error.message : '更新失败'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}