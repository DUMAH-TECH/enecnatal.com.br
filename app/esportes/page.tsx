import type { Metadata } from 'next'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faHandFist, faPersonDress } from '@fortawesome/free-solid-svg-icons'
import ContactForm from '../components/ContactForm'

export const metadata: Metadata = {
  title: 'Esportes – ENEC',
  description: 'Modalidades esportivas na ENEC: Futsal, Karatê e Ballet. Atividade física integrada à formação dos alunos em Natal/RN.',
}

const sports = [
  { icon: faFutbol, title: 'Futsal', text: 'O futebol, no Brasil, vai além do esporte. Esta paixão brasileira é símbolo de coletividade, técnica esportiva e interação social. Além disso, o futebol ajuda a desenvolver habilidades motoras, favorece a formação de autonomia e promove a disciplina.' },
  { icon: faHandFist, title: 'Karatê', text: 'O karatê é uma das artes marciais mais famosas por seu caráter altamente educativo e disciplinado. Alunos de karatê aprendem, desde as primeiras aulas, a importância da atenção, do respeito pelos oponentes e a formação de uma personalidade não-violenta.' },
  { icon: faPersonDress, title: 'Ballet', text: 'O balé pode ser enxergado como uma excelente ferramenta de aperfeiçoamento pessoal, por oferecer lições sobre postura — não apenas física, mas moralmente — e desenvolvimento intelectual, físico e social. A dança é um exercício físico que exige disciplina e consciência corporal, algo essencial na formação de crianças e adolescentes.' },
]

export default function EsportesPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <h1>Esportes</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 48px', fontSize: '1.05rem', color: '#666' }}>
            Na ENEC, valorizamos a prática de esportes pelos nossos alunos e futuros atletas. A atividade física é essencial para o bom funcionamento do corpo e da mente, por isso, é indicada para todos os que tiverem interesse e força de vontade! O esporte pode ser divertido, mas também ensina sobre disciplina, trabalho em equipe e muito mais.
          </p>
          <div className="sports-list">
            {sports.map(({ icon, title, text }) => (
              <div key={title} className="sport-item">
                <div className="sport-icon">
                  <FontAwesomeIcon icon={icon} style={{ width: 40, height: 40, color: 'var(--primary)' }} />
                </div>
                <div>
                  <h2 className="sport-title">{title}</h2>
                  <p className="sport-text">{text}</p>
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
