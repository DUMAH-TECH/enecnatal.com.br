import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../../components/ContactForm'

export const metadata: Metadata = {
  title: 'Escola nova: como auxiliar a criança no processo de adaptação? – ENEC',
  description: 'A adaptação escolar é um processo delicado e muito importante para as crianças. Veja cinco estratégias para tornar essa transição mais tranquila.',
}

const tags = ['Adaptação escolar', 'Aprendizado', 'Criança', 'Educação Infantil', 'ENEC', 'Ensino Fundamental', 'Escola em Natal']

export default function AdaptacaoEscolarPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: 8 }}>
            <Link href="/">Home</Link> › <Link href="/blog">Blog</Link> › Adaptação Escolar
          </p>
          <h1 style={{ fontSize: '1.6rem' }}>Escola nova: como auxiliar a criança no processo de adaptação?</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="blog-post-layout">
            <article className="blog-post-content">

              <div className="post-meta">
                <span>28 de agosto de 2022</span>
                <span>•</span>
                <span>ENEC Natal</span>
                <span>•</span>
                <span className="post-category">Blog · Educação Infantil</span>
              </div>

              <div className="post-cover">
                <Image
                  src="/blog-adaptacao.webp"
                  alt="Crianças com mochilas na escola"
                  width={800}
                  height={450}
                  style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                />
              </div>

              <div className="post-body">
                <p>A adaptação escolar é um processo delicado e muito importante para as crianças, marcando o início de uma jornada estudantil fundamental para o seu desenvolvimento e formação. Esse processo não se aplica apenas à primeira matrícula — também acontece quando a criança muda de escola.</p>

                <p>Sentir apreensão diante de situações novas é natural, mas há formas de conduzir essa transição sem estresse desnecessário. Veja cinco estratégias:</p>

                <div className="post-steps">
                  <div className="post-step">
                    <div className="step-number">1</div>
                    <div>
                      <h3>Familiarize a criança com o ambiente escolar</h3>
                      <p>Antes das aulas começarem, visite a nova escola com a criança. Conheça a equipe pedagógica, explore os espaços e fale positivamente sobre a experiência, ajudando-a a se sentir mais segura e determinada.</p>
                    </div>
                  </div>
                  <div className="post-step">
                    <div className="step-number">2</div>
                    <div>
                      <h3>Use linguagem afirmativa</h3>
                      <p>Tanto nas visitas quanto nas conversas do dia a dia, enfatize os aspectos positivos: <em>"será uma experiência incrível, você poderá fazer novos amigos e todos os dias irá aprender muitas coisas novas!"</em> Esse tipo de diálogo impacta substancialmente a confiança da criança.</p>
                    </div>
                  </div>
                  <div className="post-step">
                    <div className="step-number">3</div>
                    <div>
                      <h3>Pratique paciência e gentileza</h3>
                      <p>A resistência inicial é comum. Respeitar o tempo único de adaptação de cada criança, mantendo-se gentil, é essencial.</p>
                    </div>
                  </div>
                  <div className="post-step">
                    <div className="step-number">4</div>
                    <div>
                      <h3>Mantenha o envolvimento constante</h3>
                      <p>Os pais devem continuar motivando seus filhos, perguntando sobre as aulas e as novas amizades, participando ativamente da jornada de adaptação.</p>
                    </div>
                  </div>
                  <div className="post-step">
                    <div className="step-number">5</div>
                    <div>
                      <h3>Monitore as dinâmicas sociais</h3>
                      <p>Por meio de conversas, verifique se o ambiente escolar é seguro, empático e humanizado — um lugar onde a criança se sinta autenticamente ela mesma.</p>
                    </div>
                  </div>
                </div>

                <div className="post-highlight">
                  <p>Na ENEC, contamos com o apoio de psicólogos e pedagogos para garantir que os alunos vivenciem as suas experiências escolares com segurança, conforto e alegria.</p>
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
                <Link href="/blog/saude-mental-na-escola" className="post-nav-link next">
                  Próximo post: Saúde Mental na Escola →
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
                  <Link href="/blog/teatro-no-ambiente-escolar">
                    <Image src="/blog-teatro.webp" alt="Teatro" width={60} height={60} style={{ objectFit: 'cover', borderRadius: 6 }} />
                    <span>Cultura e integração: influências do teatro no ambiente escolar</span>
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
