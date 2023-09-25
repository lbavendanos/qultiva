import { cn } from '@/lib/utils/helpers'
import Link, { LinkProps } from 'next/link'

export interface RootNavbarLinkProps extends LinkProps {
  children?: React.ReactNode
  className?: string
}

export default function RootNavbarLink({
  className,
  ...props
}: RootNavbarLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        'rounded-md px-3 py-2 text-sm no-underline transition-colors duration-150 hover:bg-foreground/[.03]',
        className,
      )}
    />
  )
}
