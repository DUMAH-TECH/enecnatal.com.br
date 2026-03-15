import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../../components/ContactForm'

export const metadata: Metadata = {
  title: 'Cultura e integração: influências do teatro no ambiente escolar – ENEC',
  description: 'O teatro no ambiente escolar auxilia no desenvolvimento da comunicação, autoestima, criatividade e confiança das crianças.',
}

const tags = ['Aprendizado', 'Desenvolvimento emocional', 'Educação de qualidade', 'Educação Infantil', 'ENEC', 'Ensino', 'Escola em Natal', 'Natal RN']

export default function TeatroPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: 8 }}>
            <Link href="/">Home</Link> › <Link href="/blog">Blog</Link> › Teatro na Escola
          </p>
          <h1 style={{ fontSize: '1.6rem' }}>Cultura e integração: influências do teatro no ambiente escolar</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="blog-post-layout">
            <article className="blog-post-content">

              <div className="post-meta">
                <span>11 de outubro de 2022</span>
                <span>•</span>
                <span>ENEC Natal</span>
                <span>•</span>
                <span className="post-category">Blog · Educação Infantil · Pedagógico</span>
              </div>

              <div className="post-cover">
                <Image
                  src="/blog-teatro.webp"
                  alt="Fotografia de uma menina segurando uma claquete"
                  width={800}
                  height={450}
                  style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                />
              </div>

              <div className="post-body">
                <p>O teatro é uma das artes mais antigas da história da humanidade, surgiu por volta do século IV a.C. – desde então é uma expressão importantíssima no desenvolvimento cultural e social.</p>

                <p>Tinha-se o conceito de teatro como um propósito de vida artista, algo voltado para quem tinha desejo de se tornar atriz ou ator. Com o avanço de formas pedagógicas, a escola pôde ser um lugar que se estendia muito além de números, letras e fórmulas.</p>

                <h2>Teatro no ambiente escolar</h2>

                <p>Ao ser introduzido no ambiente escolar, o teatro não apenas tem a oportunidade de detectar novos talentos, mas de gerar uma aula multidisciplinar ao aluno. Essa prática auxilia uma série de sentidos e também no desenvolvimento social.</p>

                <p>A habilidade que começa a ser desenvolvida e que, por consequência, influencia todas as outras, é a <strong>comunicação</strong>. A partir dela as crianças podem estimular o exercício da fala, o modo como se expressa e se apresenta ao mundo. Dessa forma, a criança consegue transmitir suas ideias e pensamentos.</p>

                <p>Além disso, é possível perceber uma melhora no desenvolvimento intelectual e cognitivo. Onde é possível ter contato com obras importantes enquanto ele mesmo dá vida ao personagem. A leveza da atividade o leva a um aprendizado lúdico e prazeroso.</p>

                <h2>Teatro aprimora a comunicação das crianças</h2>

                <p>A timidez é algo que faz todo mundo querer sair correndo em meio a um grupo de pessoas. Porém, com o estímulo da comunicação oral e também a comunicação não verbal, o pequeno faz da forma que se sente mais confortável. Entendendo também seu próprio tempo, a autonomia é um dos pontos fortes dessa jornada.</p>

                <div className="post-benefits">
                  <div className="benefit-item">
                    <div className="benefit-icon">🎭</div>
                    <div>
                      <h4>Autoestima elevada</h4>
                      <p>A prática teatral ajuda a criança a desenvolver confiança em si mesma e em suas capacidades.</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">🧠</div>
                    <div>
                      <h4>Criatividade aguçada</h4>
                      <p>Ao criar e interpretar personagens, a imaginação é constantemente estimulada.</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">💬</div>
                    <div>
                      <h4>Capacidade de memorização</h4>
                      <p>Com o cérebro trabalhando para decorar falas, a memória é significativamente desenvolvida.</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">🤝</div>
                    <div>
                      <h4>Desenvolvimento social</h4>
                      <p>O trabalho em grupo no teatro estimula o respeito, a cooperação e a empatia entre os alunos.</p>
                    </div>
                  </div>
                </div>

                <div className="post-highlight">
                  <p>O teatro é a arte que desenvolve os sentidos, fascina e eleva o conhecimento humano. Quer conhecer mais sobre a nossa escola? Entre em contato conosco e nos acompanhe através do Instagram: <strong>@enecnatal</strong>!</p>
                </div>
              </div>

              <div className="post-tags">
                {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>

              <div className="post-cta">
                <p>Quer conhecer mais sobre a nossa escola?</p>
                <Link href="/matriculas-2026" className="btn btn-primary btn-lg">Faça a Sua Matrícula</Link>
              </div>

              <div className="post-nav">
                <Link href="/blog/saude-mental-na-escola" className="post-nav-link">
                  ← Post anterior: Saúde Mental na Escola
                </Link>
              </div>
            </article>

            <aside className="blog-sidebar">
              <p className="sidebar-title">Outros Posts</p>
              <ul className="sidebar-posts">
                <li>
                  <Link href="/blog/saude-mental-na-escola">
                    <Image src="/blog-saude.webp" alt="Saúde Mental" width={60} height={60} style={{ objectFit: 'cover', borderRadius: 6 }} />
                    <span>Saúde Mental na Escola: um tema que deve ser discutido o ano todo!</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/adaptacao-escolar-infantil">
                    <Image src="/blog-adaptacao.webp" alt="Adaptação" width={60} height={60} style={{ objectFit: 'cover', borderRadius: 6 }} />
                    <span>Escola nova: como auxiliar a criança no processo de adaptação?</span>
                  </Link>
                </li>
              </ul>
              <div style={{ marginTop: 24 }}>
                <Link href="/matriculas-2026" className="btn btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>
                  Matrículas 2026
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  )
}
