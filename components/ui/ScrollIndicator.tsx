'use client'

import { ChevronDown } from 'lucide-react'

interface ScrollIndicatorProps {
  visible: boolean
}

export function ScrollIndicator({ visible }: ScrollIndicatorProps) {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  if (!visible) return null

  return (
    <div 
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 
                 transition-opacity duration-700 cursor-pointer
                 hover:scale-110 transition-transform"
      onClick={handleClick}
      role="button"
      aria-label="Scroll down to see more content"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-display font-medium text-accent uppercase tracking-wider">
          Scroll
        </span>
        <div className="scroll-bounce">
          <ChevronDown 
            size={32} 
            className="text-accent"
            strokeWidth={2.5}
          />
        </div>
      </div>
    </div>
  )
}
