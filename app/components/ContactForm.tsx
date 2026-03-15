'use client'
import { useState } from 'react'
import { MapPin, Phone, Smartphone, Mail, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', idadeFilho: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact-section" id="contato">
      <div className="container">
        <h2 className="section-title">Contato</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Escola Natalense de Educação e Cultura</h3>
            <p><MapPin size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle', color: 'var(--secondary)' }} />R. Santa Helena, 695 – Felipe Camarão, Natal – RN, 59072-475</p>
            <p><Phone size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle', color: 'var(--secondary)' }} />(84) 3205-5792</p>
            <p><Smartphone size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle', color: 'var(--secondary)' }} />(84) 99405-3023</p>
            <p><Mail size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle', color: 'var(--secondary)' }} />enec.enec@yahoo.com.br</p>
            <div style={{ marginTop: 20, borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}>
              <iframe
                src="https://maps.google.com/maps?q=R.+Santa+Helena+695+Felipe+Camarão+Natal+RN+59072-475&output=embed&z=16"
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização ENEC"
              />
            </div>
          </div>

          <div>
            {sent ? (
              <div className="success-msg" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <CheckCircle size={20} color="#155724" /> Mensagem enviada com sucesso! Entraremos em contato em breve.
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
                  <input className="form-control" type="text" placeholder="Idade do filho:" value={form.idadeFilho} onChange={e => setForm({ ...form, idadeFilho: e.target.value })} />
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Mensagem:" value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
