// Mock for Next.js server types
export class NextResponse {
  static json(data: any) {
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

export function NextRequest() {
  return {
    json: () => Promise.resolve({}),
    text: () => Promise.resolve('')
  }
}
