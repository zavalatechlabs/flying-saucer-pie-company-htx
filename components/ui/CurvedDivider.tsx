interface CurvedDividerProps {
  variant?: 'wave' | 'curve' | 'swoop'
  color?: 'cream' | 'white' | 'purple' | 'navy'
  flip?: boolean
  className?: string
}

export function CurvedDivider({ 
  variant = 'wave', 
  color = 'cream',
  flip = false,
  className = '' 
}: CurvedDividerProps) {
  const colorMap = {
    cream: '#FFF8F3',
    white: '#FFFFFF',
    purple: '#6B2CBF',
    navy: '#0B1929',
  }

  const fillColor = colorMap[color]

  const variants = {
    wave: (
      <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
    ),
    curve: (
      <path d="M0,32L120,37.3C240,43,480,53,720,58.7C960,64,1200,64,1320,64L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z" />
    ),
    swoop: (
      <path d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,56C840,59,960,53,1080,48C1200,43,1320,37,1380,34.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
    ),
  }

  return (
    <div 
      className={`w-full ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16"
      >
        <g fill={fillColor}>
          {variants[variant]}
        </g>
      </svg>
    </div>
  )
}
