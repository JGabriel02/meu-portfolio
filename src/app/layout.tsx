import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'Meu Portfólio',
  description: 'Portfólio de João Gabriel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
