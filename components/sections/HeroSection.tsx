'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { SaucerIntro } from '../animations/SaucerIntro'
import { SwooshReveal } from '../animations/SwooshReveal'

// Toggle alignment guide
const SHOW_GUIDE = false

// Toggle viewport indicator (shows which breakpoint is active)
const SHOW_VIEWPORT_INDICATOR = false

// Toggle animation (set to false to skip animation)
const ENABLE_ANIMATION = true

// Tuning knobs - centralized positioning values
// All elements centered vertically while maintaining relative spacing
const POS = {
  headlineTop: "17.5%",
  headlineLeft: "0.5%",
  headlineWidth: "99%",
  
  swooshTop: "31.5%",
  swooshLeft: "0%",
  swooshWidth: "94%",
  
  taglineTop: "41.5%",
  taglineLeft: "35%",
  taglineWidth: "60%",
  
  saucerBottom: "17.5%",
  saucerRight: "0.8%",
  saucerWidth: "41%",
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
  const [isAnimationComplete, setIsAnimationComplete] = useState(!ENABLE_ANIMATION)
  const [isTextVisible, setIsTextVisible] = useState(!ENABLE_ANIMATION)
  const [isSwooshVisible, setIsSwooshVisible] = useState(!ENABLE_ANIMATION)

  useEffect(() => {
    if (!ENABLE_ANIMATION) return

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsAnimationComplete(true)
      setIsTextVisible(true)
      setIsSwooshVisible(true)
      return
    }

    // Listen for animation phase changes
    const handlePhaseChange = () => {
      const textVisibleAttr = document.querySelector('[data-text-visible]')?.getAttribute('data-text-visible')
      const phaseAttr = document.querySelector('[data-animation-phase]')?.getAttribute('data-animation-phase')
      
      if (textVisibleAttr === 'true') {
        setIsTextVisible(true)
      }
      
      if (phaseAttr === 'swoosh' || phaseAttr === 'landed') {
        setIsSwooshVisible(true)
      }
    }

    // Poll for changes (simple approach)
    const interval = setInterval(handlePhaseChange, 100)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero-retro-background relative w-full min-h-screen flex items-center justify-center overflow-hidden py-8">
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

        /* Text reveal animation */
        .text-reveal {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .text-reveal-hidden {
          opacity: 0;
          transform: translateY(12px);
        }

        .text-reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Flying Saucer Animation */}
      {ENABLE_ANIMATION && (
        <SaucerIntro 
          onAnimationComplete={() => setIsAnimationComplete(true)}
          disabled={!ENABLE_ANIMATION}
        />
      )}

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
          {ENABLE_ANIMATION && !isSwooshVisible ? (
            /* Swoosh Reveal Animation */
            <div 
              className="absolute pointer-events-none z-10"
              style={{ 
                top: POS.swooshTop, 
                left: POS.swooshLeft, 
                width: POS.swooshWidth 
              }}
            >
              <SwooshReveal isAnimating={isSwooshVisible} />
            </div>
          ) : (
            /* Static Swoosh */
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
          )}

          {/* Layer 3: Text (headline + tagline) */}
          <div className="absolute inset-0 z-20">
            
            {/* Headline: FLYING SAUCER / PIE COMPANY */}
            <div 
              className={`absolute text-center text-reveal ${
                isTextVisible ? 'text-reveal-visible' : 'text-reveal-hidden'
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
              className={`absolute text-center text-reveal ${
                isTextVisible ? 'text-reveal-visible' : 'text-reveal-hidden'
              }`}
              style={{ 
                top: POS.taglineTop, 
                left: POS.taglineLeft, 
                width: POS.taglineWidth,
                transitionDelay: '0.2s'
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
          {/* Only show static saucer when animation is complete */}
          {isAnimationComplete && (
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
          )}

        </div>
      </div>

      {/* Viewport Indicator (toggleable) */}
      {SHOW_VIEWPORT_INDICATOR && (
        <div className="viewport-indicator" aria-hidden="true" />
      )}
    </section>
  )
}
