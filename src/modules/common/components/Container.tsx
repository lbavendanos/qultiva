import { cn } from '@/lib/utils/helpers'
import React from 'react'

export interface ContainerProps extends React.ComponentPropsWithRef<'div'> {
  as?: React.ElementType
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ as: Component = 'div', className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={cn('container mx-auto w-full max-w-7xl px-4', className)}
      />
    )
  },
)

Container.displayName = 'Container'

export default Container
