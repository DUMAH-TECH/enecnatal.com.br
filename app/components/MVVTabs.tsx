'use client'
import { useState } from 'react'
import { Target, Heart, BookOpenCheck } from 'lucide-react'

const tabs = [
  {
    id: 'missao',
    label: 'Missão',
    Icon: Target,
    color: '#eef1f8',
    accent: '#1a2a5e',
    badge: '#d6dcf0',
    emoji: '🎯',
    content: 'Oferecer um ensino inovador em um ambiente acolhedor que proporcione o desenvolvimento pessoal e intelectual, promovendo o entendimento e a vivência de valores, princípios e competências que permitam o aluno avaliar e incorporar inovações e mudanças do mundo contemporâneo.'
  },
  {
    id: 'valores',
    label: 'Valores',
    Icon: Heart,
    color: '#fdf0ef',
    accent: '#c0392b',
    badge: '#f5c6c2',
    emoji: '❤️',
    content: 'Responsabilidade socioambiental. Respeito às diferenças em todos os aspectos: étnico, socioeconômico, cultural e religioso. Justiça diante das desigualdades, exclusão social, preconceito e à discriminação.'
  },
  {
    id: 'proposta',
    label: 'Proposta Pedagógica',
    Icon: BookOpenCheck,
    color: '#eef1f8',
    accent: '#1a2a5e',
    badge: '#c9d2ea',
    emoji: '📖',
    content: 'A ENEC tem como finalidade ministrar a educação em concordância com os princípios e normas educacionais vigentes, visando o pleno desenvolvimento do educando e sua preparação para a cidadania no que diz respeito aos aspectos cognitivo, afetivo, físico e sociocultural, complementando a ação da família quanto à formação do cidadão crítico, reflexivo e consciente da sua importância na sociedade.'
  },
]

export default function MVVTabs() {
  const [active, setActive] = useState('missao')
  const current = tabs.find(t => t.id === active)!

  return (
    <section className="mvv-section">
      {/* Background decorations */}
      <div className="mvv-bg-dot mvv-bg-dot-1" />
      <div className="mvv-bg-dot mvv-bg-dot-2" />
      <div className="mvv-bg-dot mvv-bg-dot-3" />
      <span className="mvv-bg-star mvv-bg-star-1">✦</span>
      <span className="mvv-bg-star mvv-bg-star-2">✦</span>

      <div className="container">
        <h2 className="section-title">Quem Somos</h2>
        <p className="section-subtitle">Conheça a essência da ENEC</p>

        {/* Tab buttons */}
        <div className="mvv-nav">
          {tabs.map(({ id, label, Icon, accent }) => (
            <button
              key={id}
              className={`mvv-tab-btn ${active === id ? 'active' : ''}`}
              style={{ '--tab-accent': accent } as React.CSSProperties}
              onClick={() => setActive(id)}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>

        {/* Content card */}
        <div
          className="mvv-card"
          style={{ background: current.color, '--card-accent': current.accent, '--card-badge': current.badge } as React.CSSProperties}
          key={active}
        >
          <div className="mvv-card-icon" style={{ background: current.accent }}>
            <current.Icon size={28} color="white" />
          </div>
          <div className="mvv-card-body">
            <h3 className="mvv-card-title" style={{ color: current.accent }}>{current.label}</h3>
            <p className="mvv-card-text">{current.content}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
