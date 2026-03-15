'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    img: '/banner-inicial.webp',
    hashtag: '#FamíliaENEC',
    title: 'Há 33 anos contribuindo com a descoberta do conhecimento',
    cta: 'Vem fazer parte dessa família!',
    position: 'center' as const,
  },
  {
    img: '/banner-2.png',
    hashtag: '#ExcelênciaENEC',
    title: 'ENEC: há 33 anos educando com excelência.',
    subtitle: 'Aqui, o caminho para crescer é feito com amor.',
    cta: null,
    position: 'bottom' as const,
  },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 6000)
    return () => clearInterval(timer)
  }, [current])

  function goTo(idx: number) {
    if (animating || idx === current) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 400)
  }

  return (
    <section className="hero-section">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''} ${animating && i === current ? 'fading' : ''}`}
        >
          <Image
            src={slide.img}
            alt={`Banner ENEC ${i + 1}`}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority={i === 0}
          />
          <div className={`hero-overlay ${slides[i].position === 'bottom' ? 'hero-overlay-gradient' : ''}`} />
        </div>
      ))}

      <div
        className="hero-content container"
        style={{
          position: 'relative',
          zIndex: 2,
          ...(slides[current].position === 'center'
            ? { paddingTop: 120, paddingBottom: 80 }
            : { paddingTop: 0, paddingBottom: 32 }),
        }}
      >
        <p className="hero-hashtag">{slides[current].hashtag}</p>
        <h1 className="hero-tagline" key={current}>{slides[current].title}</h1>
        {'subtitle' in slides[current] && (slides[current] as any).subtitle && (
          <p className="hero-subtitle" key={`sub-${current}`}>{(slides[current] as any).subtitle}</p>
        )}
        {slides[current].cta && (
          <Link href="/matriculas-2026" className="btn btn-accent btn-lg">
            {slides[current].cta}
          </Link>
        )}
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Setas */}
      <button className="hero-arrow hero-arrow-prev" onClick={() => goTo((current - 1 + slides.length) % slides.length)} aria-label="Anterior">‹</button>
      <button className="hero-arrow hero-arrow-next" onClick={() => goTo((current + 1) % slides.length)} aria-label="Próximo">›</button>
    </section>
  )
}
