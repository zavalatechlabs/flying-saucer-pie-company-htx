# Hero Component Analysis - Desktop Arrow Visibility Issue

## Current Structure (main branch)

### Container Dimensions
```
Desktop: 760px width × aspect-[3/4] = 1013px height
```

**The Problem:** Most desktop viewports are 800-900px tall, so a 1013px container extends beyond the viewport.

### Current Positioning
- **Saucer:** `bottom: 21%` = 212px from container bottom
- **Arrow:** `bottom: 5%` = 51px from container bottom
- **Gap between them:** 161px

### Why Arrow is Hidden
The section uses `h-screen md:max-h-screen` which limits it to viewport height (~800-900px), but the content container inside is 1013px tall. The bottom ~200px of the container (including the arrow) gets cut off.

## The Real Issue

**It's not the saucer padding creating empty space** — it's that the entire 1013px container doesn't fit in the viewport.

Visual representation:
```
┌─────────────────────────┐
│    Viewport (900px)     │
│                         │
│  ┌───────────────────┐  │
│  │ Container         │  │
│  │ (1013px)          │  │
│  │                   │  │
│  │ Headline (9%)     │  │
│  │ Swoosh (23%)      │  │
│  │ Tagline (33%)     │  │
│  │                   │  │
│  │ Saucer (21% bot)  │  │
│  │                   │  │
└──│───────────────────│──┘  <- Viewport ends here
   │ Arrow (5% bot)    │     <- Arrow is here (hidden)
   └───────────────────┘
```

## Solutions Comparison

### Option 1: Scale Container Down
**Change:** Reduce `md:max-w-[760px]` to `md:max-w-[600px]`

- Container becomes: 600px × 800px (fits viewport)
- **Pro:** Everything scales proportionally, arrow visible
- **Con:** Everything looks smaller/squeezed (you rejected this)

### Option 2: Compress Vertical Spacing
**Change:** Move elements up within the 1013px container

Desktop positioning:
```javascript
headlineTop: "6%",      // up from 9%
swooshTop: "18%",       // up from 23%
taglineTop: "27%",      // up from 33%
saucerBottom: "12%",    // up from 21%
```

- Container stays 760px × 1013px
- Content compressed into top 88% of container
- Bottom 12% (122px) reserved for arrow space
- **Pro:** Keeps 760px width
- **Con:** Tighter vertical spacing, different visual rhythm

### Option 3: Break Aspect Ratio on Desktop
**Change:** Use explicit dimensions instead of aspect-[3/4]

```
md:aspect-auto md:w-[760px] md:h-[85vh]
```

- Container becomes: 760px × ~765px (85% viewport)
- **Pro:** Keeps width, fits viewport
- **Con:** Need to recalculate all positioning percentages for new aspect

### Option 4: Two-Stage Layout
**Change:** Use different container strategies per breakpoint

- Mobile: aspect-[3/4] (works great)
- Desktop: Fixed dimensions with compressed positioning

```
md:w-[760px] md:h-[800px]
```

Plus desktop-specific POS values scaled for 800px instead of 1013px.

## Recommendation: Modified Option 2

Keep the 760px width but add a **height constraint** that forces the aspect ratio to break when needed:

```javascript
md:max-w-[760px] md:max-h-[85vh]
```

This gives:
- ✅ 760px width on desktop (spacious)
- ✅ Auto-scales height to fit viewport
- ✅ Maintains aspect ratio when possible
- ✅ Breaks aspect to fit when viewport is shorter

Then adjust positioning to account for shorter effective height:
- Reduce all vertical gaps slightly
- Move saucer up to ~14% from bottom
- Keep arrow at 5% from bottom

This is a hybrid that maintains visual quality while ensuring viewport fit.

## Next Steps

1. Decide which approach best matches your vision
2. Implement chosen solution
3. Test on various desktop resolutions (1920×1080, 1440×900, etc.)
4. Fine-tune positioning values if needed
