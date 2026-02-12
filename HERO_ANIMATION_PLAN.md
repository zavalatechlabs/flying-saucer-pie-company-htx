# Flying Saucer Hero Animation - Implementation Plan

## 🎯 Goal
Create a 2-phase hero intro animation where a flying saucer flies across the screen, then follows the swoosh path while the logo text appears, finally landing at the logo position.

---

## 📋 Animation Sequence

### Phase A: Fly-by (1.2s - 1.6s)
1. **Start state:** Saucer off-screen left, large scale (~1.6x), tilted
2. **Action:** Fly horizontally across to off-screen right
3. **End state:** Saucer off-screen right, ready for Phase B
4. **Timing:** ~1.4s duration, ease-in-out

### Phase B: Swoosh + Land (1.6s - 2.2s)
1. **Start state:** Saucer at right side near headline end
2. **Action:** Follow curved swoosh path from right to bottom-right
3. **Parallel actions:**
   - Swoosh SVG draws behind saucer
   - Headline fades in (opacity 0 → 1)
   - Tagline fades in (opacity 0 → 1)
   - Saucer scales down (1.25x → 0.55x for depth)
   - Saucer rotates/tilts to match final logo orientation
4. **End state:** Saucer at final logo position (bottom-right)
5. **Timing:** ~1.8s duration, ease-out

### Phase C: Idle (optional)
1. **Action:** Subtle floating bob animation
2. **Timing:** 3s loop, ease-in-out

---

## 🏗️ Technical Architecture

### Components Structure
```
components/
├── sections/
│   └── HeroSection.tsx (main container)
└── animations/
    ├── SaucerIntro.tsx (animation orchestrator)
    ├── FlyingSaucer.tsx (dynamic saucer element)
    └── SwooshReveal.tsx (swoosh draw animation)
```

### Animation State Machine
```typescript
type AnimationPhase = 'idle' | 'flyAcross' | 'swoosh' | 'landed'

State flow:
idle → flyAcross (1.4s) → swoosh (1.8s) → landed → (idle bob loop)
```

### CSS Strategy
- Use Tailwind for layout/positioning
- Custom keyframes in globals.css for:
  - `@keyframes flyAcross` - Phase A horizontal flight
  - `@keyframes swooshIn` - Phase B swoosh path (motion-path)
  - `@keyframes saucerIdle` - Phase C subtle bob
  - `@keyframes swooshDraw` - SVG stroke-dasharray animation

---

## 🎨 Animation Details

### Phase A: Fly-by
```css
@keyframes flyAcross {
  0% {
    transform: translate3d(-30vw, 2vh, 0) scale(1.6) rotate(-8deg);
    opacity: 1;
  }
  100% {
    transform: translate3d(115vw, 0vh, 0) scale(1.6) rotate(8deg);
    opacity: 1;
  }
}
```

**Properties:**
- Duration: 1.4s
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- will-change: transform

### Phase B: Swoosh Path
```css
@keyframes swooshIn {
  0% {
    offset-distance: 0%;
    transform: translateZ(0) scale(1.25) rotate(5deg);
  }
  100% {
    offset-distance: 100%;
    transform: translateZ(0) scale(0.55) rotate(-15deg);
  }
}
```

**Motion Path:**
- SVG path extracted from swoosh.svg
- Start point: Right side near headline (top-right)
- End point: Bottom-right at saucer final position
- Use `offset-path: path("M ...")` with path data

**Properties:**
- Duration: 1.8s
- Easing: cubic-bezier(0.25, 0.1, 0.25, 1) (ease-out)
- will-change: transform, offset-distance

### Text Reveal
- Headline/Tagline start with `opacity-0 translate-y-4`
- Triggered when Phase B starts (0.2s delay)
- Fade in over 0.8s
- Use Tailwind transitions controlled by React state

### Swoosh Draw
```css
@keyframes swooshDraw {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
```

**Properties:**
- Duration: 1.2s
- Easing: ease-out
- stroke-dasharray: 1000 (match stroke-dashoffset)

---

## 🔧 Implementation Tasks

### Task 1: Create Animation Components
**File:** `components/animations/FlyingSaucer.tsx`
- Dynamic saucer element (SVG or optimized image)
- Props: phase, onPhaseComplete callback
- Handles tilt/rotation based on phase
- Respects prefers-reduced-motion

**File:** `components/animations/SwooshReveal.tsx`
- Animated swoosh SVG with stroke-dasharray
- Triggered during Phase B
- Hidden until Phase B starts

**File:** `components/animations/SaucerIntro.tsx`
- Orchestrates animation phases
- Manages state machine
- Coordinates saucer + swoosh + text timing
- Provides `isAnimationComplete` state

### Task 2: Update HeroSection.tsx
- Integrate SaucerIntro component
- Show/hide static elements based on animation state
- Control text visibility (headline/tagline)
- Ensure no layout shift during animation

### Task 3: Add Animation Keyframes
**File:** `app/globals.css`
- Add @keyframes for flyAcross, swooshIn, saucerIdle, swooshDraw
- Add motion-path setup
- Add prefers-reduced-motion overrides
- Add will-change optimizations

### Task 4: Extract Swoosh Path
- Get path data from swoosh.svg
- Calculate correct start/end points for motion-path
- Adjust coordinates to match hero layout

### Task 5: Testing & Refinement
- Test across viewports (mobile/tablet/desktop)
- Verify prefers-reduced-motion behavior
- Performance audit (check for jank)
- Fine-tune timing/easing

---

## 🚨 Constraints & Considerations

### Performance
- Only animate `transform`, `opacity`, `offset-distance`
- Use `will-change` sparingly (add before animation, remove after)
- Use `transform: translate3d()` for GPU acceleration
- Avoid animating layout properties (width, height, margin, padding)

### Accessibility
- Respect `prefers-reduced-motion: reduce`
  - Show final state immediately (no animation)
  - Saucer at final position
  - Text fully visible
- Provide skip animation button? (optional)

### Responsive Design
- Animation should work on all viewports
- Path coordinates may need viewport-specific adjustments
- Consider disabling animation on small screens (<640px)?

### Browser Compatibility
- CSS motion-path support: Chrome 46+, Safari 16+, Firefox 72+
- Fallback: Skip Phase B, fade directly to landed state

---

## 📐 Motion Path Calculation

The swoosh path needs to be extracted and converted to a format suitable for `offset-path`.

**Steps:**
1. Open `swoosh.svg` and extract path data
2. Calculate bounding box
3. Convert to viewBox coordinates relative to hero container
4. Create start point near right side of headline
5. Create end point at saucer final position (bottom-right)
6. Use cubic bezier curves to match swoosh arc

**Example path (to be calculated):**
```css
offset-path: path("M 90% 30% Q 85% 45%, 75% 60% T 45% 85%");
```

---

## 🎬 Animation Timing Chart

```
Time    Phase A          Phase B              Phase C
0s      [Fly-by start]
0.7s    [Mid-flight]
1.4s    [Fly-by end]    [Swoosh start]
                        [Swoosh draw]
                        [Text fade in]
1.8s                    [Mid-swoosh]
3.2s                    [Swoosh end/Land]   [Idle start]
3.2s+                                       [Subtle bob loop]
```

**Total animation duration:** ~3.2s (excluding idle loop)

---

## 🧪 Testing Checklist

- [ ] Phase A: Saucer flies smoothly left to right
- [ ] Phase B: Saucer follows swoosh path accurately
- [ ] Swoosh draws behind saucer
- [ ] Text fades in during Phase B
- [ ] Saucer lands at correct final position
- [ ] Saucer rotation/tilt matches logo
- [ ] No layout shift during animation
- [ ] Performance: 60fps on desktop, 30fps+ on mobile
- [ ] Reduced motion: Shows final state immediately
- [ ] Responsive: Works on all viewports
- [ ] No visual glitches or jank

---

## 🚀 Deployment Strategy

1. **Feature branch:** `feature/hero-saucer-animation`
2. **Incremental implementation:**
   - PR #1: Animation components + keyframes
   - PR #2: HeroSection integration
   - PR #3: Refinements + testing
3. **Review & test on staging**
4. **Merge to main**

---

## 📝 Notes

- Consider adding a "replay animation" button for testing
- Add localStorage flag to disable animation after first view?
- Monitor Web Vitals (CLS, LCP) - animation should not negatively impact
- Document animation in README for future developers
