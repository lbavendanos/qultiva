import { config } from '@/lib/utils/helpers'

export default function Home() {
  const appName = config('app.name')

  return (
    <section className="container my-10">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold uppercase">{appName}</h1>
        <p className="text-lg font-medium uppercase tracking-wider">
          Abono orgánico
        </p>
        <p className="mt-4 text-center text-lg">
          {`En ${appName} encuentra abono orgánico de calidad. Humus y compost que mejoran el suelo y promueven un crecimiento saludable de tus cultivos. ¡Potencia tu agricultura de forma sostenible!`}
        </p>
      </div>
    </section>
  )
}
