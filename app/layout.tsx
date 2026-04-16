import './globals.css'

export const metadata = {
  title: 'Cristian Bran Arriaga | Portafolio',
  description: 'Especialista Big Data e BI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-apple-black">{children}</body>
    </html>
  )
}
