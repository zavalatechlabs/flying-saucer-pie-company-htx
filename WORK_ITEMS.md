# Flying Saucer Pie V1 Redesign - Work Items

## Phase 1: Foundation & Setup

### Issue #1: Install Dependencies & Setup Animation Infrastructure
**Priority:** High  
**Effort:** 1-2 hours  
**Assignee:** Frontend Engineer Sub-Agent

**Description:**
Install required dependencies for animations and modern interactions.

**Tasks:**
- [ ] Install Framer Motion: `npm install framer-motion`
- [ ] Install React Intersection Observer: `npm install react-intersection-observer`
- [ ] Create animation utilities in `lib/animations/`
  - `lib/animations/variants.ts` (reusable Framer Motion variants)
  - `lib/animations/scroll-reveal.tsx` (wrapper component)
- [ ] Test basic animation setup

**Acceptance Criteria:**
- All dependencies installed
- No build errors
- Basic animation test passes

---

### Issue #2: Update Color Palette & Typography System
**Priority:** High  
**Effort:** 1-2 hours  
**Assignee:** Frontend Engineer Sub-Agent

**Description:**
Update Tailwind config with new V1 design system (cosmic purple theme).

**Tasks:**
- [ ] Update `tailwind.config.ts` with new color palette:
  ```typescript
  colors: {
    'cosmic-purple': '#6B2CBF',
    'electric-blue': '#00D4FF',
    'warm-cream': '#FFF8F3',
    'deep-navy': '#0B1929',
    'sunset-orange': '#FF6B35',
  }
  ```
- [ ] Verify font imports (Space Grotesk, Inter, JetBrains Mono)
- [ ] Update `globals.css` with new base styles
- [ ] Test color contrast for accessibility (WCAG AA)

**Acceptance Criteria:**
- New colors applied throughout site
- Typography hierarchy consistent
- Accessibility contrast requirements met

---

## Phase 2: Hero & Landing Animation

### Issue #3: Create UFO Landing Hero Animation
**Priority:** High  
**Effort:** 4-6 hours  
**Assignee:** Animation Engineer Sub-Agent

**Description:**
Build the UFO landing sequence for the homepage hero section.

**Tasks:**
- [ ] Create `components/animations/UFOLanding.tsx`
- [ ] Animation sequence:
  1. Stars fade in (0-0.5s)
  2. UFO descends from top (0.5-3s, easeOut)
  3. Tractor beam activates (3-3.5s)
  4. Hero text fades in (3.5-4s)
  5. UFO enters hover loop (gentle float)
- [ ] Use Framer Motion `AnimatePresence` and `motion` components
- [ ] Add "Skip Animation" button for accessibility
- [ ] Implement `prefers-reduced-motion` fallback
- [ ] Mobile-optimized version (faster, simpler)

**Assets Needed:**
- UFO SVG or Lottie animation
- Tractor beam effect (SVG gradient or canvas)
- Stars background

**Acceptance Criteria:**
- Animation runs smoothly (60fps)
- Works on mobile and desktop
- Respects user motion preferences
- Graceful fallback for slow connections

---

### Issue #4: Update Homepage Hero Section
**Priority:** High  
**Effort:** 2-3 hours  
**Assignee:** Frontend Engineer Sub-Agent

**Description:**
Integrate UFO landing animation into hero section with new copy and CTAs.

**Tasks:**
- [ ] Update `app/page.tsx` hero section
- [ ] Integrate `<UFOLanding />` component
- [ ] Update headline: "Houston's Pies That Are Out of This World"
- [ ] Update subtext: "Handmade fresh daily since 1967"
- [ ] Style CTAs with new button design
- [ ] Add background (stars, deep navy gradient)

**Acceptance Criteria:**
- Hero loads with animation
- Text readable and accessible
- CTAs functional and prominent

---

## Phase 3: Interactive Elements

### Issue #5: Build Rotating Pie Showcase Section
**Priority:** High  
**Effort:** 4-5 hours  
**Assignee:** Animation Engineer Sub-Agent

**Description:**
Create interactive pie showcase with 3D rotation effects.

**Tasks:**
- [ ] Create `components/sections/PieShowcase.tsx`
- [ ] Implement 3D tilt effect on hover (CSS transforms)
- [ ] Framer Motion animation for smooth rotation
- [ ] Carousel or grid layout (decide based on design)
- [ ] Parallax scroll effect (pies move at different speeds)
- [ ] Mobile: disable 3D, use simple fade/scale

**Technical Details:**
```tsx
// Example hover effect
const pieVariants = {
  hover: {
    rotateY: 15,
    rotateX: -10,
    scale: 1.05,
    transition: { duration: 0.3 }
  }
}
```

**Acceptance Criteria:**
- Pies rotate smoothly on hover
- No janky animations
- Works on all screen sizes
- Accessible (keyboard navigation)

---

### Issue #6: Implement Scroll-Triggered Animations
**Priority:** Medium  
**Effort:** 3-4 hours  
**Assignee:** Frontend Engineer Sub-Agent

**Description:**
Add scroll-reveal animations to all content sections.

**Tasks:**
- [ ] Create `components/animations/ScrollReveal.tsx` wrapper
- [ ] Use Intersection Observer API
- [ ] Apply to:
  - Feature cards ("Since 1967", "Fresh Daily", etc.)
  - Menu items
  - About timeline
  - Contact form
- [ ] Stagger animations (each element delays by 100ms)
- [ ] Variants: slide-in-left, slide-in-right, fade-up

**Example Implementation:**
```tsx
<ScrollReveal variant="slide-in-left" delay={0.1}>
  <FeatureCard />
</ScrollReveal>
```

**Acceptance Criteria:**
- Animations trigger at correct scroll position
- Smooth, natural feel
- Respects `prefers-reduced-motion`
- No performance issues

---

### Issue #7: Create Falling Cherry/UFO Animation
**Priority:** Medium  
**Effort:** 3-4 hours  
**Assignee:** Animation Engineer Sub-Agent

**Description:**
Build cherry dropping onto pie animation for menu section.

**Tasks:**
- [ ] Create `components/animations/CherryDrop.tsx`
- [ ] Animation: Cherry falls from top, lands with bounce
- [ ] Trigger: Scroll position in menu section
- [ ] Physics: Gravity + bounce easing
- [ ] Alternative: UFO drops pie slice onto plate
- [ ] Use Lottie or Canvas for smooth animation

**Acceptance Criteria:**
- Cherry/UFO animation smooth and playful
- Triggered at correct scroll position
- Mobile-friendly

---

### Issue #8: Build Scrolling Reviews Marquee
**Priority:** Medium  
**Effort:** 2-3 hours  
**Assignee:** Frontend Engineer Sub-Agent

**Description:**
Create infinite scrolling testimonial section.

**Tasks:**
- [ ] Create `components/sections/ReviewsMarquee.tsx`
- [ ] Infinite horizontal scroll (CSS or Framer Motion)
- [ ] Two rows scrolling in opposite directions
- [ ] Pause on hover
- [ ] Review cards: glass-morphism style
- [ ] Content: Customer name, rating, quote

**Technical:**
- Use CSS `@keyframes` for performance
- Or Framer Motion `animate` for more control

**Acceptance Criteria:**
- Smooth, infinite scroll
- Pauses on hover
- Responsive on mobile
- No layout shift

---

## Phase 4: Page Updates

### Issue #9: Redesign Menu Page
**Priority:** High  
**Effort:** 3-4 hours  
**Assignee:** Frontend Engineer Sub-Agent

**Description:**
Update menu page with new design and animations.

**Tasks:**
- [ ] Filter by category (fruit, cream, seasonal, etc.)
- [ ] Pie cards with 3D tilt on hover
- [ ] Modal for pie details (click to expand)
- [ ] Integrate cherry drop animation at top
- [ ] Update pricing display
- [ ] Add "Add to Cart" button (non-functional for now)

**Acceptance Criteria:**
- Clean, modern layout
- Filters work correctly
- Modal accessible and responsive

---

### Issue #10: Redesign About Page with Timeline
**Priority:** Medium  
**Effort:** 2-3 hours  
**Assignee:** Frontend Engineer Sub-Agent

**Description:**
Update about page with scroll-triggered timeline.

**Tasks:**
- [ ] Vertical timeline layout
- [ ] Scroll-reveal animation for each milestone
- [ ] Add photos/images
- [ ] "Houston Strong Since 1967" narrative
- [ ] Founder story section

**Acceptance Criteria:**
- Timeline animates on scroll
- Story engaging and readable
- Images optimized (WebP)

---

### Issue #11: Update Location Page
**Priority:** Low  
**Effort:** 1-2 hours  
**Assignee:** Frontend Engineer Sub-Agent

**Description:**
Refresh location page with new design.

**Tasks:**
- [ ] Embed Google Maps (responsive)
- [ ] Hours, phone, address with icons
- [ ] Scroll animation for content blocks
- [ ] Directions/parking info

**Acceptance Criteria:**
- Map loads correctly
- Info clear and accessible

---

### Issue #12: Update Contact Page with Animation
**Priority:** Low  
**Effort:** 2 hours  
**Assignee:** Frontend Engineer Sub-Agent

**Description:**
Redesign contact form with UFO "sending" animation.

**Tasks:**
- [ ] Clean form layout
- [ ] Validation (client-side)
- [ ] On submit: UFO "beaming up" message animation
- [ ] Success/error states
- [ ] Integrate with existing contact API

**Acceptance Criteria:**
- Form validates correctly
- Submit animation delightful
- Works on all devices

---

## Phase 5: Polish & Optimization

### Issue #13: Performance Optimization
**Priority:** High  
**Effort:** 2-3 hours  
**Assignee:** Frontend Engineer Sub-Agent

**Description:**
Optimize site performance for production.

**Tasks:**
- [ ] Lazy load animations (viewport-based)
- [ ] Optimize images (WebP, lazy loading)
- [ ] Preload critical assets (fonts, UFO animation)
- [ ] Minify CSS/JS
- [ ] Run Lighthouse audit (target: >90 score)
- [ ] Test on slow 3G connection

**Acceptance Criteria:**
- Lighthouse Performance > 90
- First Contentful Paint < 2s
- Smooth animations on mid-tier devices

---

### Issue #14: Accessibility Audit & Fixes
**Priority:** High  
**Effort:** 2 hours  
**Assignee:** Frontend Engineer Sub-Agent

**Description:**
Ensure site meets WCAG AA standards.

**Tasks:**
- [ ] Add "Skip to main content" link
- [ ] Keyboard navigation for all interactive elements
- [ ] ARIA labels for animations
- [ ] Alt text for all images
- [ ] Color contrast check (WCAG AA)
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Implement `prefers-reduced-motion` throughout

**Acceptance Criteria:**
- Lighthouse Accessibility > 95
- Keyboard navigable
- Screen reader friendly

---

### Issue #15: Mobile Responsiveness Testing
**Priority:** High  
**Effort:** 2 hours  
**Assignee:** QA Sub-Agent

**Description:**
Test all pages and animations on mobile devices.

**Tasks:**
- [ ] Test on iOS Safari (iPhone 12, 14)
- [ ] Test on Android Chrome (Pixel, Samsung)
- [ ] Verify animations don't cause jank
- [ ] Touch interactions work correctly
- [ ] Forms usable on small screens

**Acceptance Criteria:**
- All features work on mobile
- No layout issues
- Animations smooth (or simplified for performance)

---

## Issue Summary

**Total Issues:** 15  
**Estimated Effort:** 35-45 hours  
**Priority Breakdown:**
- High: 9 issues
- Medium: 4 issues
- Low: 2 issues

**Suggested Sprint Plan:**
- **Sprint 1 (Week 1):** Issues #1-4 (Foundation + Hero)
- **Sprint 2 (Week 2):** Issues #5-8 (Interactive Elements)
- **Sprint 3 (Week 3):** Issues #9-12 (Page Updates)
- **Sprint 4 (Week 4):** Issues #13-15 (Polish & QA)
