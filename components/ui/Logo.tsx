import Link from 'next/link'
import { SaucerIcon } from './SaucerIcon'

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <div
        className="w-10 h-10 flex items-center justify-center
                   group-hover:animate-float transition-all duration-300"
      >
        <SaucerIcon size={40} />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-display font-bold text-ink">Flying Saucer</span>
        <span className="text-xs font-display text-ink-muted -mt-1">Pie Company</span>
      </div>
    </Link>
  )
}
