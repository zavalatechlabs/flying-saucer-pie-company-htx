'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface FlyingSaucerProps {
  phase: 'flyAcross' | 'swoosh' | 'landed' | 'idle'
  className?: string
}

export function FlyingSaucer({ phase, className = '' }: FlyingSaucerProps) {
  // Map phases to CSS animation classes
  const phaseClasses = {
    flyAcross: 'saucer-fly-across',
    swoosh: 'saucer-swoosh',
    landed: 'saucer-landed',
    idle: 'saucer-idle',
  }

  return (
    <div 
      className={`
        absolute pointer-events-none z-50
        ${phaseClasses[phase]}
        ${className}
      `}
      style={{
        width: '15vw',
        minWidth: '80px',
        maxWidth: '200px',
      }}
    >
      <Image 
        src="/brand/saucer.svg"
        alt=""
        width={200}
        height={200}
        className="w-full h-auto"
        priority
      />
    </div>
  )
}
