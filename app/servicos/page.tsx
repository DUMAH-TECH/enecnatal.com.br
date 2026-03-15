import type { Metadata } from 'next'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faLaptop, faFileInvoiceDollar, faBarcode } from '@fortawesome/free-solid-svg-icons'
import ContactForm from '../components/ContactForm'

export const metadata: Metadata = {
  title: 'Serviços – ENEC',
  description: 'Acesse os serviços online da ENEC: agenda digital, aulas online, boletim, ficha financeira e emissão de boletos.',
}

const servicos = [
  {
    icon: faCalendarDays,
    title: 'Agenda Digital',
    desc: 'Acompanhe a agenda escolar, comunicados e atividades em tempo real pela plataforma Pluriconnect.',
    cta: 'Acessar Agenda',
    url: 'https://plataforma.pluriconnect.com.br/login',
    color: '#eef1f8',
    accent: '#1a2a5e',
  },
  {
    icon: faLaptop,
    title: 'Aulas On-line',
    desc: 'Acesse as aulas e materiais didáticos digitais através da plataforma Plurall, disponível 24h.',
    cta: 'Acessar Aulas',
    url: 'https://www.plurall.net/',
    color: '#fdf0ef',
    accent: '#c0392b',
  },
  {
    icon: faFileInvoiceDollar,
    title: 'Boletim e Ficha Financeira',
    desc: 'Consulte notas, frequência e situação financeira do aluno de forma prática e segura.',
    cta: 'Acessar Boletim',
    url: 'http://www.swisslink.net.br/escolas/login/',
    color: '#eef1f8',
    accent: '#1a2a5e',
  },
  {
    icon: faBarcode,
    title: 'Emissão de Boletos',
    desc: 'Gere e imprima boletos de mensalidade de forma rápida e segura pelo sistema EasySchool.',
    cta: 'Emitir Boleto',
    url: 'http://enec.easyschool.com.br',
    color: '#fdf0ef',
    accent: '#c0392b',
  },
]

export default function ServicosPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <h1>Serviços</h1>
          <p style={{ opacity: 0.7, fontSize: '0.95rem', marginTop: 6 }}>Acesse os portais e plataformas da ENEC</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Nossos Portais Online</h2>
          <p style={{ textAlign: 'center', color: '#666', maxWidth: 600, margin: '0 auto 48px' }}>
            A ENEC disponibiliza plataformas digitais para facilitar o acompanhamento escolar e financeiro dos nossos alunos e responsáveis.
          </p>

          <div className="servicos-grid">
            {servicos.map(({ icon, title, desc, cta, url, color, accent }) => (
              <div key={title} className="servico-card" style={{ background: color }}>
                <div className="servico-icon" style={{ background: accent }}>
                  <FontAwesomeIcon icon={icon} style={{ width: 28, height: 28, color: 'white' }} />
                </div>
                <h3 className="servico-title" style={{ color: accent }}>{title}</h3>
                <p className="servico-desc">{desc}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    background: accent, color: 'white', marginTop: 'auto',
                    display: 'inline-flex', alignItems: 'center', gap: 8
                  }}
                >
                  {cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light" style={{ textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: '#666', marginBottom: 20 }}>Precisa de ajuda para acessar alguma plataforma?</p>
          <a
            href="https://wa.me/5584994053023"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Fale Conosco
          </a>
        </div>
      </section>

      <ContactForm />
    </>
  )
}
