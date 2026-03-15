import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram } from 'lucide-react'
import HeroBanner from './components/HeroBanner'
import LevelPills from './components/LevelPills'
import MVVTabs from './components/MVVTabs'
import ContactForm from './components/ContactForm'
import Testimonials from './components/Testimonials'
import GaleriaAlunos from './components/GaleriaAlunos'

const posts = [
  { id: 'teatro', img: '/blog-teatro.webp', category: 'Blog', title: 'Cultura e integração: influências do teatro no ambiente escolar', excerpt: 'O teatro é uma das artes mais antigas da história da humanidade, surgiu por volta do século IV a.C. – desde então é uma expressão artística de grande relevância social e cultural.', date: 'outubro 11, 2022', slug: '/blog/teatro-no-ambiente-escolar' },
  { id: 'saude', img: '/blog-saude.webp', category: 'Blog', title: 'Saúde Mental na Escola: um tema que deve ser discutido o ano todo!', excerpt: 'A infância e adolescência são fases marcadas por muitas descobertas e mudanças. Muitas vezes, essas condições impactam negativamente a vida dos jovens.', date: 'setembro 21, 2022', slug: '/blog/saude-mental-na-escola' },
  { id: 'adaptacao', img: '/blog-adaptacao.webp', category: 'Blog', title: 'Escola nova: como auxiliar a criança no processo de adaptação?', excerpt: 'A adaptação escolar é um processo delicado e muito importante para o desenvolvimento emocional e social das crianças, especialmente nas primeiras experiências escolares.', date: 'agosto 28, 2022', slug: '/blog/adaptacao-escolar-infantil' },
]


export default function HomePage() {
  return (
    <>
      <HeroBanner />

      <GaleriaAlunos />

      <LevelPills />

      {/* CTA Block */}
      <section className="section section-primary">
        <div className="container">
          <div className="cta-block">
            <h2>Faça parte da <em>#FamíliaENEC</em> em 2026!</h2>
            <p>Ter uma educação de qualidade é imprescindível na atualidade e a ENEC sabe bem disso.</p>
            <p>Aqui, é possível ter uma base de conhecimento que solidifica o estudante nas bases científicas, do Ensino Infantil ao Fundamental, em todas as fases da vida.</p>
            <p>Além disso, o nosso dia a dia de aprendizado é pautado pelo respeito pelo indivíduo, pela empatia e pelo melhor interesse dos nossos alunos. Afinal, é preciso criar um ambiente de família!</p>
            <Link href="/matriculas-2026" className="btn btn-accent" style={{ marginTop: 28 }}>
              Faça a Sua Matrícula
            </Link>
          </div>
        </div>
      </section>

      <MVVTabs />

      {/* Blog Preview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Blog da ENEC</h2>
          <div className="blog-grid">
            {posts.map(({ id, img, category, title, excerpt, date, slug }) => (
              <Link key={id} href={slug} className="blog-card" style={{ display: 'block' }}>
                <div className="blog-card-image" style={{ position: 'relative', padding: 0 }}>
                  <Image src={img} alt={title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="blog-card-body">
                  <p className="blog-card-category">{category}</p>
                  <h3 className="blog-card-title">{title}</h3>
                  <p className="blog-card-excerpt">{excerpt}</p>
                  <p className="blog-card-date">{date}</p>
                  <p style={{ marginTop: 12, color: 'var(--secondary)', fontWeight: 700, fontSize: '0.875rem' }}>Leia Mais →</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/blog" className="btn btn-outline">Mais Postagens</Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Social Follow */}
      <section className="social-follow-section">
        <div className="container">
          <div className="social-follow-card">
            <div className="social-follow-ig-blob" />
            <div className="social-follow-inner">
              <div className="social-follow-avatar">
                <Instagram size={36} color="white" />
              </div>
              <div className="social-follow-text">
                <h2>Siga a ENEC no Instagram!</h2>
                <p>Acompanhe o dia a dia da escola, eventos, conquistas dos alunos e muito mais.</p>
                <p className="social-follow-handle">@enecnatal</p>
              </div>
              <div className="social-follow-actions">
                <a
                  href="https://www.instagram.com/enecnatal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn social-btn-ig"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: '1rem', padding: '14px 28px' }}
                >
                  <Instagram size={20} /> Seguir no Instagram
                </a>
                <a
                  href="https://www.facebook.com/somosenec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn social-btn-fb"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: '1rem', padding: '14px 28px' }}
                >
                  <Facebook size={20} /> Seguir no Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  )
}
