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
      className={cn(
        'flex flex-col items-center justify-center text-2xl font-bold lg:text-3xl',
        className,
      )}
    >
      {appName}
    </Link>
  )
}
