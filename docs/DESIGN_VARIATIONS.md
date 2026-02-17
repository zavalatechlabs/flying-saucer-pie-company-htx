# Retro Diner Theme Variations

## Design Philosophy

Push the limits of warmth and invitation while maintaining the core retro diner identity.
Each variation shares the same hero foreground but differs in:

- Background textures and depth
- Color temperature and saturation
- Decorative elements
- Navigation glass effects

---

## Variation 1: 🎨 Vintage Paper & Ink

**Concept:** Layered paper textures with hand-drawn warmth

### Hero Background

- **Primary:** Aged paper texture with visible grain/fibers
- **Overlay:** Subtle ink bleed edges (watercolor soft edges)
- **Depth:** Multiple paper layers at different opacities
- **Accent:** Soft vignette edges (darker corners)

### Color Palette

| Token         | Color   | Usage                |
| ------------- | ------- | -------------------- |
| `--bg`        | #FDF6E3 | Warm parchment cream |
| `--bg-alt`    | #F5ECD7 | Aged paper           |
| `--surface`   | #FFFEFA | Fresh paper white    |
| `--ink`       | #2D2A24 | Warm charcoal        |
| `--ink-muted` | #6B6459 | Faded ink            |
| `--accent`    | #C7522A | Rust/terracotta      |
| `--accent-2`  | #5B7B65 | Vintage green        |
| `--border`    | #D4C9B5 | Paper edge           |

### Navigation

- Frosted paper effect (warmer than glass)
- Subtle shadow on scroll
- Rounded pill links with hover states

### Textures

- SVG paper grain (more visible than current)
- Subtle ink splatter decorative elements
- Hand-drawn style dividers

---

## Variation 2: 🚀 Space City Houston

**Concept:** Local Houston pride with warm retro foundation

### Hero Background

- **Primary:** Warm gradient (cream to soft coral sunset)
- **Feature:** Houston skyline silhouette at bottom (10-15% opacity)
- **Depth:** Subtle star points scattered (very faint)
- **Accent:** Soft radial glow from center

### Color Palette

| Token         | Color   | Usage                |
| ------------- | ------- | -------------------- |
| `--bg`        | #FFF5EB | Houston sunset cream |
| `--bg-alt`    | #FFECD9 | Warm peach           |
| `--surface`   | #FFFFFF | Clean white          |
| `--ink`       | #1F2937 | Deep charcoal        |
| `--ink-muted` | #6B7280 | Soft gray            |
| `--accent`    | #E85D04 | Houston orange       |
| `--accent-2`  | #003087 | Houston blue         |
| `--border`    | #FED7AA | Soft peach           |

### Navigation

- Glass with orange/blue gradient tint on scroll
- Houston star icon subtle accent
- Warmer blur effect

### Special Elements

- Houston downtown skyline SVG (simplified, iconic buildings)
- Subtle rocket/space motifs in section transitions
- "Space City" badge styling for featured items

---

## Variation 3: ✨ Atomic Age Deluxe

**Concept:** Vibrant 1950s diner glamour, bold and playful

### Hero Background

- **Primary:** Mint-to-cream gradient
- **Pattern:** Subtle starburst/atomic pattern overlay (5-8% opacity)
- **Depth:** Chrome reflection effect at top
- **Accent:** Boomerang shapes as decorative elements

### Color Palette

| Token         | Color   | Usage            |
| ------------- | ------- | ---------------- |
| `--bg`        | #F0FDF9 | Fresh mint cream |
| `--bg-alt`    | #FEFCE8 | Soft lemon       |
| `--surface`   | #FFFFFF | Chrome white     |
| `--ink`       | #1C1917 | Rich black       |
| `--ink-muted` | #57534E | Warm gray        |
| `--accent`    | #F97316 | Coral orange     |
| `--accent-2`  | #14B8A6 | Teal             |
| `--border`    | #D1FAE5 | Mint border      |

### Navigation

- Chrome/metallic glass effect
- Rainbow edge reflection on hover
- Rounded corners with subtle glow

### Special Elements

- Starburst decorative elements
- Boomerang dividers
- Checkered patterns (subtle)
- Neon-inspired glow on CTAs

---

## Variation 4: ☕ Warm Mocha Evening

**Concept:** Cozy evening bakery, richer tones without dark mode

### Hero Background

- **Primary:** Warm mocha gradient (cream to soft brown)
- **Texture:** Wood grain overlay (very subtle)
- **Depth:** Warm golden light glow from center
- **Accent:** Soft shadows for depth

### Color Palette

| Token         | Color   | Usage          |
| ------------- | ------- | -------------- |
| `--bg`        | #FAF6F1 | Warm latte     |
| `--bg-alt`    | #F0E6DB | Light mocha    |
| `--surface`   | #FFFCF7 | Cream white    |
| `--ink`       | #3D2C1E | Dark chocolate |
| `--ink-muted` | #7A6555 | Mocha          |
| `--accent`    | #B45309 | Amber/caramel  |
| `--accent-2`  | #78350F | Deep espresso  |
| `--border`    | #E6D5C3 | Latte foam     |

### Navigation

- Amber-tinted glass effect
- Golden glow on scroll
- Warmer, cozier feel

### Special Elements

- Coffee/wheat subtle illustrations
- Warm gradient overlays
- Golden hour lighting effects
- Rich shadows for depth

---

## Implementation Notes

### Shared Components

All variations share:

- Hero foreground (text, fonts, animations)
- Pie carousel component
- Footer structure
- Basic page layouts

### Variable System

Each variation overrides CSS custom properties:

- All colors via `--{token}` variables
- Background effects via `--hero-gradient`, `--hero-texture`
- Nav effects via `--nav-glass-*` properties

### Routes

- `/` → Original Retro Diner (unchanged)
- `/v1` → Vintage Paper & Ink
- `/v2` → Space City Houston
- `/v3` → Atomic Age Deluxe
- `/v4` → Warm Mocha Evening

### Assets Needed

1. Paper texture SVG (for V1)
2. Houston skyline SVG (for V2)
3. Starburst/atomic pattern SVG (for V3)
4. Wood grain texture SVG (for V4)
