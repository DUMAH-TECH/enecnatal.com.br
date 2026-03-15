import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog – ENEC',
  description: 'Artigos e dicas sobre educação, saúde mental, desenvolvimento infantil e muito mais no blog da ENEC em Natal/RN.',
}

const posts = [
  { id: 'teatro', img: '/blog-teatro.webp', slug: '/blog/teatro-no-ambiente-escolar', category: 'Blog', title: 'Cultura e integração: influências do teatro no ambiente escolar', excerpt: 'O teatro é uma das artes mais antigas da história da humanidade, surgiu por volta do século IV a.C. - desde então é uma expressão artística de grande relevância social e cultural. O trabalho com a arte teatral em sala de aula desenvolve diversas habilidades nos estudantes.', date: 'outubro 11, 2022', tags: ['Aprendizado', 'Educação de qualidade', 'Educação Infantil', 'ENEC'] },
  { id: 'saude', img: '/blog-saude.webp', slug: '/blog/saude-mental-na-escola', category: 'Blog', title: 'Saúde Mental na Escola: um tema que deve ser discutido o ano todo!', excerpt: 'A infância e adolescência são fases marcadas por muitas descobertas e mudanças. Muitas vezes, essas condições impactam negativamente a vida dos jovens, provocando conflitos internos que precisam de atenção.', date: 'setembro 21, 2022', tags: ['Bem-estar', 'Desenvolvimento Infantil', 'Saúde Mental'] },
  { id: 'adaptacao', img: '/blog-adaptacao.webp', slug: '/blog/adaptacao-escolar-infantil', category: 'Blog', title: 'Escola nova: como auxiliar a criança no processo de adaptação?', excerpt: 'A adaptação escolar é um processo delicado e muito importante para o desenvolvimento emocional e social das crianças, especialmente nas primeiras experiências escolares com um novo ambiente.', date: 'agosto 28, 2022', tags: ['Adaptação escolar', 'Criança', 'Educação Infantil'] },
]

const categories = [
  { label: 'Blog', slug: '/blog/categoria/blog' },
  { label: 'Comunicados', slug: '/blog/categoria/comunicados' },
  { label: 'Educação Infantil', slug: '/blog/categoria/educacao-infantil' },
  { label: 'Ensino Fundamental', slug: '/blog/categoria/ensino-fundamental' },
  { label: 'Pedagógico', slug: '/blog/categoria/pedagogico' },
]

export default function BlogPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <h1>Blog</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="blog-layout">
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {posts.map(({ id, img, slug, category, title, excerpt, date, tags }) => (
                  <Link key={id} href={slug} className="blog-card" style={{ display: 'grid', gridTemplateColumns: '200px 1fr' }}>
                    <div className="blog-card-image" style={{ position: 'relative', height: 'auto', minHeight: 160, padding: 0 }}>
                      <Image src={img} alt={title} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="blog-card-body">
                      <p className="blog-card-category">{category}</p>
                      <h2 className="blog-card-title" style={{ fontSize: '1.1rem' }}>{title}</h2>
                      <p className="blog-card-excerpt">{excerpt}</p>
                      <p className="blog-card-date">{date}</p>
                      <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {tags.map(tag => (
                          <span key={tag} style={{ background: '#f0f0f0', padding: '3px 10px', borderRadius: 3, fontSize: '0.8rem', color: '#666' }}>{tag}</span>
                        ))}
                      </div>
                      <p style={{ marginTop: 12, color: 'var(--secondary)', fontWeight: 700, fontSize: '0.875rem' }}>Leia Mais →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <aside className="blog-sidebar">
              <p className="sidebar-title">Buscar</p>
              <div className="sidebar-search">
                <input type="text" placeholder="Pesquisar..." />
                <button className="btn btn-primary" style={{ padding: '10px 14px' }}>
                  <Search size={16} />
                </button>
              </div>

              <p className="sidebar-title">Categorias</p>
              <ul className="sidebar-cats">
                {categories.map(cat => (
                  <li key={cat.slug}>
                    <Link href={cat.slug}>{cat.label}</Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
