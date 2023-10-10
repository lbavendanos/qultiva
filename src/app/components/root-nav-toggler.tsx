import { cn } from '@/lib/utils/helpers'
import { MdMenu } from 'react-icons/md'
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import RootNav from './root-nav'
import RootLogo from './root-logo'

interface RootNavTogglerProps {
  className?: string
}

export default function RootNavToggler({
  className,
  ...props
}: RootNavTogglerProps) {
  return (
    <Sheet>
      <SheetTrigger
        {...props}
        className={cn(
          'transition-colors duration-150 hover:text-foreground/60',
          className,
        )}
        aria-label="Open menu"
      >
        <MdMenu className="h-6 w-6" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-2">
          <RootLogo />
        </SheetHeader>
        <RootNav />
      </SheetContent>
    </Sheet>
  )
}
