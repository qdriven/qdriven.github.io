import { NextResponse } from 'next/server'
import { getAllCheatsheets } from '@/lib/markdown'

export async function GET() {
  try {
    const cheatsheets = getAllCheatsheets()
    return NextResponse.json(cheatsheets)
  } catch (error) {
    console.error('Error fetching cheatsheets:', error)
    return NextResponse.json({ error: 'Failed to fetch cheatsheets' }, { status: 500 })
  }
}
