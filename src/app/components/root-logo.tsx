import { cn, config } from '@/lib/utils/helpers'
import Link from 'next/link'

interface RootLogoProps {
  className?: string
}

export default function RootLogo({ className, ...props }: RootLogoProps) {
  const appName = config('app.name')

  return (
    <Link
      {...props}
      href="/"
      className={cn('flex flex-col items-center justify-center', className)}
    >
      <span className="text-2xl font-extrabold uppercase lg:text-3xl">
        {appName}
      </span>
      <span className="-mt-1 text-[0.7rem] font-medium uppercase lg:text-sm">
        Abono orgánico
      </span>
    </Link>
  )
}
