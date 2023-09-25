import RootNavbarLink from './RootNavbarLink'

export interface RootNavbarProps extends React.ComponentPropsWithoutRef<'nav'> {
  linkClassName?: string
}

export default function RootNavbar({
  linkClassName,
  ...props
}: RootNavbarProps) {
  return (
    <nav {...props}>
      <RootNavbarLink href="/" className={linkClassName}>
        Inicio
      </RootNavbarLink>
      <RootNavbarLink href="/" className={linkClassName}>
        Empresa
      </RootNavbarLink>
      <RootNavbarLink href="/" className={linkClassName}>
        Productos
      </RootNavbarLink>
      <RootNavbarLink href="/" className={linkClassName}>
        Contacto
      </RootNavbarLink>
    </nav>
  )
}
