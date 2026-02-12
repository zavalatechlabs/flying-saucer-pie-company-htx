'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { AnimatedSwoosh } from '../ui/AnimatedSwoosh'
import { ScrollIndicator } from '../ui/ScrollIndicator'

// Toggle alignment guide
const SHOW_GUIDE = false

// Toggle viewport indicator (shows which breakpoint is active)
const SHOW_VIEWPORT_INDICATOR = false

// Toggle animation (set to false to skip animation)
const ENABLE_ANIMATION = true

// Tuning knobs - centralized positioning values
// Mobile: shifted up more aggressively to fit in viewport with arrow visible
// Desktop: moderately shifted to reduce gap
const POS = {
  // Desktop positioning
  headlineTop: "9%",
  headlineLeft: "0.5%",
  headlineWidth: "99%",
  
  swooshTop: "20%",
  swooshLeft: "0%",
  swooshWidth: "94%",
  
  taglineTop: "30%",
  taglineLeft: "35%",
  taglineWidth: "60%",
  
  saucerBottom: "11%",
  saucerRight: "0.8%",
  saucerWidth: "41%",
  
  // Mobile-specific overrides (more aggressive)
  mobile: {
    headlineTop: "8%",
    swooshTop: "22%",
    taglineTop: "32%",
    saucerBottom: "10%",
  }
}

// Font size tuning knobs - adjust per viewport!
const FONTS = {
  // Headline (FLYING SAUCER / PIE COMPANY)
  headline: {
    mobile: "10.3vw",      // default (< 640px)
    sm: "10.5vw",          // small screens (640px+)
    md: "9.4vw",          // medium screens (768px+)
    lg: "7.5vw",           // large screens (1024px+)
    xl: "5.6vw",           // extra large (1280px+)
  },
  // Tagline (Our Pies Are / Out Of This World!)
  tagline: {
    mobile: "5.5vw",       // default (< 640px)
    sm: "5.5vw",           // small screens (640px+)
    md: "5vw",           // medium screens (768px+)
    lg: "4vw",           // large screens (1024px+)
    xl: "3vw",           // extra large (1280px+)
  }
}

export function HeroSection() {
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!ENABLE_ANIMATION || prefersReducedMotion) {
      // Skip animation, show final state
      setAnimationPhase(3)
      return
    }

    // Sequential animation phases
    const timeline = async () => {
      await delay(200)
      setAnimationPhase(1) // Swoosh starts drawing (duration: 1.2s, finishes at 1400ms)
      
      await delay(400)
      setAnimationPhase(2) // Headline fades in (while swoosh continues)
      
      await delay(400) // Saucer + tagline appear at 1000ms (during swoosh, not after)
      setAnimationPhase(3) // Saucer lands + tagline fades in simultaneously
    }

    timeline()
  }, [])

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  return (
    <section className="hero-retro-background relative w-full h-screen md:h-auto flex items-center justify-center overflow-hidden py-4">
      {/* CSS Variables for Responsive Font Sizes */}
      <style jsx>{`
        /* === RETRO HERO BACKGROUND (background-only changes) === */
        .hero-retro-background {
          background: 
            radial-gradient(ellipse 120% 80% at 50% 40%, rgba(255, 248, 240, 0.95), transparent),
            radial-gradient(ellipse 100% 100% at 50% 50%, #FFF8F0, #FFF3E6);
          position: relative;
        }

        /* Paper light radial glow */
        .hero-retro-background::before {
          content: '';
          position: absolute;
          top: -10%;
          left: 50%;
          transform: translateX(-50%);
          width: 150%;
          height: 120%;
          background: radial-gradient(
            ellipse 80% 60% at 50% 30%,
            rgba(255, 255, 255, 0.6),
            transparent 70%
          );
          pointer-events: none;
          z-index: 1;
        }

        /* Faint starburst accents in corners (behind content) */
        .hero-retro-background::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle 200px at 10% 15%, rgba(212, 133, 106, 0.04), transparent),
            radial-gradient(circle 250px at 90% 85%, rgba(107, 142, 159, 0.04), transparent);
          pointer-events: none;
          z-index: 1;
        }

        /* Ensure foreground content sits above background layers */
        .hero-retro-background > * {
          position: relative;
          z-index: 10;
        }

        /* === HERO FONT SIZING (LOCKED - DO NOT CHANGE) === */
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

        /* Viewport Indicator Styles */
        .viewport-indicator {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: rgba(212, 133, 106, 0.9);
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-family: monospace;
          font-size: 14px;
          font-weight: bold;
          z-index: 9999;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          pointer-events: none;
        }
        
        .viewport-indicator::before {
          content: "mobile (< 640px)";
        }
        
        @media (min-width: 640px) {
          .viewport-indicator::before {
            content: "sm (640px+)";
          }
        }
        
        @media (min-width: 768px) {
          .viewport-indicator::before {
            content: "md (768px+)";
          }
        }
        
        @media (min-width: 1024px) {
          .viewport-indicator::before {
            content: "lg (1024px+)";
          }
        }
        
        @media (min-width: 1280px) {
          .viewport-indicator::before {
            content: "xl (1280px+)";
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
          
          {/* Layer 2: Swoosh (behind text) - Top-to-bottom reveal animation */}
          <div 
            className={`absolute pointer-events-none z-10 transition-opacity duration-300 hero-swoosh ${
              animationPhase >= 1 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              top: POS.swooshTop, 
              left: POS.swooshLeft, 
              width: POS.swooshWidth 
            }}
          >
            <AnimatedSwoosh isAnimating={animationPhase >= 1} />
          </div>

          {/* Layer 3: Text (headline + tagline) */}
          <div className="absolute inset-0 z-20">
            
            {/* Headline: FLYING SAUCER / PIE COMPANY */}
            <div 
              className={`absolute text-center transition-all duration-700 hero-headline-container ${
                animationPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
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
              className={`absolute text-center transition-all duration-700 hero-tagline-container ${
                animationPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
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

          {/* Layer 4: Saucer (bottom-right, landing effect) */}
          <div 
            className={`absolute pointer-events-none z-30 transition-all duration-500 hero-saucer ${
              animationPhase >= 3 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-75'
            }`}
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

        {/* Scroll Indicator - appears after animation completes */}
        <ScrollIndicator visible={animationPhase >= 3} />
      </div>

      {/* Viewport Indicator (toggleable) */}
      {SHOW_VIEWPORT_INDICATOR && (
        <div className="viewport-indicator" aria-hidden="true" />
      )}
    </section>
  )
}
