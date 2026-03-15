import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, BookOpen, GraduationCap } from 'lucide-react'
import ContactForm from '../components/ContactForm'

export const metadata: Metadata = {
  title: 'Níveis de Ensino – ENEC',
  description: 'Educação Infantil (Níveis IV e V) e Ensino Fundamental I (1º ao 5º ano) e II (6º ao 9º ano) na ENEC em Natal/RN.',
}

const levels = [
  {
    Icon: Star, badge: 'Níveis IV e V', title: 'Educação Infantil', subtitle: 'Para crianças a partir de 3 anos',
    text: 'A primeira etapa educacional é uma das mais importantes para a formação das crianças. A escola é um espaço de socialização em um ambiente saudável, educativo e repleto de diversidade. Muito além do "brincar", as técnicas pedagógicas estimulam a cultura, o respeito ao outro, o hábito da leitura e desenvolvimento cognitivo e intelectual.'
  },
  {
    Icon: BookOpen, badge: 'Do 1º ao 5º ano', title: 'Ensino Fundamental I', subtitle: 'Aprendizagem lúdica e interativa',
    text: 'É no Ensino Fundamental I que ocorre uma etapa essencial para a formação do indivíduo, sua relação com o mundo e suas habilidades. Aprender a ler, interpretar, escrever, fazer operações matemáticas, discussões sobre cidadania... Tudo isso é apresentado de forma lúdica que promove a interatividade e o desenvolvimento pessoal.'
  },
  {
    Icon: GraduationCap, badge: 'Do 6º ao 9º ano', title: 'Ensino Fundamental II', subtitle: 'Aprofundamento e autonomia',
    text: 'O Ensino Fundamental II é um período em que o jovem é apresentado a conceitos mais complexos a respeito do mundo e do conhecimento. Esta é uma fase de transição educacional que promove a autonomia, o senso crítico, a formação de repertório cultural e as discussões sobre a sociedade. Este aprofundamento é necessário para que seja realizada uma boa base educacional que influenciará positivamente nos anos seguintes.'
  },
]

export default function NiveisDeEnsinoPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <h1>Níveis de Ensino</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="levels-list">
            {levels.map(({ Icon, badge, title, subtitle, text }) => (
              <div key={title} className="level-item">
                <div className="level-item-icon">
                  <Icon size={40} color="var(--primary)" />
                </div>
                <div>
                  <span className="level-item-badge">{badge}</span>
                  <h2 className="level-item-title">{title}</h2>
                  <p className="level-item-subtitle">{subtitle}</p>
                  <p className="level-item-text">{text}</p>
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
