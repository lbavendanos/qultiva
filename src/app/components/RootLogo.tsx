import { config } from '@/lib/utils/helpers'
import Link from 'next/link'

export default function RootLogo() {
  const appName = config('app.name')

  return (
    <Link href="/" className="flex flex-col items-center justify-center">
      <span className="text-2xl font-extrabold uppercase lg:text-3xl">
        {appName}
      </span>
      <span className="-mt-1 text-[0.7rem] font-medium uppercase lg:text-sm">
        Abono orgánico
      </span>
    </Link>
  )
}
