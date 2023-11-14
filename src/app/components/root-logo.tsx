import { cn, config } from '@/lib/utils/helpers'

interface RootLogoProps extends React.SVGProps<SVGSVGElement> {}

export default function RootLogo({ className, ...props }: RootLogoProps) {
  const appName = config('app.name')

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="none"
      className={cn('w-4', className)}
    >
      <title>{appName}</title>
      <rect width="200" height="200" rx="30" fill="#FF0028" />
      <circle cx="100" cy="100" r="50" stroke="white" strokeWidth="20" />
      <path
        d="M100 100L148 148"
        stroke="white"
        strokeWidth="20"
        strokeLinecap="round"
      />
    </svg>
  )
}
