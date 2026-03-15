'use client'
import { useState, useEffect } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  { text: 'Meus 3 filhos estudaram lá e eu amei! Hoje meu filho está sendo convocado para a polícia, por ter passado no concurso do Ceará, e o outro está cursando Educação Física. Minha filha terminou o Ensino Médio e vai fazer o Enem. Sei que a ENEC contribuiu diretamente na busca do que eles querem!', author: 'Marlene Ramos', source: 'Facebook', color: '#e74c3c' },
  { text: 'Excelente escola! Profissionais maravilhosos, ensino de qualidade! A ENEC não é simplesmente uma escola, é a Família ENEC.', author: 'Clodoaldo Martiniano', source: 'Facebook', color: '#5dade2' },
  { text: 'Amo essa escola. Meu filho estudou da educação infantil ao 9º ano. Equipe maravilhosa.', author: 'Adriana Lima', source: 'Instagram', color: '#e74c3c' },
  { text: 'Estudei nessa escola maravilhosa, morro de saudade!!! Ótima equipe. Fiz amizades que carrego comigo até hoje.', author: 'Monaliza Brito', source: 'Facebook', color: '#5dade2' },
]

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).slice(0, 2).join('')
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)

  const go = (next: number) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setActive((next + testimonials.length) % testimonials.length)
      setAnimating(false)
    }, 200)
  }

  useEffect(() => {
    const t = setInterval(() => go(active + 1), 6000)
    return () => clearInterval(t)
  }, [active])

  return (
    <section className="testimonials-section">
      {/* decorative blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="testimonials-header">
          <Quote size={40} className="quote-icon" />
          <h2 className="section-title white">O que dizem sobre a ENEC</h2>
          <div className="stars-row">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#e74c3c" color="#e74c3c" />)}
          </div>
        </div>

        {/* Featured card */}
        <div className={`testimonial-featured ${animating ? 'fade-out' : 'fade-in'}`}>
          <div className="featured-quote-mark">"</div>
          <p className="featured-text">{testimonials[active].text}</p>
          <div className="featured-author">
            <div className="avatar" style={{ background: testimonials[active].color }}>
              {getInitials(testimonials[active].author)}
            </div>
            <div>
              <p className="author-name">{testimonials[active].author}</p>
              <p className="author-source">{testimonials[active].source}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="testimonial-controls">
          <button className="ctrl-btn" onClick={() => go(active - 1)} aria-label="Anterior">
            <ChevronLeft size={22} />
          </button>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`t-dot ${i === active ? 'active' : ''}`}
                onClick={() => go(i)}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
          <button className="ctrl-btn" onClick={() => go(active + 1)} aria-label="Próximo">
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Mini cards */}
        <div className="testimonials-mini-grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`mini-card ${i === active ? 'mini-active' : ''}`}
              onClick={() => go(i)}
            >
              <div className="mini-avatar" style={{ background: t.color }}>{getInitials(t.author)}</div>
              <div>
                <p className="mini-name">{t.author}</p>
                <p className="mini-source">{t.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          position: relative;
          background: linear-gradient(135deg, #1a2a5e 0%, #0f1a3e 60%, #1a1a2e 100%);
          padding: 80px 0;
          overflow: hidden;
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
        }
        .blob-1 {
          width: 400px; height: 400px;
          background: #e74c3c;
          top: -100px; left: -100px;
        }
        .blob-2 {
          width: 300px; height: 300px;
          background: #5dade2;
          bottom: -80px; right: -80px;
        }
        .testimonials-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .quote-icon {
          color: #e74c3c;
          margin-bottom: 12px;
        }
        .stars-row {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-top: 12px;
        }
        .testimonial-featured {
          max-width: 760px;
          margin: 0 auto 40px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 20px;
          padding: 48px;
          position: relative;
          backdrop-filter: blur(8px);
          transition: opacity 0.2s ease;
        }
        .fade-out { opacity: 0; transform: scale(0.98); }
        .fade-in  { opacity: 1; transform: scale(1); transition: opacity 0.3s ease, transform 0.3s ease; }
        .featured-quote-mark {
          position: absolute;
          top: 16px; left: 32px;
          font-size: 6rem;
          line-height: 1;
          color: #e74c3c;
          opacity: 0.4;
          font-family: Georgia, serif;
        }
        .featured-text {
          color: white;
          font-size: 1.15rem;
          line-height: 1.8;
          font-style: italic;
          margin-bottom: 32px;
          padding-top: 16px;
        }
        .featured-author {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .avatar {
          width: 52px; height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          color: white;
          flex-shrink: 0;
          font-family: var(--font-montserrat, Montserrat, sans-serif);
        }
        .author-name {
          color: white;
          font-weight: 700;
          font-family: var(--font-montserrat, Montserrat, sans-serif);
          font-size: 1rem;
        }
        .author-source {
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
          margin-top: 2px;
        }
        .testimonial-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
        }
        .ctrl-btn {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          width: 40px; height: 40px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        .ctrl-btn:hover { background: rgba(255,255,255,0.2); }
        .testimonial-dots {
          display: flex;
          gap: 8px;
        }
        .t-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }
        .t-dot.active {
          background: #e74c3c;
          width: 28px;
          border-radius: 5px;
        }
        .testimonials-mini-grid {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .mini-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 12px 20px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .mini-card:hover, .mini-card.mini-active {
          background: rgba(255,255,255,0.14);
          border-color: rgba(255,255,255,0.25);
        }
        .mini-avatar {
          width: 36px; height: 36px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 0.85rem; color: white;
          flex-shrink: 0;
          font-family: var(--font-montserrat, Montserrat, sans-serif);
        }
        .mini-name {
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .mini-source {
          color: rgba(255,255,255,0.5);
          font-size: 0.75rem;
        }
        @media (max-width: 768px) {
          .testimonial-featured { padding: 32px 24px; }
          .featured-text { font-size: 1rem; }
        }
      `}</style>
    </section>
  )
}
