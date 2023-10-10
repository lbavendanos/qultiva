import { cn } from '@/lib/utils/helpers'
import { cva, type VariantProps } from 'class-variance-authority'
import Link, { LinkProps } from 'next/link'

const navLinkVariants = cva('text-sm no-underline', {
  variants: {
    variant: {
      mobile: 'px-0 py-2',
      desktop:
        'rounded-md px-3 py-2 transition-colors duration-150 hover:bg-foreground/[.03]',
    },
  },
  defaultVariants: {
    variant: 'mobile',
  },
})

export interface RootNavLinkProps
  extends LinkProps,
    VariantProps<typeof navLinkVariants> {
  children?: React.ReactNode
  className?: string
}

export default function RootNavLink({
  variant,
  className,
  ...props
}: RootNavLinkProps) {
  return (
    <Link {...props} className={cn(navLinkVariants({ variant }), className)} />
  )
}
