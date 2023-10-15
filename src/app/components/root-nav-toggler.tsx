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
          'opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none',
          className,
        )}
        aria-label="Open menu"
      >
        <MdMenu className="h-6 w-6" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent closeLabel="Close menu" closeButton>
        <SheetHeader className="mb-2 items-center">
          <RootLogo />
        </SheetHeader>
        <RootNav />
      </SheetContent>
    </Sheet>
  )
}
