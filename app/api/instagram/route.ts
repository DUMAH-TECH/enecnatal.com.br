import { NextResponse } from 'next/server'

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN

  if (!token) {
    return NextResponse.json({ error: 'Token não configurado' }, { status: 500 })
  }

  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=9&access_token=${token}`,
    { next: { revalidate: 3600 } } // cache por 1 hora
  )

  if (!res.ok) {
    return NextResponse.json({ error: 'Erro ao buscar posts' }, { status: 502 })
  }

  const data = await res.json()
  return NextResponse.json(data)
}
