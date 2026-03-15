import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../../components/ContactForm'

export const metadata: Metadata = {
  title: 'Saúde Mental na Escola: um tema que deve ser discutido o ano todo! – ENEC',
  description: 'A infância e adolescência são fases marcadas por muitas descobertas. Saiba como pais e escola podem cuidar da saúde mental dos jovens.',
}

const tags = ['Saúde Mental', 'Bem-estar', 'Desenvolvimento Infantil', 'Educação Infantil', 'ENEC', 'Ensino Fundamental', 'Escola em Natal']

export default function SaudeMentalPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: 8 }}>
            <Link href="/">Home</Link> › <Link href="/blog">Blog</Link> › Saúde Mental
          </p>
          <h1 style={{ fontSize: '1.6rem' }}>Saúde Mental na Escola: um tema que deve ser discutido o ano todo!</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="blog-post-layout">
            <article className="blog-post-content">

              <div className="post-meta">
                <span>21 de setembro de 2022</span>
                <span>•</span>
                <span>ENEC Natal</span>
                <span>•</span>
                <span className="post-category">Blog · Educação Infantil · Ensino Fundamental</span>
              </div>

              <div className="post-cover">
                <Image
                  src="/blog-saude.webp"
                  alt="Ilustração sobre saúde mental na escola"
                  width={800}
                  height={450}
                  style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                />
              </div>

              <div className="post-body">
                <p>A infância e adolescência são fases marcadas por muitas descobertas e mudanças. Muitas vezes, essas condições impactam negativamente a vida dos jovens, provocando conflitos internos e colaborando para o surgimento de transtornos mentais.</p>

                <p>Diante disso, é fundamental reconhecermos a importância dos cuidados com a saúde mental dos nossos jovens, uma temática que deve ser discutida, sempre que possível, dentro e fora do âmbito escolar.</p>

                <h2>Quais são as causas mais comuns de transtornos mentais em jovens?</h2>

                <p>Durante o período da infância e adolescência, os jovens estão aptos a aprender e descobrir sobre coisas, inclusive, a si mesmos. Esse momento pode ser bastante confuso, principalmente para aqueles que desejam ter mais autonomia, início de relações amorosas, conflitos internos, relações familiares e outros fatores muito presentes nesse período.</p>

                <p>Além disso, o uso massivo de telas, redes sociais, assim como da tecnologia no geral, podem contribuir para o desenvolvimento de pensamentos distorcidos, como a busca para tentar se encaixar em padrões e a constante comparação com outros usuários.</p>

                <h2>Como os pais e a comunidade escolar podem ajudar?</h2>

                <p>É muito importante que os pais, responsáveis e a comunidade escolar fiquem em alerta diante de comportamentos que possam sinalizar que o jovem esteja enfrentando algum problema.</p>

                <p>Entre os sintomas que indicam a presença de problemas relacionados à saúde mental, é possível destacar:</p>

                <ul className="post-list">
                  <li>O jovem se mantém afastado das pessoas;</li>
                  <li>Possui comportamentos agressivos;</li>
                  <li>Apresenta desânimo e falta de interesse na execução de tarefas;</li>
                  <li>Demonstra ansiedade ou tensão com frequência;</li>
                  <li>Sofre com insônia ou outros problemas com sono;</li>
                  <li>Apresenta um humor instável.</li>
                </ul>

                <p>Diante desses sinais, é importante buscar ter uma conversa empática, sincera e que transmita segurança ao jovem. Muitas vezes, palavras de consolo são suficientes para que ele se abra e aceite receber ajuda.</p>

                <p>Qualquer pessoa pode sofrer com alguma instabilidade e/ou problema emocional e, na fase da infância-adolescência, é comum que os jovens não consigam sempre lidar corretamente com o surgimento de tantas mudanças.</p>

                <p>Por isso, é importante que a família construa um espaço seguro e sem julgamentos para ouvir, ajudar e contribuir para que as crianças e adolescentes se sintam confortáveis para compartilhar suas dúvidas e sentimentos.</p>

                <p>Além disso, ao fazer parte de um ambiente escolar que direciona espaço e atenção às questões emocionais dos jovens, fica mais fácil reforçar esses valores e contribuir para um desenvolvimento seguro, completo e saudável das crianças e adolescentes.</p>

                <div className="post-highlight">
                  <p>Através de projetos e iniciativas que colaborem para a temática, caminhamos em direção à formação de jovens mais empáticos e que reconheçam as suas necessidades emocionais.</p>
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
                <Link href="/blog/adaptacao-escolar-infantil" className="post-nav-link">
                  ← Post anterior: Adaptação Escolar
                </Link>
                <Link href="/blog/teatro-no-ambiente-escolar" className="post-nav-link next">
                  Próximo post: Teatro na Escola →
                </Link>
              </div>
            </article>

            <aside className="blog-sidebar">
              <p className="sidebar-title">Outros Posts</p>
              <ul className="sidebar-posts">
                <li>
                  <Link href="/blog/teatro-no-ambiente-escolar">
                    <Image src="/blog-teatro.webp" alt="Teatro" width={60} height={60} style={{ objectFit: 'cover', borderRadius: 6 }} />
                    <span>Cultura e integração: influências do teatro no ambiente escolar</span>
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
