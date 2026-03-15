import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Página não encontrada – ENEC',
}

export default function NotFound() {
  return (
    <div className="page-404">
      {/* Background shapes */}
      <div className="not-found-bg-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
      </div>

      {/* Floating decorations */}
      <span className="not-found-deco deco-1">✏️</span>
      <span className="not-found-deco deco-2">📖</span>
      <span className="not-found-deco deco-3">🎨</span>
      <span className="not-found-deco deco-4">🔭</span>
      <span className="not-found-deco deco-5">⭐</span>
      <span className="not-found-deco deco-6">🌈</span>

      <div className="not-found-content">
        {/* Bouncing icons */}
        <div className="not-found-icons">
          <span className="icon-bounce-1">📚</span>
          <span className="icon-bounce-2">🎒</span>
          <span className="icon-bounce-3">🖍️</span>
          <span className="icon-bounce-4">📐</span>
          <span className="icon-bounce-5">🔬</span>
        </div>

        {/* 404 number */}
        <div className="not-found-number">
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </div>

        {/* Waving character */}
        <div className="not-found-character">🧒</div>

        <h1 className="not-found-title">Ops! Essa página sumiu da mochila!</h1>
        <p className="not-found-sub">
          Parece que essa página foi de férias sem avisar... 🏖️<br />
          Mas não se preocupe, você pode voltar para o início e continuar explorando a <strong>Família ENEC!</strong>
        </p>

        <div className="not-found-actions">
          <Link href="/" className="btn btn-primary btn-lg">
            🏠 Voltar para o Início
          </Link>
          <Link href="/matriculas-2026" className="btn btn-accent btn-lg">
            📝 Matrículas 2026
          </Link>
        </div>
      </div>
    </div>
  )
}
