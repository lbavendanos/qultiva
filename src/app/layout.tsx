import { config } from '@/lib/utils/helpers'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import RootNav from './components/root-nav'
import RootLogo from './components/root-logo'
import RootNavToggler from './components/root-nav-toggler'
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

  return (
    <html lang={appLocale} className={inter.className}>
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <header className="container py-2">
          <section className="flex flex-wrap items-center justify-between">
            <RootLogo />
            <RootNavToggler />
            <RootNav className="hidden lg:inline-block" />
          </section>
        </header>
        <main className="grow">{children}</main>
      </body>
    </html>
  )
}
