import { MdMenu } from 'react-icons/md'
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import RootNav from './root-nav'
import RootLogo from './root-logo'

export default function RootNavToggler() {
  return (
    <Sheet>
      <SheetTrigger
        className="block hover:text-foreground/60 lg:hidden"
        aria-label="Open menu"
      >
        <MdMenu className="h-6 w-6" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <RootLogo />
          <RootNav
            className="flex flex-col text-center"
            linkClassName="hover:bg-transparent text-base"
          />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
