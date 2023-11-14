import { cn, config } from '@/lib/utils/helpers'
import Link from 'next/link'
import RootLogo from './root-logo'

interface RootLogoLinkProps {
  className?: string
}

export default function RootLogoLink({
  className,
  ...props
}: RootLogoLinkProps) {
  const appName = config('app.name')

  return (
    <Link
      {...props}
      href="/"
      className={cn(
        'flex flex-row items-center justify-center gap-1.5',
        className,
      )}
    >
      <RootLogo className="w-8" />
      <span className="text-lg font-medium">{appName}</span>
    </Link>
  )
}
