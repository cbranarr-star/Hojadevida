import './globals.css'

export const metadata = {
  title: 'Cristian Bran Arriaga | Portfolio',
  description: 'Especialista en Big Data e BI e Ingeniero en Telecomunicaciones',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-[#000000] text-white">
        {children}
      </body>
    </html>
  )
}
