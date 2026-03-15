'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { IllustrationInfantil, IllustrationFund1, IllustrationFund2 } from './LevelIllustrations'

const levels = [
  {
    id: 'ed-infantil',
    Illustration: IllustrationInfantil,
    label: 'Educação Infantil',
    subtitle: 'Níveis IV e V',
    color: '#eef1f8',
    accent: '#1a2a5e',
    badge: '#d6dcf0',
    description: 'A primeira etapa educacional é uma das mais importantes para a formação das crianças. A escola é um espaço de socialização em um ambiente saudável, educativo e repleto de diversidade. Muito além do "brincar", as técnicas pedagógicas estimulam a cultura, o respeito ao outro, o hábito da leitura e o desenvolvimento cognitivo e intelectual.'
  },
  {
    id: 'fund-1',
    Illustration: IllustrationFund1,
    label: 'Ensino Fundamental I',
    subtitle: 'Do 1º ao 5º ano',
    color: '#fdf0ef',
    accent: '#c0392b',
    badge: '#f5c6c2',
    description: 'É no Ensino Fundamental I que ocorre uma etapa essencial para a formação do indivíduo, sua relação com o mundo e suas habilidades. Aprender a ler, interpretar, escrever, fazer operações matemáticas, discussões sobre cidadania — tudo isso é apresentado de forma lúdica que promove a interatividade e o desenvolvimento pessoal.'
  },
  {
    id: 'fund-2',
    Illustration: IllustrationFund2,
    label: 'Ensino Fundamental II',
    subtitle: 'Do 6º ao 9º ano',
    color: '#eef1f8',
    accent: '#1a2a5e',
    badge: '#c9d2ea',
    description: 'O Ensino Fundamental II é um período em que o jovem é apresentado a conceitos mais complexos a respeito do mundo e do conhecimento. Esta fase promove a autonomia, o senso crítico, a formação de repertório cultural e as discussões sobre a sociedade.'
  },
]

export default function LevelPills() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="levels-section">
      <div className="levels-bg-dot levels-bg-dot-1" />
      <div className="levels-bg-dot levels-bg-dot-2" />
      <div className="levels-bg-dot levels-bg-dot-3" />
      <div className="levels-bg-dot levels-bg-dot-4" />
      <span className="levels-bg-star levels-bg-star-1">✦</span>
      <span className="levels-bg-star levels-bg-star-2">✦</span>
      <span className="levels-bg-star levels-bg-star-3">✦</span>
      <div className="container">
        <h2 className="section-title">Nossas Turmas</h2>
        <p className="section-subtitle">Clique em cada etapa para saber mais</p>
        <div className="level-cards">
          {levels.map(({ id, Illustration, label, subtitle, color, accent, badge, description }) => (
            <div
              key={id}
              className={`level-card ${active === id ? 'active' : ''}`}
              style={{ '--card-color': color, '--card-accent': accent, '--card-badge': badge } as React.CSSProperties}
              onClick={() => setActive(active === id ? null : id)}
            >
              <div className="level-card-top">
                <div className="level-card-illus"><Illustration /></div>
                <div className="level-card-badge">{subtitle}</div>
              </div>
              <div className="level-card-label">{label}</div>
              <div className="level-card-arrow">
                <ChevronDown size={18} style={{ transition: 'transform 0.3s', transform: active === id ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </div>
              {active === id && (
                <div className="level-card-desc">{description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
