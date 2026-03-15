'use client'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

export default function TrabalheConoscoPage() {
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <h1>Trabalhe Conosco</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="enrollment-form">
            <h2>Trabalhe Conosco</h2>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: 24, fontSize: '0.95rem' }}>
              Quer fazer parte da equipe ENEC? Preencha o formulário abaixo e envie seu currículo.
            </p>

            {sent ? (
              <div className="success-msg" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <CheckCircle size={20} color="#155724" /> Currículo enviado! Entraremos em contato se houver vagas compatíveis com o seu perfil.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Nome:" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} required />
                </div>
                <div className="form-group">
                  <input className="form-control" type="tel" placeholder="Telefone" value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} required />
                </div>
                <div className="form-group">
                  <input className="form-control" type="email" placeholder="E-mail:" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div className="form-group">
                  <label style={{ display: 'block', marginBottom: 8, fontSize: '0.9rem', color: '#666' }}>
                    Currículo (PDF, DOC ou DOCX)
                  </label>
                  <input className="form-control" type="file" accept=".pdf,.doc,.docx" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Mensagem (opcional):" value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Enviar Currículo
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
