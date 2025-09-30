import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'Meu Portfólio',
  description: 'Portfólio de João Gabriel',
  icons: {
    icon: "/gengar.gif", // Caminho para o favicon
    shortcut: "/gengar.gif",
    apple: "/gengar.gif", // Opcional: para dispositivos Apple
  },
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
