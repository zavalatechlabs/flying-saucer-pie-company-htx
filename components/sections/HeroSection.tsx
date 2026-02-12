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

// Font size tuning knobs - adjust these values easily
const FONTS = {
  headlineSize: "14vw",  // Headline font size (adjust this!)
  taglineSize: "8vw",    // Tagline font size (adjust this!)
}

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-warm-cream to-white overflow-hidden py-8">
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
              <h1 
                className="headline-font font-bold text-[#020169] leading-[0.82] tracking-[0.04em]"
                style={{ fontSize: FONTS.headlineSize }}
              >
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
              <p 
                className="tagline-font text-[#020169] leading-[1.15]"
                style={{ fontSize: FONTS.taglineSize }}
              >
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
