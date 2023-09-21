import { config } from '@/lib/utils/helpers'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/modules/common/components/Container'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const appName = config<string>('app.name')
  const appUrl = config<string>('app.url')
  const description = `En ${appName} encuentra abono orgánico de calidad. Humus y compost que mejoran el suelo y promueven un crecimiento saludable de tus cultivos. ¡Potencia tu agricultura de forma sostenible!`

  return {
    metadataBase: new URL(appUrl),
    title: {
      default: appName,
      template: `%s | ${appName}`,
    },
    description: description,
    openGraph: {
      title: {
        default: appName,
        template: `%s | ${appName}`,
      },
      description: description,
      type: 'website',
      url: '/',
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const appLocale = config<string>('app.locale')
  const appName = config('app.name')

  return (
    <html lang={appLocale} className={inter.className}>
      <body className="flex min-h-screen flex-col bg-white text-zinc-800">
        <Container as="header" className="p-4">
          <section className="flex items-center justify-between">
            <Link
              href="/"
              className="flex flex-col items-center justify-center"
            >
              <span className="text-3xl font-extrabold uppercase">
                {appName}
              </span>
              <span className="text-sm font-medium uppercase">
                Abono orgánico
              </span>
            </Link>
            <nav className="flex gap-4">
              <Link href="/" className="text-base">
                Inicio
              </Link>
              <Link href="/" className="text-base">
                Empresa
              </Link>
              <Link href="/" className="text-base">
                Productos
              </Link>
              <Link href="/" className="text-base">
                Contacto
              </Link>
            </nav>
          </section>
        </Container>
        <main className="grow">{children}</main>
      </body>
    </html>
  )
}
