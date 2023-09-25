import { MdMenu } from 'react-icons/md'
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
} from '@/modules/common/components/Sheet'
import RootLogo from './RootLogo'
import RootNavbar from './RootNavbar'

export default function RootNavbarMobileToggleButton() {
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
          <RootNavbar
            className="flex flex-col text-center"
            linkClassName="hover:bg-transparent text-base"
          />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
