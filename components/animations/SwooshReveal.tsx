'use client'

interface SwooshRevealProps {
  isAnimating: boolean
  className?: string
}

export function SwooshReveal({ isAnimating, className = '' }: SwooshRevealProps) {
  return (
    <div 
      className={`
        absolute pointer-events-none z-10
        ${isAnimating ? 'swoosh-draw' : 'opacity-0'}
        ${className}
      `}
    >
      <svg
        viewBox="0 0 600 383"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Swoosh path with stroke animation */}
        <path
          d="M588.5 379c-1.1-3.6-10.8-9.9-19.7-12.9-9.5-3.3-28-6-41.3-6.2-4.9 0-29 .5-53.4 1.1-24.4.6-68.7 1.2-98.5 1.3-57.2.2-59.7.1-80.6-4.9-33.4-8-76.9-30.5-106.5-55.4-17.1-14.3-31.3-30.2-42-47-8.5-13.5-13.5-23.8-17.9-37.5-5.2-16.2-6.6-22.8-7.3-35.1-1.4-26.7 6.3-49.3 25.3-74.4 26.2-34.6 71.6-60.3 125.9-71.4 25.8-5.3 61.8-5.9 87.4-1.5 12.4 2.1 15.7 3.7 13 6.5-1.4 1.4-2.2 1.4-8 0-13-3-26.8-3.9-50.9-3.3-30.9.7-48.3 3.9-76.5 14.1-40.4 14.7-66.7 32.7-86.5 59.3-9.8 13.3-15.1 22.8-19.4 35.1-8 23-7.5 39.9 1.9 68.8 4.9 15 11.2 27.6 21 41.7 8.8 12.7 9 12.9 22.3 26.4 17 17.3 34.2 29.8 63.4 46.2 7.1 3.9 13 7.1 13.2 7.1.2 0 4.2 1.7 8.8 3.9 10.7 4.9 25.1 9.6 35.8 11.6 4.7.9 10.3 2.1 12.5 2.6 6.6 1.7 64.6 2.2 121 .9 29.2-.6 64.2-1.4 77.8-1.7 33.4-.7 51.2 1.8 68 9.5 12.1 5.6 20.7 16.1 14 17-.14.2-.23-.3-.28-1.8z"
          fill="none"
          stroke="#070a79"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
