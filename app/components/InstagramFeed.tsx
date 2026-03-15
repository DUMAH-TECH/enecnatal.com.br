'use client'
import Script from 'next/script'

// Para ativar:
// 1. Acesse https://behold.so e crie uma conta gratuita
// 2. Conecte a conta @enecnatal do Instagram
// 3. Copie o "Feed ID" gerado e cole abaixo no lugar de FEED_ID_AQUI
const BEHOLD_FEED_ID = 'FEED_ID_AQUI'

export default function InstagramFeed() {
  if (BEHOLD_FEED_ID === 'FEED_ID_AQUI') {
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px', background: '#f8f8f8', borderRadius: 12, color: '#999' }}>
        <p style={{ marginBottom: 12 }}>Configure o Feed ID do Behold para exibir os posts do Instagram.</p>
        <a
          href="https://www.instagram.com/enecnatal/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
        >
          Ver @enecnatal no Instagram
        </a>
      </div>
    )
  }

  return (
    <>
      {/* @ts-ignore */}
      <behold-widget feed-id={BEHOLD_FEED_ID}></behold-widget>
      <Script src="https://w.behold.so/widget.js" type="module" strategy="lazyOnload" />
    </>
  )
}
