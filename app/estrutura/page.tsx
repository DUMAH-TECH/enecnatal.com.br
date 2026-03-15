import type { Metadata } from 'next'
import Link from 'next/link'
import { School, BookOpen, Dumbbell, UtensilsCrossed, Monitor } from 'lucide-react'
import ContactForm from '../components/ContactForm'

export const metadata: Metadata = {
  title: 'Estrutura – ENEC',
  description: 'Conheça a estrutura física da ENEC: salas climatizadas, quadra esportiva, biblioteca, cantina e laboratório de informática em Natal/RN.',
}

const items = [
  { Icon: School, title: 'Salas de Aula', text: 'Salas amplas e climatizadas, projetadas para proporcionar um ambiente confortável e propício ao aprendizado, com recursos tecnológicos modernos e mobiliário adequado a cada faixa etária.' },
  { Icon: BookOpen, title: 'Biblioteca', text: 'Acervo literário diversificado com obras para todas as idades, estimulando o hábito da leitura, a pesquisa e o desenvolvimento cultural e intelectual dos nossos alunos.' },
  { Icon: Dumbbell, title: 'Quadra Esportiva', text: 'Espaço esportivo completo para a prática de futsal, karatê, ballet e outras atividades físicas, promovendo saúde, disciplina, trabalho em equipe e bem-estar.' },
  { Icon: UtensilsCrossed, title: 'Cantina', text: 'Alimentação saudável e balanceada, preparada com cuidado para garantir o bem-estar e a disposição dos alunos ao longo do dia escolar.' },
  { Icon: Monitor, title: 'Sala de Informática', text: 'Laboratório de informática equipado com computadores modernos para atividades educacionais, pesquisas e desenvolvimento de habilidades digitais essenciais para o mundo contemporâneo.' },
]

export default function EstruturaPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <h1>Estrutura</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 48px', fontSize: '1.05rem', color: '#666' }}>
            Na ENEC, valorizamos o ambiente escolar como parte fundamental do processo educativo. Nossas instalações foram pensadas para oferecer conforto, segurança e estímulo ao aprendizado em todas as suas dimensões.
          </p>
          <div className="feature-list">
            {items.map(({ Icon, title, text }) => (
              <div key={title} className="feature-item">
                <div className="feature-icon">
                  <Icon size={36} color="var(--primary)" />
                </div>
                <div>
                  <h3 className="feature-title">{title}</h3>
                  <p className="feature-text">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <Link href="/matriculas-2026" className="btn btn-primary btn-lg">
          Faça a Sua Matrícula
        </Link>
      </section>

      <ContactForm />
    </>
  )
}
