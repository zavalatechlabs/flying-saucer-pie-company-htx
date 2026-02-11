# Flying Saucer Pie Company - V1 Design Document
*Modern, Interactive Redesign*

## Executive Summary
Transforming Flying Saucer Pie Company's website into a modern, interactive experience that combines retro space-age aesthetics with contemporary web design. The site will feature smooth animations, engaging scroll interactions, and a premium bakery feel while maintaining the fun "out of this world" brand personality.

---

## Design Inspiration & Key Features

### 1. **Hero Landing Animation** *(Inspired by: igloo.inc, tartinebakery.com)*
**Concept:** Flying Saucer Landing Sequence
- **Scene:** UFO descends from top of viewport with tractor beam
- **Animation Flow:**
  1. Stars/space background fades in
  2. UFO descends from above (2-3 seconds)
  3. Tractor beam activates, revealing logo/hero text
  4. UFO hovers gently (subtle float animation)
  5. Fade in navigation and CTA buttons
- **Technical:** Framer Motion orchestration, lottie-web for complex animations
- **Fallback:** Graceful degradation to fade-in for slower connections

### 2. **Color Palette & Typography** *(Inspired by: portal.thenifty.com)*
**Primary Colors:**
- **Cosmic Purple:** `#6B2CBF` (rich, saturated purple - futuristic vibe)
- **Electric Blue:** `#00D4FF` (accent, neon glow effects)
- **Warm Cream:** `#FFF8F3` (backgrounds, warmth)
- **Deep Space Navy:** `#0B1929` (dark sections)
- **Sunset Orange:** `#FF6B35` (CTAs, energy)

**Typography:**
- **Headings:** Space Grotesk (geometric, modern, space-age)
- **Body:** Inter (clean, readable)
- **Accents:** JetBrains Mono (technical details, prices)

### 3. **Rotating Pie Showcase** *(Inspired by: emporiumpies.com)*
**Section:** "Fine Pies for Fine Folk" / "Cosmic Favorites"
- **Interaction:** Pies slowly rotate on hover (3D tilt effect)
- **Layout:** Carousel or grid with spotlight on center pie
- **Animation:** CSS 3D transforms + Framer Motion for smooth rotation
- **Additional:** Parallax effect on scroll (pies move at different speeds)
- **Lighting:** Subtle shadow/glow to emphasize 3D depth

### 4. **Scroll-Triggered Animations** *(Inspired by: dontboardme.com)*
**Technique:** Intersection Observer API + Framer Motion
- **Content blocks slide in from left/right** as user scrolls
- **Stagger animations:** Each element enters with slight delay
- **Opacity + Transform:** Fade + slide for smooth entrance
- **Sections affected:**
  - Feature cards ("Since 1967", "Made Fresh Daily", etc.)
  - Menu items
  - About us story blocks
  - Location/contact info

### 5. **Falling Cherry/UFO Animation** *(Inspired by: graza.co dripping oil)*
**Concept:** Cherry Falls onto Pie
- **Trigger:** Scroll position in menu section
- **Animation:** Cherry drops from top, lands on pie with slight bounce
- **Variation:** UFO drops pie slice onto plate
- **Technical:** Canvas animation or lottie-web for smooth physics
- **Placement:** Menu section header or pie detail pages

### 6. **Scrolling Reviews Marquee** *(Inspired by: emporiumpies.com)*
**Section:** Customer testimonials
- **Style:** Infinite horizontal scroll (marquee)
- **Content:** Review cards with customer name, rating, quote
- **Speed:** Slow, smooth (pausable on hover)
- **Layout:** Two rows scrolling in opposite directions for visual interest
- **Styling:** Glass-morphism cards with soft shadows

---

## Page-by-Page Breakdown

### **Homepage**
1. **Hero Section**
   - UFO landing animation (3-4 seconds)
   - Headline: "Houston's Pies That Are Out of This World"
   - Subtext: "Handmade fresh daily since 1967"
   - Primary CTA: "Launch Your Order 🚀"
   - Secondary CTA: "Explore Our Story"

2. **Why Houston Loves Us** (scroll-triggered animations)
   - 4 feature cards (Since 1967, Fresh Daily, Quality, Out of This World)
   - Each card slides in on scroll
   - Icon animations on hover

3. **Rotating Pie Showcase**
   - "Fine Pies for Fine Folk"
   - Carousel with 3D rotating pies
   - Cherry falling animation on scroll

4. **Scrolling Reviews**
   - Infinite marquee of customer testimonials
   - Two rows, opposite directions

5. **CTA Section**
   - "Ready to Order?" with cosmic background
   - Order button + contact info

### **Menu Page**
- Filter by category (fruit, cream, seasonal)
- Pie cards with 3D tilt on hover
- Detailed modal on click (ingredients, allergens, pricing)
- Cherry falling animation at top

### **About Page**
- Timeline of history (scroll-triggered)
- Founder story with photos
- Houston Strong narrative

### **Location Page**
- Interactive map (Google Maps embed)
- Hours, contact info
- Directions with scroll animation

### **Contact Page**
- Clean form with validation
- UFO "sending message" animation on submit

---

## Technical Implementation

### **Core Tech Stack**
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **3D Effects:** React Three Fiber (if needed for advanced 3D)
- **Scroll Animations:** Intersection Observer API
- **Complex Animations:** Lottie-web (for UFO landing, cherry drop)

### **Performance Considerations**
- Lazy load animations (only animate what's in viewport)
- Preload critical assets (UFO animation files)
- Optimize images (WebP, lazy loading)
- Reduce motion for users who prefer it (`prefers-reduced-motion`)

### **Accessibility**
- Skip to main content link
- Keyboard navigation for all interactive elements
- ARIA labels for animations
- Alt text for all images
- Color contrast WCAG AA compliant

---

## Animation Library

### **Required Animations**
1. **UFO Landing Sequence** (Lottie JSON or Framer Motion)
2. **Pie 3D Rotation** (CSS transforms + Framer Motion)
3. **Cherry Drop** (Canvas or Lottie)
4. **Scroll-triggered Slides** (Framer Motion)
5. **Review Marquee** (CSS keyframes or Framer Motion)
6. **Hover Effects** (Framer Motion whileHover)

---

## Project Structure

```
app/
├── (marketing)/
│   ├── page.tsx (homepage)
│   ├── menu/
│   ├── about/
│   ├── location/
│   └── contact/
├── components/
│   ├── animations/
│   │   ├── UFOLanding.tsx
│   │   ├── RotatingPie.tsx
│   │   ├── CherryDrop.tsx
│   │   └── ScrollReveal.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── PieShowcase.tsx
│   │   └── ReviewsMarquee.tsx
│   └── ui/
│       ├── Navigation.tsx
│       └── Footer.tsx
└── public/
    └── animations/
        ├── ufo-landing.json
        └── cherry-drop.json
```

---

## Design Deliverables

1. **Wireframes** (Figma or hand-drawn, documented in GitHub)
2. **Color palette tokens** (Tailwind config)
3. **Typography scale** (Tailwind config)
4. **Component library** (Storybook or in-app)
5. **Animation specifications** (timing, easing, triggers)

---

## Success Metrics

- **Load time:** < 2 seconds (First Contentful Paint)
- **Animation frame rate:** 60fps consistently
- **Lighthouse score:** > 90 (Performance, Accessibility, Best Practices)
- **Mobile responsiveness:** All animations work smoothly on mobile
- **Conversion rate:** Track "Order Now" CTA clicks

---

## Next Steps

1. Create GitHub Project Board
2. Break down into actionable tickets
3. Delegate to sub-agents (Animation Engineer, Frontend Developer, QA)
4. Create feature branches and PRs for each component
5. Review and auto-merge after validation

---

*Design Lead: ZTL Claw*  
*Date: 2026-02-11*  
*Version: 1.0*
