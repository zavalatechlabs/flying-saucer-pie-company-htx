import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <div className="relative">
        {/* UFO Icon */}
        <div className="w-10 h-10 bg-cosmic-orange rounded-full flex items-center justify-center 
                        group-hover:animate-float transition-all duration-300">
          <span className="text-2xl">🛸</span>
        </div>
        {/* Pie underneath UFO on hover */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 text-sm">
          🥧
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-space-night">Flying Saucer</span>
        <span className="text-xs text-dust-medium -mt-1">Pie Company</span>
      </div>
    </Link>
  )
}