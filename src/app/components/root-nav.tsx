import { cn } from '@/lib/utils/helpers'
import { cva, type VariantProps } from 'class-variance-authority'
import RootNavLink from './root-nav-link'

const navVariants = cva('flex', {
  variants: {
    variant: {
      mobile: 'flex-col',
      desktop: 'flex-row',
    },
  },
  defaultVariants: {
    variant: 'mobile',
  },
})

interface RootNavProps
  extends React.ComponentPropsWithoutRef<'nav'>,
    VariantProps<typeof navVariants> {}

export default function RootNav({
  variant,
  className,
  ...props
}: RootNavProps) {
  return (
    <nav {...props} className={cn(navVariants({ variant }), className)}>
      <RootNavLink href="/" variant={variant}>
        Inicio
      </RootNavLink>
      <RootNavLink href="/" variant={variant}>
        Empresa
      </RootNavLink>
      <RootNavLink href="/" variant={variant}>
        Productos
      </RootNavLink>
      <RootNavLink href="/" variant={variant}>
        Contacto
      </RootNavLink>
    </nav>
  )
}
