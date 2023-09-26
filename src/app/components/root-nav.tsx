import RootNavLink from './root-nav-link'

export interface RootNavProps extends React.ComponentPropsWithoutRef<'nav'> {
  linkClassName?: string
}

export default function RootNav({ linkClassName, ...props }: RootNavProps) {
  return (
    <nav {...props}>
      <RootNavLink href="/" className={linkClassName}>
        Inicio
      </RootNavLink>
      <RootNavLink href="/" className={linkClassName}>
        Empresa
      </RootNavLink>
      <RootNavLink href="/" className={linkClassName}>
        Productos
      </RootNavLink>
      <RootNavLink href="/" className={linkClassName}>
        Contacto
      </RootNavLink>
    </nav>
  )
}
