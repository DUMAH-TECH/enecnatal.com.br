'use client'
import { useState } from 'react'
import { CheckCircle, FileText, AlertCircle, Send } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCamera, faIdCard, faFileLines, faEnvelope, faFileContract, faBookOpen, faMoneyBillWave,
  faCircleInfo, faPenToSquare, faPhone, faCheckCircle, faUserGraduate, faClipboardList,
} from '@fortawesome/free-solid-svg-icons'

const docs = [
  { icon: faCamera,           text: '3 fotos 3×4 (recentes)' },
  { icon: faIdCard,           text: 'Certidão de Nascimento, RG, CPF e cartão do SUS do aluno' },
  { icon: faFileLines,        text: 'RG, CPF e comprovante de residência (COSERN ou CAERN) do responsável' },
  { icon: faEnvelope,         text: 'E-mail para contato' },
  { icon: faFileContract,     text: 'Declaração de quitação da escola de origem' },
  { icon: faBookOpen,         text: 'Histórico escolar ou declaração de transferência do aluno' },
  { icon: faMoneyBillWave,    text: 'Taxa de material (Nível IV ao 5º ano): R$ 120,00 — paga no ato da matrícula' },
]

const obs = [
  { icon: faUserGraduate, text: 'Candidatos às vagas do 2º ao 9º ano deverão realizar uma avaliação diagnóstica antes da matrícula.' },
  { icon: faCircleInfo,   text: 'Para a inscrição é necessária uma taxa de R$ 3,00 e declaração da escola de origem informando a série que o aluno irá cursar em 2026.' },
]

const steps = [
  { icon: faPenToSquare,    n: '1', title: 'Preencha o formulário', desc: 'Informe os dados abaixo para demonstrar interesse.' },
  { icon: faPhone,          n: '2', title: 'Aguarde o contato',     desc: 'Nossa equipe entrará em contato para agendar a visita.' },
  { icon: faClipboardList,  n: '3', title: 'Apresente os documentos', desc: 'Traga a documentação necessária na data agendada.' },
  { icon: faCheckCircle,    n: '4', title: 'Matrícula confirmada!', desc: 'Bem-vindo(a) à Família ENEC!' },
]

export default function MatriculasPage() {
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', idadeFilho: '', ensino: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* Hero */}
      <div className="mat-hero">
        <div className="mat-hero-bg" />
        <div className="container mat-hero-inner">
          <div className="mat-hero-tag">📝 Matrículas Abertas</div>
          <h1 className="mat-hero-title">Faça parte da<br /><span>#FamíliaENEC</span></h1>
          <p className="mat-hero-sub">Garanta já a vaga do seu filho para 2026 em uma das melhores escolas de Natal!</p>
          <div className="mat-hero-badges">
            <span>🌱 Educação Infantil</span>
            <span>📚 Fundamental I</span>
            <span>🎓 Fundamental II</span>
          </div>
        </div>
      </div>

      {/* Passo a passo */}
      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <h2 className="section-title">Como se matricular?</h2>
          <div className="mat-steps">
            {steps.map(({ icon, n, title, desc }) => (
              <div key={n} className="mat-step">
                <div className="mat-step-num">{n}</div>
                <div className="mat-step-icon"><FontAwesomeIcon icon={icon} style={{ width: 24, height: 24 }} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Docs + Obs + Form */}
      <section className="section">
        <div className="container">
          <div className="mat-main-grid">

            {/* Coluna esquerda */}
            <div className="mat-info-col">

              {/* Documentos */}
              <div className="mat-card">
                <div className="mat-card-header" style={{ background: '#eef1f8' }}>
                  <FileText size={22} color="var(--primary)" />
                  <h2>Documentos Necessários</h2>
                </div>
                <ul className="mat-doc-list">
                  {docs.map(({ icon, text }, i) => (
                    <li key={i}>
                      <div className="mat-doc-icon"><FontAwesomeIcon icon={icon} style={{ width: 16, height: 16, color: 'var(--primary)' }} /></div>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Observações */}
              <div className="mat-card mat-obs-card">
                <div className="mat-card-header" style={{ background: '#fdf0ef' }}>
                  <AlertCircle size={22} color="var(--secondary)" />
                  <h2 style={{ color: 'var(--secondary)' }}>Observações</h2>
                </div>
                <ul className="mat-doc-list">
                  {obs.map(({ icon, text }, i) => (
                    <li key={i}>
                      <div className="mat-doc-icon"><FontAwesomeIcon icon={icon} style={{ width: 16, height: 16, color: 'var(--secondary)' }} /></div>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Formulário */}
            <div className="mat-form-col">
              <div className="mat-card mat-form-card">
                <div className="mat-card-header" style={{ background: 'var(--primary)' }}>
                  <Send size={22} color="white" />
                  <h2 style={{ color: 'white' }}>Solicite sua Matrícula</h2>
                </div>
                {sent ? (
                  <div className="mat-success">
                    <CheckCircle size={48} color="#27ae60" />
                    <h3>Solicitação enviada!</h3>
                    <p>Nossa equipe entrará em contato em breve para agendar sua visita. Bem-vindo(a) à Família ENEC! 🎉</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mat-form">
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Nome completo do responsável" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} required />
                    </div>
                    <div className="mat-form-row">
                      <div className="form-group">
                        <input className="form-control" type="tel" placeholder="Telefone / WhatsApp" value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} required />
                      </div>
                      <div className="form-group">
                        <input className="form-control" type="text" placeholder="Idade do filho(a)" value={form.idadeFilho} onChange={e => setForm({ ...form, idadeFilho: e.target.value })} />
                      </div>
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="email" placeholder="E-mail" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                    </div>
                    <div className="form-group">
                      <select className="form-control" value={form.ensino} onChange={e => setForm({ ...form, ensino: e.target.value })} required>
                        <option value="">Selecione o nível de ensino</option>
                        <option value="INFANTIL">🌱 Educação Infantil</option>
                        <option value="FUNDAMENTAL I">📚 Ensino Fundamental I</option>
                        <option value="FUNDAMENTAL II">🎓 Ensino Fundamental II</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" placeholder="Mensagem (opcional)" value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} rows={3} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1rem', padding: '14px' }}>
                      Enviar Solicitação
                    </button>
                    <p style={{ fontSize: '0.78rem', color: '#aaa', textAlign: 'center', marginTop: 10 }}>
                      Também podemos atender via WhatsApp: <a href="https://wa.me/5584994053023" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)' }}>(84) 99405-3023</a>
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
