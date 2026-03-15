import Image from 'next/image'

const fotos = [
  { src: '/galeria-1.png', alt: 'Alunos ENEC', h: 260, rotate: '-3deg' },
  { src: '/galeria-2.png', alt: 'Alunos ENEC', h: 320, rotate: '2deg' },
  { src: '/galeria-3.png', alt: 'Alunos ENEC', h: 280, rotate: '-1.5deg' },
  { src: '/galeria-4.png', alt: 'Alunos ENEC', h: 310, rotate: '3deg' },
  { src: '/galeria-5.png', alt: 'Alunos ENEC', h: 250, rotate: '-2deg' },
  { src: '/galeria-6.png', alt: 'Alunos ENEC', h: 295, rotate: '1.5deg' },
]

// duplica para loop infinito
const track = [...fotos, ...fotos]

export default function GaleriaAlunos() {
  return (
    <section className="galeria-section">
      {/* Decorações */}
      <div className="galeria-deco galeria-deco-sol">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="26" r="18" fill="#f9ca24" opacity="0.9"/>
          {[0,45,90,135,180,225,270,315].map((angle, i) => (
            <line key={i}
              x1={26 + 20 * Math.cos((angle * Math.PI) / 180)}
              y1={26 + 20 * Math.sin((angle * Math.PI) / 180)}
              x2={26 + 26 * Math.cos((angle * Math.PI) / 180)}
              y2={26 + 26 * Math.sin((angle * Math.PI) / 180)}
              stroke="#f9ca24" strokeWidth="3" strokeLinecap="round"
            />
          ))}
        </svg>
      </div>
      <div className="galeria-deco galeria-deco-onda">
        <svg width="48" height="20" viewBox="0 0 48 20" fill="none">
          <path d="M2 10 Q8 2 14 10 Q20 18 26 10 Q32 2 38 10 Q44 18 50 10" stroke="#1a2a5e" strokeWidth="3" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="galeria-deco galeria-deco-ponto1" />
      <div className="galeria-deco galeria-deco-ponto2" />
      <div className="galeria-deco galeria-deco-estrela">✦</div>

      <div className="container">
        <h2 className="section-title">Nossa <em style={{ color: 'var(--secondary)', fontStyle: 'normal' }}>#FamíliaENEC</em></h2>
      </div>

      {/* Faixa de scroll infinito */}
      <div className="galeria-marquee-wrap">
        <div className="galeria-marquee-track">
          {track.map((foto, i) => (
            <div
              key={i}
              className="galeria-marquee-item"
              style={{ '--h': `${foto.h}px`, '--r': foto.rotate } as React.CSSProperties}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="280px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
