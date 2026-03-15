import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MVVTabs from '../components/MVVTabs'
import ContactForm from '../components/ContactForm'

export const metadata: Metadata = {
  title: 'Nossa História – ENEC',
  description: 'Conheça a história da ENEC, escola fundada em 1994 em Natal/RN que cresceu para atender do Ensino Infantil ao Fundamental com qualidade e carinho.',
}

export default function NossaHistoriaPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <h1>Nossa História</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="historia-layout">

            {/* Foto */}
            <div className="historia-img-wrap">
              <div className="historia-img-badge">Desde 1994</div>
              <Image
                src="/nossa-historia.png"
                alt="História da ENEC"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <div className="historia-img-overlay" />
            </div>

            {/* Texto */}
            <div className="historia-text">
              <span className="historia-tag">Nossa Trajetória</span>
              <h2 className="historia-title">33 anos transformando vidas por meio da educação</h2>

              <div className="historia-timeline">
                <div className="historia-tl-item">
                  <div className="historia-tl-dot" />
                  <div>
                    <span className="historia-tl-year">1994</span>
                    <p>A ENEC começou a escrever sua história em fevereiro de 1994, oferecendo apenas a Educação Infantil, sob o nome de <strong>Jardim Escola Clube da Criança</strong>.</p>
                  </div>
                </div>
                <div className="historia-tl-item">
                  <div className="historia-tl-dot" />
                  <div>
                    <span className="historia-tl-year">Expansão</span>
                    <p>A educadora <strong>Maria Vera Lúcia Trajano de Oliveira</strong>, acreditando em um projeto maior, ampliou a estrutura física e implantou o Ensino Fundamental I e II.</p>
                  </div>
                </div>
                <div className="historia-tl-item">
                  <div className="historia-tl-dot historia-tl-dot-accent" />
                  <div>
                    <span className="historia-tl-year">Hoje</span>
                    <p>A ENEC oferece uma estrutura <strong>diferenciada e acolhedora</strong>, com salas amplas e climatizadas, inovações pedagógicas e professores capacitados para um processo de formação integral e eficaz.</p>
                  </div>
                </div>
              </div>

              <Link href="/matriculas-2026" className="btn btn-primary" style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Faça Parte da Família ENEC
              </Link>
            </div>

          </div>
        </div>
      </section>

      <MVVTabs />

      <ContactForm />
    </>
  )
}
