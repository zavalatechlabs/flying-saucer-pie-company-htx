# 🛸 Flying Saucer Pie Company Website

A modern, retro space-themed website for Houston's oldest family-owned bakery, serving handmade pies since 1967.

**Live Site:** https://flying-saucer-pie-company-htx.vercel.app

---

## 🌟 Features

### Design & UX

- **Soft UI Theme**: Neumorphic gray base with terracotta accents — clean, modern, consistent across all pages
- **Meteor Shower Hero**: Aceternity-style meteors (hero blue `#020169`, `rotate(215deg) translateX(-500px)`) animate across the hero background — GPU-composited, no CSS variable side effects
- **Hero Animation**: Sequential reveal (swoosh draws → headline appears → saucer lands → tagline fades in)
- **Mobile-First**: Fully responsive design optimized for all screen sizes
- **Accessibility**: WCAG 2.1 AA compliant, screen reader friendly, keyboard navigation
- **Performance**: All scroll animations use `transform`/`opacity` only (zero layout reflow), `prefers-reduced-motion` respected

### About Page — Interactive Timeline

- **Scroll-driven saucer**: A flying saucer SVG rides the timeline line as you scroll, position calculated via `requestAnimationFrame` (no `top` CSS — pure `translateY` for GPU compositing)
- **Fill line**: Two-layer line — a faint track + an accent-colored fill that scales up from the top via `scaleY(progress)`, stops precisely at the saucer's top edge
- **Dot fill-in**: Timeline milestone dots start hollow; fill with accent color the moment the line tip reaches them. Mobile uses `ref.offsetTop + 6px` (dot is `top-1.5`), desktop uses `ref.offsetTop + offsetHeight/2` (centered in flex row)
- **No ghost/blur**: Saucer has no CSS `transition` — the `rAF` gate at 60fps is smooth enough on its own; transitions caused compositing artifacts on fast scroll

### Business Features

- **Menu Showcase**: Beautiful pie cards with detailed information
- **Business Info**: Hours, location, contact information
- **About Page**: Company history, interactive timeline, values, FAQ
- **Contact Form**: Get in touch with the bakery
- **SEO Optimized**: Structured data, sitemap, robots.txt

### Theme Archive

A full theme exploration system was built during development (20+ variations) and is preserved for reference:

- **Branch**: `feature/theme-archive` — complete snapshot before cleanup
- **Routes**: `app/(themes)/` — all variation pages still accessible at `/new1`–`/new6`, `/v1`–`/v12`, etc., but hidden from navigation

---

## 🚀 Tech Stack

| Category         | Technology                                                                     |
| ---------------- | ------------------------------------------------------------------------------ |
| **Framework**    | [Next.js 16](https://nextjs.org/) (App Router)                                 |
| **Language**     | [TypeScript 5](https://www.typescriptlang.org/) (strict mode)                  |
| **Styling**      | [Tailwind CSS 3](https://tailwindcss.com/) + CSS Variables                     |
| **Animations**   | [Framer Motion 12](https://www.framer.com/motion/)                             |
| **Icons**        | [Lucide React](https://lucide.dev/)                                            |
| **Fonts**        | [Google Fonts](https://fonts.google.com/) (Fredoka, Pacifico, DM Sans, Outfit) |
| **Code Quality** | ESLint, Prettier, Husky, lint-staged                                           |
| **Hosting**      | [Vercel](https://vercel.com/)                                                  |

---

## 📦 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** 10.x or higher

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/zavalatechlabs/flying-saucer-pie-company-htx.git
   cd flying-saucer-pie-company-htx
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your values:

   ```env
   NEXT_PUBLIC_SITE_URL=https://flyingsaucerpieshop.com
   NEXT_PUBLIC_PHONE=713-694-1141
   NEXT_PUBLIC_EMAIL=info@flyingsaucerpies.com
   # ... see .env.example for all options
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open http://localhost:3000** in your browser

---

## 🏗️ Project Structure

```
flying-saucer-pie/
├── app/                           # Next.js App Router
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles & CSS variables
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── location/                 # Location page
│   ├── menu/                     # Menu page
│   ├── sitemap.ts                # Auto-generated sitemap
│   ├── robots.ts                 # Auto-generated robots.txt
│   ├── error.tsx                 # Error boundary
│   └── global-error.tsx          # Root error boundary
├── components/
│   ├── animations/               # Animation components
│   │   ├── AnimationTest.tsx    # Animation testing utilities
│   │   ├── ScrollReveal.tsx     # Scroll-triggered reveal
│   │   └── variants.ts          # Framer Motion variants
│   ├── sections/                 # Page section components
│   │   ├── HeroSection.tsx      # Hero with animation
│   │   ├── PieShowcase.tsx      # Featured pies
│   │   ├── FeaturedPiesRow.tsx  # Rotating pie carousel
│   │   └── ReviewsMarquee.tsx   # Customer reviews
│   └── ui/                       # Base UI components
│       ├── AnimatedSwoosh.tsx   # Hero swoosh animation
│       ├── Button.tsx            # Reusable button
│       ├── Navigation.tsx        # Site navigation
│       ├── Footer.tsx            # Site footer
│       ├── PieCard.tsx           # Pie card component
│       ├── PieModal.tsx          # Pie detail modal
│       └── ScrollIndicator.tsx  # Scroll down arrow
├── lib/
│   ├── animations/               # Animation utilities
│   ├── config/                   # App configuration
│   │   └── index.ts             # Environment-based config
│   ├── data/                     # Business data
│   │   ├── business-info.ts     # Hours, address, policies
│   │   └── pies.ts              # Pie menu data
│   ├── types/                    # TypeScript type definitions
│   │   ├── components.ts        # Component prop types
│   │   ├── data.ts              # Data types
│   │   └── index.ts             # Type exports
│   └── utils/
│       └── cn.ts                # Tailwind class merger
├── public/
│   ├── brand/                    # Brand assets
│   │   ├── saucer.svg           # UFO icon
│   │   └── swoosh.svg           # Swoosh graphic
│   └── images/                   # Public images
│       └── pies/                # Pie photos
├── .env.example                  # Environment variable template
├── .prettierrc                   # Prettier config
├── .prettierignore              # Prettier ignore rules
├── eslint.config.mjs            # ESLint configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── CONTRIBUTING.md              # Contribution guidelines
└── package.json                 # Dependencies & scripts
```

---

## 🎨 Design System

### Color Palette — Warm Parchment & Space Navy

The palette pairs two warm, parchment-toned lights against a family of deep space navies and charcoals. Warmth comes from the cream backgrounds; sophistication from the high-contrast dark tones.

| Token         | Hex       | Lightness | Role                                                          |
| ------------- | --------- | --------- | ------------------------------------------------------------- |
| `--bg`        | `#F5F2EB` | ~94%      | Main page canvas — warm parchment                             |
| `--bg-alt`    | `#ECEBE4` | ~92%      | Alternating sections (timeline, FAQ, etc.)                    |
| `--surface`   | `#FFFFFF` | 100%      | Cards, modals — lifts above warm bg                           |
| `--ink`       | `#1A1A2E` | ~14%      | Deep space navy — **dark section backgrounds + primary text** |
| `--ink-muted` | `#394867` | ~31%      | Slate blue — secondary text, captions, metadata               |
| `--accent`    | `#2B3A55` | ~25%      | Dark navy slate — **primary CTAs, links, active states**      |
| `--accent-2`  | `#2E2E38` | ~20%      | Deep charcoal — secondary CTAs, badges, alt highlights        |
| `--border`    | `#ECEBE4` | ~92%      | Subtle borders on white surfaces                              |

> **Reserved**: `#1B1B1B` (near-black neutral) is in the brand palette but not assigned a token — too close to `--ink` to be distinct. Available for dark mode or very high-contrast future work.

> **Brand-locked colors** (do not standardize): `#020169` is used **only** in the saucer SVG fill and the hero headline/tagline text — these come directly from the Flying Saucer logo identity.

### Interactive Color Behavior

| Element              | Default                         | Hover                              | Active/Focus               |
| -------------------- | ------------------------------- | ---------------------------------- | -------------------------- |
| **Primary button**   | `bg-accent` (`#2B3A55`)         | `bg-ink` (`#1A1A2E`) — deeper navy | Scale down + dimmed shadow |
| **Secondary button** | `border-accent` + `text-accent` | Fills `bg-accent`, text white      | Scale down                 |
| **Ghost button**     | `text-ink`, transparent         | `bg-bg-alt` + `text-accent`        | `bg-border`                |
| **Links**            | `text-accent` with underline    | Darkens to `#1E2D44`               | —                          |
| **Form fields**      | `border-border`                 | `border-accent`                    | Ring: `accent/10`          |
| **Nav links**        | `text-ink`                      | `text-accent`                      | Underline scales in        |

### Dark Sections (headers, footer)

All page hero headers and the site footer use `bg-ink` (`#1A1A2E`). Text in these sections uses `text-surface` (white) and `text-surface/80` for secondary content. Buttons inside dark sections should use `variant="secondary"` or `variant="ghost"`.

### Typography

- **Display Font**: Outfit (headings, display text)
- **Body Font**: DM Sans (body text, UI)
- **Hero Logo**: Fredoka + Pacifico (locked for brand consistency)

### Design Tokens

All design tokens are defined as CSS variables in `app/globals.css`:

```css
:root {
  /* Colors */
  --bg: #f5f2eb; /* Warm parchment — main page canvas */
  --bg-alt: #ecebe4; /* Warm beige — alternating sections */
  --surface: #ffffff; /* Clean white — cards, elevated surfaces */
  --ink: #1a1a2e; /* Deep space navy — text + dark section bg */
  --ink-muted: #394867; /* Slate blue — secondary text */
  --accent: #2b3a55; /* Dark navy slate — primary CTAs, links */
  --accent-2: #2e2e38; /* Deep charcoal — secondary CTAs, badges */
  --border: #ecebe4; /* Warm beige — subtle borders */

  /* Border Radius */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1.25rem;
  --radius-pill: 9999px;

  /* Spacing */
  --section-xs: 2rem;
  --section: 4rem;
  --section-lg: 6rem;

  /* Typography */
  --font-display: 'Outfit';
  --font-body: 'DM Sans';
}
```

### Animations

- **Hero Animation**: Sequential reveal (swoosh → headline → saucer + tagline)
- **Scroll Reveal**: Fade-in animations on scroll
- **Floating Elements**: Subtle hover effects
- **Respects Motion Preferences**: Honors `prefers-reduced-motion`

---

## 🛠️ Available Scripts

| Command                | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Start development server at http://localhost:3000 |
| `npm run build`        | Build production bundle                           |
| `npm run start`        | Start production server                           |
| `npm run lint`         | Run ESLint                                        |
| `npm run format`       | Format code with Prettier                         |
| `npm run format:check` | Check if code is formatted                        |

---

## 🌐 Pages & Routes

| Route       | Description | Key Features                           |
| ----------- | ----------- | -------------------------------------- |
| `/`         | Home        | Hero animation, featured pies, reviews |
| `/menu`     | Full Menu   | All pies with categories, filtering    |
| `/about`    | About Us    | History, timeline, team, FAQs          |
| `/location` | Location    | Map, hours, directions                 |
| `/contact`  | Contact     | Contact form, business info            |

---

## ⚙️ Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://flyingsaucerpieshop.com
NEXT_PUBLIC_SITE_NAME="Flying Saucer Pie Company"

# Business Contact
NEXT_PUBLIC_PHONE=713-694-1141
NEXT_PUBLIC_EMAIL=info@flyingsaucerpies.com

# Social Media
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/flyingsaucerpies
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/flyingsaucerpies

# Feature Flags
NEXT_PUBLIC_ENABLE_HERO_ANIMATION=true
NEXT_PUBLIC_ENABLE_REVIEW_ANIMATION=true
NEXT_PUBLIC_ENABLE_SCROLL_ANIMATIONS=true

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Feature Flags

Toggle features via environment variables:

```bash
# Disable hero animation
NEXT_PUBLIC_ENABLE_HERO_ANIMATION=false

# Disable all scroll animations
NEXT_PUBLIC_ENABLE_SCROLL_ANIMATIONS=false
```

Access in code:

```typescript
import { features } from '@/lib/config'

if (features.heroAnimation) {
  // Run animation
}
```

---

## 🎯 Code Quality & Standards

### TypeScript

- **Strict Mode**: Enabled with all strictness flags
- **Centralized Types**: All types in `lib/types/`
- **No `any`**: Zero tolerance for `any` types

### Code Formatting

- **Prettier**: Automatic formatting
- **ESLint**: Linting with Next.js rules
- **Pre-commit Hooks**: Husky + lint-staged auto-fix on commit

### File Naming Conventions

- **Components**: `PascalCase.tsx` (e.g., `Button.tsx`)
- **Utilities/Data**: `kebab-case.ts` (e.g., `business-info.ts`)
- **Hooks**: `useHookName.ts` or `use-hook-name.ts`

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for full guidelines.

---

## 🚢 Deployment

### Vercel (Recommended)

The site auto-deploys to Vercel on push to `main`:

1. **Connect GitHub repo** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Push to main** → automatic deployment

### Manual Deployment

```bash
# Build
npm run build

# Start production server
npm run start
```

---

## 📱 Progressive Web App (Future)

The site is PWA-ready:

- Service worker support
- Offline functionality
- Installable as native app
- Push notifications (future feature)

---

## ♿ Accessibility

- **WCAG 2.1 AA Compliant**
- **Semantic HTML**: Proper landmark regions
- **ARIA Labels**: All interactive elements labeled
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Tested**: Works with NVDA, JAWS, VoiceOver
- **Motion Preferences**: Respects `prefers-reduced-motion`

---

## 🔒 Security

- **TypeScript Strict Mode**: Compile-time type safety
- **Input Validation**: All form inputs validated
- **XSS Protection**: React's built-in XSS protection
- **HTTPS Only**: Enforced by Vercel
- **Security Headers**: Configured in Next.js

---

## 📈 Performance

- **Server-Side Rendering**: Fast initial page load
- **Static Generation**: Pre-rendered pages
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic by Next.js
- **Tree Shaking**: Unused code eliminated
- **CDN Distribution**: Vercel Edge Network

**Lighthouse Scores:**

- Performance: 95+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

---

## 🤝 Contributing

We welcome contributions! Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) for:

- File naming conventions
- Code formatting standards
- TypeScript guidelines
- Development workflow
- Pull request process

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Run linting: `npm run lint`
5. Format code: `npm run format`
6. Commit: `git commit -m "feat: add new feature"`
7. Push: `git push origin feature/my-feature`
8. Open a Pull Request

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Environment Variables Not Working

- Ensure `.env.local` exists (copy from `.env.example`)
- Variables must start with `NEXT_PUBLIC_` to be accessible client-side
- Restart dev server after changing env vars

### Pre-commit Hooks Not Running

```bash
# Reinstall husky
npm run prepare

# Or manually
npx husky install
```

### Type Errors

```bash
# Check TypeScript
npx tsc --noEmit

# Common fix: regenerate types
rm -rf .next
npm run dev
```

---

## 📚 Additional Documentation

All project documentation is organized in the [`/docs`](./docs) folder:

**Developer Guides:**

- [`CONTRIBUTING.md`](./CONTRIBUTING.md) - Contribution guidelines
- [`docs/design/STYLING_GUIDE.md`](./docs/design/STYLING_GUIDE.md) - Styling conventions
- [`docs/DEPLOY_CHECKLIST.md`](./docs/DEPLOY_CHECKLIST.md) - Deployment checklist

**Design Documentation:**

- [`docs/design/DESIGN_V1.md`](./docs/design/DESIGN_V1.md) - Design system specifications
- [`docs/design/HERO_ANALYSIS.md`](./docs/design/HERO_ANALYSIS.md) - Hero section design
- [`public/ASSETS_NEEDED.md`](./public/ASSETS_NEEDED.md) - Missing assets guide

**Audit & Architecture:**

- [`docs/audit/AUDIT_SUMMARY.md`](./docs/audit/AUDIT_SUMMARY.md) - Audit executive summary
- [`docs/audit/AUDIT_FINDINGS_REPORT.md`](./docs/audit/AUDIT_FINDINGS_REPORT.md) - Complete findings

**Project Management:**

- [`docs/project-management/PROJECT_SUMMARY.md`](./docs/project-management/PROJECT_SUMMARY.md) - Project overview
- [`docs/project-management/WORK_ITEMS.md`](./docs/project-management/WORK_ITEMS.md) - Work breakdown

**Configuration:**

- [`.env.example`](./.env.example) - Environment variable template

See [`docs/README.md`](./docs/README.md) for complete documentation index.

---

## 📄 License

This project is proprietary to Flying Saucer Pie Company.

---

## 🙏 Acknowledgments

- **Flying Saucer Pie Company** - Houston's oldest family-owned bakery
- **Zavala TechLabs** - Development team
- **Next.js Team** - Amazing framework
- **Vercel** - Hosting and deployment
- **Tailwind CSS** - Utility-first CSS

---

Made with 🥧 and ❤️ in Houston, Texas

**Questions?** Open an issue or contact zavala.techlabs@gmail.com
