import type { Metadata } from 'next'
import Link from 'next/link'
import { Target, Lightbulb, ClipboardList, Users, Leaf, Trophy } from 'lucide-react'
import MVVTabs from '../components/MVVTabs'
import ContactForm from '../components/ContactForm'

export const metadata: Metadata = {
  title: 'Proposta Pedagógica – ENEC',
  description: 'Conheça a proposta pedagógica da ENEC: ensino inovador, formação integral e cidadã, alinhado à BNCC.',
}

const cards = [
  { Icon: Target, title: 'Missão', text: 'Oferecer um ensino inovador em um ambiente acolhedor que proporcione o desenvolvimento pessoal e intelectual, promovendo valores e competências para o mundo contemporâneo.' },
  { Icon: Lightbulb, title: 'Valores', text: 'Responsabilidade socioambiental, respeito às diferenças étnicas, socioeconômicas, culturais e religiosas, além de justiça diante das desigualdades.' },
  { Icon: ClipboardList, title: 'Alinhamento BNCC', text: 'Nossa proposta é fundamentada na aprendizagem ativa e significativa, alinhada à Base Nacional Comum Curricular, estimulando pensamento crítico e autonomia.' },
  { Icon: Users, title: 'Integração Família-Escola', text: 'Complementamos a ação familiar na formação integral dos estudantes, criando um ambiente acolhedor e de confiança entre escola e responsáveis.' },
  { Icon: Leaf, title: 'Desenvolvimento Integral', text: 'Promovemos o desenvolvimento cognitivo, afetivo, físico e sociocultural de forma integrada, respeitando o ritmo de cada aluno.' },
  { Icon: Trophy, title: 'Excelência', text: 'Equipe de professores capacitados e estrutura moderna para proporcionar uma educação de qualidade do Ensino Infantil ao Fundamental.' },
]

export default function PropostaPedagogicaPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <h1>Proposta Pedagógica</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="text-block" style={{ marginBottom: 48 }}>
            <p>A ENEC tem como finalidade ministrar a educação em concordância com os princípios e normas educacionais vigentes, visando o pleno desenvolvimento do educando e sua preparação para a cidadania no que diz respeito aos aspectos cognitivo, afetivo, físico e sociocultural, complementando a ação da família quanto à formação do cidadão crítico, reflexivo e consciente da sua importância na sociedade.</p>
          </div>
          <div className="cards-grid">
            {cards.map(({ Icon, title, text }) => (
              <div key={title} className="card">
                <div className="card-icon">
                  <Icon size={40} color="var(--primary)" />
                </div>
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MVVTabs />

      <section className="section" style={{ textAlign: 'center' }}>
        <Link href="/matriculas-2026" className="btn btn-primary btn-lg">
          Faça a Sua Matrícula
        </Link>
      </section>

      <ContactForm />
    </>
  )
}
