import { config } from '@/lib/utils/helpers'
import Container from '@/modules/common/components/Container'

export default function Home() {
  const appName = config('app.name')

  return (
    <Container className="my-10 md:w-1/3">
      <div className="flex flex-col space-y-4">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold uppercase">{appName}</h1>
          <p className="text-lg font-medium uppercase tracking-wider">
            Abono orgánico
          </p>
        </header>
        <section>
          <p className="text-center text-lg">
            {`En ${appName} encuentra abono orgánico de calidad. Humus y compost que mejoran el suelo y promueven un crecimiento saludable de tus cultivos. ¡Potencia tu agricultura de forma sostenible!`}
          </p>
        </section>
      </div>
    </Container>
  )
}
