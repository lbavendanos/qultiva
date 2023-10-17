import { config } from '@/lib/utils/helpers'
import Image from 'next/image'
import banner from './../../public/images/home/banner.png'

export default function Home() {
  const appName = config('app.name')

  return (
    <section className="relative flex h-[500px] items-center lg:h-[600px]">
      <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <Image
          alt="banner"
          src={banner}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="container z-10 py-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex flex-col gap-y-4 text-primary-foreground shadow-primary/50 text-shadow">
              <h1 className="text-center text-5xl font-extrabold leading-none lg:text-left lg:text-6xl">
                Potencia tu agricultura de forma sostenible
              </h1>
              <p className="text-center text-lg leading-tight lg:text-left">
                En {appName} encuentra abono orgánico de calidad. Humus y
                Compost que mejoran el suelo y promueven un crecimiento
                saludable de tus cultivos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
