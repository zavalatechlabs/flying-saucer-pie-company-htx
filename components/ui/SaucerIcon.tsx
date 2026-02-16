import Image from 'next/image'

interface SaucerIconProps {
  size?: number
  className?: string
}

export function SaucerIcon({ size = 32, className = '' }: SaucerIconProps) {
  return (
    <Image
      src="/brand/saucer.svg"
      alt="Flying Saucer"
      width={size}
      height={size}
      className={className}
    />
  )
}
