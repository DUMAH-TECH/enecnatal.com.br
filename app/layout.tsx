import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Header from './components/Header'
import Footer from './components/Footer'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })

export const metadata: Metadata = {
  title: 'ENEC – Escola Natalense de Educação e Cultura',
  description: 'Escola Natalense de Educação e Cultura em Natal/RN. Educação Infantil e Ensino Fundamental com qualidade, estrutura e carinho. Matrículas 2026 abertas.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
