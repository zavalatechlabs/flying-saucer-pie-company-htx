interface StarburstProps {
  size?: number
  color?: 'purple' | 'orange' | 'blue' | 'lavender'
  opacity?: number
  animate?: boolean
  className?: string
}

export function Starburst({ 
  size = 200, 
  color = 'purple',
  opacity = 0.05,
  animate = true,
  className = '' 
}: StarburstProps) {
  const colorMap = {
    purple: '#6B2CBF',
    orange: '#FF6B35',
    blue: '#00D4FF',
    lavender: '#C9A9E0',
  }

  const fillColor = colorMap[color]

  return (
    <div 
      className={`${animate ? 'animate-starburst' : ''} ${className}`}
      style={{ 
        width: size, 
        height: size,
        opacity,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* 16-pointed atomic starburst */}
        <g fill={fillColor}>
          {/* Center circle */}
          <circle cx="100" cy="100" r="8" />
          
          {/* 16 rays radiating from center */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 22.5 * Math.PI) / 180
            const isLong = i % 2 === 0
            const length = isLong ? 90 : 60
            const width = isLong ? 12 : 8
            
            const x1 = 100 + Math.cos(angle) * 12
            const y1 = 100 + Math.sin(angle) * 12
            const x2 = 100 + Math.cos(angle) * length
            const y2 = 100 + Math.sin(angle) * length
            
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={fillColor}
                strokeWidth={width}
                strokeLinecap="round"
                opacity={isLong ? 1 : 0.7}
              />
            )
          })}
        </g>
      </svg>
    </div>
  )
}
