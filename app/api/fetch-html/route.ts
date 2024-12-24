import { NextResponse } from '../../mocks/next-server'

export async function POST(request: Request) {
  try {
    const { url } = await request.json()
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' })
    }

    const response = await fetch(url)
    const html = await response.text()

    return NextResponse.json({ html })
  } catch (error) {
    console.error('Error fetching HTML:', error)
    return NextResponse.json({ error: 'Failed to fetch HTML' })
  }
}
