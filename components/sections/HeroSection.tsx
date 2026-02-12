'use client'

import Image from 'next/image'

// Toggle alignment guide
const SHOW_GUIDE = true

// Tuning knobs - centralized positioning values
const POS = {
  headlineTop: "20%",
  headlineLeft: "8%",
  headlineWidth: "84%",
  
  swooshTop: "35.5%",
  swooshLeft: "0%",
  swooshWidth: "94%",
  
  taglineTop: "45%",
  taglineLeft: "35%",
  taglineWidth: "60%",
  
  saucerBottom: "13.5%",
  saucerRight: "0.8%",
  saucerWidth: "41%",
}

// Font size tuning knobs - adjust per viewport!
const FONTS = {
  // Headline (FLYING SAUCER / PIE COMPANY)
  headline: {
    mobile: "14vw",      // default (< 640px)
    sm: "12vw",          // small screens (640px+)
    md: "10vw",          // medium screens (768px+)
    lg: "8vw",           // large screens (1024px+)
    xl: "7vw",           // extra large (1280px+)
  },
  // Tagline (Our Pies Are / Out Of This World!)
  tagline: {
    mobile: "8vw",       // default (< 640px)
    sm: "7vw",           // small screens (640px+)
    md: "6vw",           // medium screens (768px+)
    lg: "5vw",           // large screens (1024px+)
    xl: "4vw",           // extra large (1280px+)
  }
}

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-warm-cream to-white overflow-hidden py-8">
      {/* CSS Variables for Responsive Font Sizes */}
      <style jsx>{`
        .hero-headline {
          font-size: ${FONTS.headline.mobile};
        }
        .hero-tagline {
          font-size: ${FONTS.tagline.mobile};
        }
        
        @media (min-width: 640px) {
          .hero-headline {
            font-size: ${FONTS.headline.sm};
          }
          .hero-tagline {
            font-size: ${FONTS.tagline.sm};
          }
        }
        
        @media (min-width: 768px) {
          .hero-headline {
            font-size: ${FONTS.headline.md};
          }
          .hero-tagline {
            font-size: ${FONTS.tagline.md};
          }
        }
        
        @media (min-width: 1024px) {
          .hero-headline {
            font-size: ${FONTS.headline.lg};
          }
          .hero-tagline {
            font-size: ${FONTS.tagline.lg};
          }
        }
        
        @media (min-width: 1280px) {
          .hero-headline {
            font-size: ${FONTS.headline.xl};
          }
          .hero-tagline {
            font-size: ${FONTS.tagline.xl};
          }
        }
      `}</style>

      {/* Alignment Stage - Fixed aspect ratio for stable coordinates */}
      <div className="relative mx-auto aspect-[3/4] w-full max-w-[520px] sm:max-w-[640px] md:max-w-[760px]">
        
        {/* Layer 1: Reference Guide (optional, controlled by SHOW_GUIDE) */}
        {SHOW_GUIDE && (
          <div className="absolute inset-0 z-0">
            <Image 
              src="/brand/logo-reference.jpg"
              alt="Logo Reference"
              fill
              className="h-full w-full object-contain opacity-20"
            />
          </div>
        )}

        {/* Layer 2-4: Logo Composition */}
        <div className="absolute inset-0">
          
          {/* Layer 2: Swoosh (behind text) */}
          <div 
            className="absolute pointer-events-none z-10"
            style={{ 
              top: POS.swooshTop, 
              left: POS.swooshLeft, 
              width: POS.swooshWidth 
            }}
          >
            <Image 
              src="/brand/swoosh.svg"
              alt=""
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {/* Layer 3: Text (headline + tagline) */}
          <div className="absolute inset-0 z-20">
            
            {/* Headline: FLYING SAUCER / PIE COMPANY */}
            <div 
              className="absolute text-center"
              style={{ 
                top: POS.headlineTop, 
                left: POS.headlineLeft, 
                width: POS.headlineWidth 
              }}
            >
              <h1 className="hero-headline headline-font font-bold text-[#020169] leading-[0.82] tracking-[0.04em]">
                <span className="block">
                  FLYING SAUCER
                </span>
                <span className="block">
                  PIE COMPANY
                </span>
              </h1>
            </div>

            {/* Tagline: Our Pies Are / Out Of This World! */}
            <div 
              className="absolute text-center"
              style={{ 
                top: POS.taglineTop, 
                left: POS.taglineLeft, 
                width: POS.taglineWidth 
              }}
            >
              <p className="hero-tagline tagline-font text-[#020169] leading-[1.15]">
                <span className="block">
                  Our Pies Are
                </span>
                <span className="block">
                  Out Of This World!
                </span>
              </p>
            </div>
          </div>

          {/* Layer 4: Saucer (bottom-right, final landing position) */}
          <div 
            className="absolute pointer-events-none z-30"
            style={{ 
              bottom: POS.saucerBottom, 
              right: POS.saucerRight, 
              width: POS.saucerWidth 
            }}
          >
            <Image 
              src="/brand/saucer.svg"
              alt=""
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
