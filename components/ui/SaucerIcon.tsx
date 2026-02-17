import Image from 'next/image'

interface SaucerIconProps {
  size?: number
  className?: string
  /** Renders the icon in white using a CSS invert filter — for use on dark backgrounds */
  white?: boolean
}

export function SaucerIcon({ size = 32, className = '', white = false }: SaucerIconProps) {
  return (
    <Image
      src="/brand/saucer.svg"
      alt="Flying Saucer"
      width={size}
      height={size}
      className={`${white ? 'brightness-0 invert' : ''} ${className}`.trim()}
    />
  )
}
