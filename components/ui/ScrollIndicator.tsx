'use client'

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
      className="absolute bottom-[5%] left-1/2 -translate-x-1/2 z-50 
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
      <div className="scroll-bounce">
        <svg
          className="w-6 h-6 mx-auto"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="#020169"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  )
}
