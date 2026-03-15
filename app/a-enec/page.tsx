import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Target, Lightbulb, ClipboardList, Users, Leaf, Trophy, School, BookOpen, Dumbbell, UtensilsCrossed, Monitor } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faHandFist, faPersonDress, faLandmark, faChalkboardUser, faGraduationCap, faBuilding, faDumbbell } from '@fortawesome/free-solid-svg-icons'
import ContactForm from '../components/ContactForm'
import { IllustrationInfantil, IllustrationFund1, IllustrationFund2 } from '../components/LevelIllustrations'

export const metadata: Metadata = {
  title: 'A ENEC – Escola Natalense de Educação e Cultura',
  description: 'Conheça a ENEC: nossa história, proposta pedagógica, níveis de ensino, estrutura e esportes.',
}

const mvvCards = [
  { Icon: Target,       title: 'Missão',               bg: '#eef1f8', text: 'Oferecer um ensino inovador em um ambiente acolhedor que proporcione o desenvolvimento pessoal e intelectual, promovendo valores e competências para o mundo contemporâneo.' },
  { Icon: Lightbulb,    title: 'Valores',              bg: '#fdf0ef', text: 'Responsabilidade socioambiental, respeito às diferenças étnicas, socioeconômicas, culturais e religiosas, e justiça diante das desigualdades.' },
  { Icon: ClipboardList,title: 'Alinhamento BNCC',     bg: '#eef1f8', text: 'Proposta fundamentada em aprendizagem ativa e significativa, alinhada à Base Nacional Comum Curricular, estimulando pensamento crítico e autonomia.' },
  { Icon: Users,        title: 'Família & Escola',     bg: '#fdf0ef', text: 'Complementamos a ação familiar na formação integral dos estudantes, criando um ambiente acolhedor e de confiança entre escola e responsáveis.' },
  { Icon: Leaf,         title: 'Desenvolvimento',      bg: '#eef1f8', text: 'Promovemos o desenvolvimento cognitivo, afetivo, físico e sociocultural de forma integrada, respeitando o ritmo de cada aluno.' },
  { Icon: Trophy,       title: 'Excelência',           bg: '#fdf0ef', text: 'Professores capacitados e estrutura moderna para proporcionar educação de qualidade do Ensino Infantil ao Fundamental.' },
]

const levels = [
  { Illustration: IllustrationInfantil, badge: 'Níveis IV e V',   color: '#eef1f8', accent: '#1a2a5e', title: 'Educação Infantil',    subtitle: 'A base de tudo', text: 'A primeira etapa educacional é uma das mais importantes para a formação das crianças. A escola é um espaço de socialização em um ambiente saudável, educativo e repleto de diversidade. Muito além do "brincar", as técnicas pedagógicas estimulam a cultura, o respeito ao outro, o hábito da leitura e o desenvolvimento cognitivo.' },
  { Illustration: IllustrationFund1,    badge: 'Do 1º ao 5º ano', color: '#fdf0ef', accent: '#c0392b', title: 'Ensino Fundamental I',  subtitle: 'Aprendizagem lúdica e interativa', text: 'É no Ensino Fundamental I que ocorre uma etapa essencial para a formação do indivíduo. Aprender a ler, interpretar, escrever, fazer operações matemáticas e discutir cidadania — tudo de forma lúdica que promove a interatividade e o desenvolvimento pessoal.' },
  { Illustration: IllustrationFund2,    badge: 'Do 6º ao 9º ano', color: '#eef1f8', accent: '#1a2a5e', title: 'Ensino Fundamental II', subtitle: 'Autonomia e senso crítico', text: 'O Ensino Fundamental II apresenta ao jovem conceitos mais complexos sobre o mundo. Esta fase promove a autonomia, o senso crítico, a formação de repertório cultural e as discussões sobre a sociedade — base essencial para os anos seguintes.' },
]

const estrutura = [
  { Icon: School,          bg: '#eef1f8', title: 'Salas de Aula',       text: 'Amplas e climatizadas, com recursos tecnológicos modernos e mobiliário adequado a cada faixa etária.' },
  { Icon: BookOpen,        bg: '#fdf0ef', title: 'Biblioteca',           text: 'Acervo diversificado para todas as idades, estimulando leitura, pesquisa e desenvolvimento cultural.' },
  { Icon: Dumbbell,        bg: '#eef1f8', title: 'Quadra Esportiva',     text: 'Espaço completo para futsal, karatê, ballet e outras atividades, promovendo saúde e trabalho em equipe.' },
  { Icon: UtensilsCrossed, bg: '#fdf0ef', title: 'Cantina',              text: 'Alimentação saudável e balanceada, preparada com cuidado para o bem-estar dos alunos.' },
  { Icon: Monitor,         bg: '#eef1f8', title: 'Lab. de Informática',  text: 'Equipado com computadores modernos para atividades educacionais e desenvolvimento de habilidades digitais.' },
]

const sports = [
  { icon: faFutbol,      bg: '#eef1f8', title: 'Futsal',  text: 'Símbolo de coletividade e técnica, o futebol desenvolve habilidades motoras, favorece a formação de autonomia e promove disciplina e interação social.' },
  { icon: faHandFist,    bg: '#fdf0ef', title: 'Karatê',  text: 'Arte marcial com caráter altamente educativo. Os alunos aprendem atenção, respeito pelos outros e formação de personalidade não-violenta desde as primeiras aulas.' },
  { icon: faPersonDress, bg: '#eef1f8', title: 'Ballet',  text: 'Excelente ferramenta de aperfeiçoamento pessoal com lições sobre postura física e moral, disciplina e consciência corporal, essenciais na formação de crianças.' },
]

export default function AEnecPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image src="/logo-branca.png" alt="ENEC" width={180} height={68} style={{ objectFit: 'contain', marginBottom: 12 }} />
          <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>Nossa história, proposta, estrutura e muito mais</p>
        </div>
      </div>

      {/* Âncoras de navegação */}
      <div className="aenec-anchors">
        <div className="aenec-anchors-list">
          <a href="#historia"><FontAwesomeIcon icon={faLandmark} style={{ width: 14, height: 14 }} /> Nossa História</a>
          <a href="#proposta"><FontAwesomeIcon icon={faChalkboardUser} style={{ width: 14, height: 14 }} /> Proposta Pedagógica</a>
          <a href="#niveis"><FontAwesomeIcon icon={faGraduationCap} style={{ width: 14, height: 14 }} /> Níveis de Ensino</a>
          <a href="#estrutura"><FontAwesomeIcon icon={faBuilding} style={{ width: 14, height: 14 }} /> Estrutura</a>
          <a href="#esportes"><FontAwesomeIcon icon={faDumbbell} style={{ width: 14, height: 14 }} /> Esportes</a>
        </div>
      </div>

      {/* ── NOSSA HISTÓRIA ── */}
      <section className="section aenec-section" id="historia">
        <div className="container">
          <div className="aenec-section-label">Nossa História</div>
          <div className="historia-layout">
            <div className="historia-img-wrap">
              <div className="historia-img-badge">Desde 1994</div>
              <Image src="/nossa-historia.png" alt="História da ENEC" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 480px" />
              <div className="historia-img-overlay" />
            </div>
            <div className="historia-text">
              <span className="historia-tag">Nossa Trajetória</span>
              <h2 className="historia-title">33 anos transformando vidas por meio da educação</h2>
              <div className="historia-timeline">
                <div className="historia-tl-item">
                  <div className="historia-tl-dot" />
                  <div>
                    <span className="historia-tl-year">1994</span>
                    <p>A ENEC começou sua história em fevereiro de 1994, oferecendo Educação Infantil sob o nome de <strong>Jardim Escola Clube da Criança</strong>.</p>
                  </div>
                </div>
                <div className="historia-tl-item">
                  <div className="historia-tl-dot" />
                  <div>
                    <span className="historia-tl-year">Expansão</span>
                    <p>A educadora <strong>Maria Vera Lúcia Trajano de Oliveira</strong> ampliou a estrutura e implantou o Ensino Fundamental I e II.</p>
                  </div>
                </div>
                <div className="historia-tl-item">
                  <div className="historia-tl-dot historia-tl-dot-accent" />
                  <div>
                    <span className="historia-tl-year">Hoje</span>
                    <p>Estrutura <strong>diferenciada e acolhedora</strong>, com inovações pedagógicas e professores capacitados para formação integral e eficaz.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="aenec-divider" />

      {/* ── PROPOSTA PEDAGÓGICA ── */}
      <section className="section aenec-section" id="proposta">
        <div className="container">
          <div className="aenec-section-label">Proposta Pedagógica</div>
          <h2 className="section-title">Nossa Missão e Valores</h2>
          <p style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 40px', color: '#666', fontSize: '1rem' }}>
            A ENEC visa o pleno desenvolvimento do educando e sua preparação para a cidadania, complementando a ação da família na formação do cidadão crítico, reflexivo e consciente.
          </p>
          <div className="aenec-mvv-grid">
            {mvvCards.map(({ Icon, title, bg, text }) => (
              <div key={title} className="aenec-mvv-card" style={{ background: bg }}>
                <div className="aenec-mvv-icon"><Icon size={28} color="var(--primary)" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="aenec-divider" />

      {/* ── NÍVEIS DE ENSINO ── */}
      <section className="section aenec-section" id="niveis">
        <div className="container">
          <div className="aenec-section-label">Níveis de Ensino</div>
          <h2 className="section-title">Do Infantil ao Fundamental</h2>
          <div className="aenec-levels-grid">
            {levels.map(({ Illustration, badge, title, subtitle, color, accent, text }) => (
              <div key={title} className="aenec-level-card" style={{ background: color, '--card-accent': accent } as React.CSSProperties}>
                <div className="aenec-level-top">
                  <div className="aenec-level-illus"><Illustration /></div>
                  <span className="aenec-level-badge" style={{ background: accent }}>{badge}</span>
                </div>
                <h3 style={{ color: accent }}>{title}</h3>
                <p className="aenec-level-sub">{subtitle}</p>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="aenec-divider" />

      {/* ── ESTRUTURA ── */}
      <section className="section aenec-section" id="estrutura">
        <div className="container">
          <div className="aenec-section-label">Estrutura</div>
          <h2 className="section-title">Nosso Espaço</h2>
          <p style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto 40px', color: '#666' }}>
            Valorizamos o ambiente escolar como parte fundamental do processo educativo. Nossas instalações foram pensadas para oferecer conforto, segurança e estímulo ao aprendizado.
          </p>
          <div className="aenec-estrutura-grid">
            {estrutura.map(({ Icon, bg, title, text }) => (
              <div key={title} className="aenec-estrutura-card">
                <div className="aenec-estrutura-icon" style={{ background: bg }}>
                  <Icon size={30} color="var(--primary)" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="aenec-divider" />

      {/* ── ESPORTES ── */}
      <section className="section aenec-section" id="esportes">
        <div className="container">
          <div className="aenec-section-label">Esportes</div>
          <h2 className="section-title">Atividades Esportivas</h2>
          <p style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto 40px', color: '#666' }}>
            Valorizamos a prática de esportes como parte essencial da formação integral. O esporte ensina disciplina, trabalho em equipe e muito mais.
          </p>
          <div className="aenec-sports-grid">
            {sports.map(({ icon, bg, title, text }) => (
              <div key={title} className="aenec-sport-card" style={{ background: bg }}>
                <div className="aenec-sport-icon">
                  <FontAwesomeIcon icon={icon} style={{ width: 36, height: 36, color: 'var(--primary)' }} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-primary" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: 12 }}>Faça parte da Família ENEC em 2026!</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 28 }}>Garanta já a vaga do seu filho em uma das melhores escolas de Natal.</p>
          <Link href="/matriculas-2026" className="btn btn-accent btn-lg">Faça a Sua Matrícula</Link>
        </div>
      </section>

      <ContactForm />
    </>
  )
}
