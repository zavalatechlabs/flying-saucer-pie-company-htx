'use client'

import Image from 'next/image'

export type LightThemeId =
  | 'gulfCoast'
  | 'editorial'
  | 'neumorphism'
  | 'neubrutalism'
  | 'gradientMesh'
  | 'bentoGrid'
  | 'playfulIllustrated'
  | 'main'

interface Props {
  theme: LightThemeId
}

export function LightThemeBackground({ theme }: Props) {
  if (theme === 'gulfCoast') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #FEF3C7 0%, #FED7AA 25%, #FECACA 50%, #F0FDFA 100%)',
          }}
        />
        <div
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, #FBBF24 0%, #F97316 60%, transparent 70%)',
            top: '15%',
            right: '20%',
            filter: 'blur(2px)',
          }}
        />
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-24 opacity-30"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
            fill="#0D9488"
          />
        </svg>
      </div>
    )
  }

  if (theme === 'editorial') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #FFFBF5 0%, #FEF2E8 100%)',
          }}
        />
        <div
          className="absolute w-1/3 h-full right-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, #000000 100%)',
            opacity: 0.03,
          }}
        />
      </div>
    )
  }

  // V7: Neumorphism Soft
  if (theme === 'neumorphism') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(145deg, #F0F0F0 0%, #E8E8E8 50%, #DEDEDE 100%)',
          }}
        />
        {/* Soft inner shadows */}
        <div
          className="absolute inset-0"
          style={{
            boxShadow: 'inset 20px 20px 60px #D0D0D0, inset -20px -20px 60px #FFFFFF',
            borderRadius: '0',
          }}
        />
      </div>
    )
  }

  // V6: Neubrutalism Bold
  if (theme === 'neubrutalism') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #FEFCE8 0%, #FEF9C3 50%, #FED7AA 100%)',
          }}
        />
        {/* Bold geometric shapes */}
        <div
          className="absolute top-[5%] right-[5%] w-40 h-40 bg-[#F472B6] opacity-[0.15]"
          style={{ transform: 'rotate(12deg)' }}
        />
        <div
          className="absolute bottom-[10%] left-[8%] w-32 h-32 bg-[#3B82F6] opacity-[0.12]"
          style={{ transform: 'rotate(-8deg)' }}
        />
        <div className="absolute top-[40%] left-[15%] w-20 h-20 rounded-full bg-[#FBBF24] opacity-[0.2]" />
      </div>
    )
  }

  // V8: Gradient Mesh Flow
  if (theme === 'gradientMesh') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #FED7AA 0%, #FECACA 25%, #DDD6FE 50%, #C7D2FE 75%, #FFF5F5 100%)',
          }}
        />
        {/* Organic blob shapes */}
        <div
          className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #F472B6 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[20%] left-[5%] w-48 h-48 rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, #A78BFA 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-[50%] left-[50%] w-40 h-40 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #FCD34D 0%, transparent 70%)' }}
        />
        {/* Subtle grain */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px',
          }}
        />
      </div>
    )
  }

  // V10: Bento Grid Layout
  if (theme === 'bentoGrid') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #FAFAF9 0%, #F5F5F4 100%)',
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #A8A29E 1px, transparent 1px),
              linear-gradient(to bottom, #A8A29E 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    )
  }

  // V11: Playful Illustrated
  if (theme === 'playfulIllustrated') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #FFFBF5 0%, #FEF7ED 50%, #FFF7ED 100%)',
          }}
        />
        {/* Doodle-style dots */}
        <div className="absolute top-[8%] left-[12%] w-3 h-3 rounded-full bg-[#FB923C] opacity-[0.3]" />
        <div className="absolute top-[15%] right-[18%] w-2 h-2 rounded-full bg-[#34D399] opacity-[0.25]" />
        <div className="absolute bottom-[20%] left-[20%] w-2.5 h-2.5 rounded-full bg-[#60A5FA] opacity-[0.2]" />
        <div className="absolute bottom-[30%] right-[12%] w-2 h-2 rounded-full bg-[#F472B6] opacity-[0.25]" />
        <div className="absolute top-[45%] left-[8%] w-1.5 h-1.5 rounded-full bg-[#FBBF24] opacity-[0.3]" />
      </div>
    )
  }

  // Main: Combined best elements (Vintage Paper + Atomic footer colors + Houston skyline)
  if (theme === 'main') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Warm parchment gradient (from Vintage Paper) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 120% 100% at 50% 30%, #FFFEF8 0%, #FDF6E3 40%, #F5ECD7 100%)',
          }}
        />

        {/* Paper texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />

        {/* Soft teal accent (from Atomic Age) */}
        <div
          className="absolute bottom-[15%] left-[10%] w-64 h-64 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: 'radial-gradient(circle, #14B8A6 0%, transparent 70%)' }}
        />

        {/* Soft vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 50%, rgba(45, 42, 36, 0.05) 100%)',
          }}
        />

        {/* Houston skyline at bottom (hand-drawn) */}
        <div className="absolute bottom-0 left-0 right-0 h-[20%] flex items-end justify-center">
          <Image
            src="/brand/houston-skyline-handdrawn.svg"
            alt=""
            width={1000}
            height={150}
            className="w-full max-w-[1100px] h-auto opacity-[0.08] object-contain object-bottom"
            style={{ color: '#2D2A24' }}
          />
        </div>
      </div>
    )
  }

  return null
}
