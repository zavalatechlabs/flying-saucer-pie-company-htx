# Styling Guide

## Philosophy: Tailwind-First

**Default Approach**: Use Tailwind utility classes for 95% of styling.

**Use globals.css ONLY for:**

1. CSS Variables (design tokens) ✅
2. Reset/normalization ✅
3. Global animations (`@keyframes`) ✅
4. Theme-level styles ✅

---

## ✅ Good: Tailwind Classes

```tsx
// ✅ GOOD - Direct Tailwind classes
<button className="px-6 py-3 bg-accent text-surface rounded-pill font-medium hover:bg-accent/90 transition-colors">
  Click Me
</button>

// ✅ GOOD - Using design token classes
<div className="bg-bg text-ink p-section">
  <h1 className="text-h1 font-display">Heading</h1>
</div>
```

---

## ⚠️ Acceptable: Utility Classes in globals.css

The following utility classes exist in `globals.css` for consistency and are acceptable to use:

### Layout

- `.card` - Card container with shadow
- `.section` - Section padding

### Forms

- `.input-field` - Text input styling
- `.textarea-field` - Textarea styling
- `.select-field` - Select dropdown styling

### Buttons (Legacy)

- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.nav-link` - Navigation link

**Note**: While these work, **new components should use Tailwind directly** rather than adding more utility classes.

---

## ❌ Avoid: Component-Specific CSS Classes

```css
/* ❌ BAD - Don't add new classes like this to globals.css */
.my-special-button {
  background: blue;
  padding: 1rem;
}

.product-card-title {
  font-size: 1.5rem;
  color: red;
}
```

**Instead, use Tailwind:**

```tsx
// ✅ GOOD
<button className="bg-blue-500 px-4 py-2">My Special Button</button>
<h3 className="text-xl text-red-500">Product Card Title</h3>
```

---

## 🎨 Using Design Tokens

### CSS Variables (Defined in globals.css)

```css
:root {
  /* Colors */
  --bg: #fff8f0;
  --ink: #1a1a2e;
  --accent: #d4856a;

  /* Typography */
  --font-display: 'Outfit';
  --font-body: 'DM Sans';

  /* Spacing */
  --section: 4rem;
  --section-lg: 6rem;

  /* Radii */
  --radius-md: 0.75rem;
  --radius-pill: 9999px;
}
```

### Using in Tailwind

Tailwind is configured to read these variables:

```tsx
// ✅ Colors from tokens
<div className="bg-bg text-ink border-border-color">

// ✅ Typography from tokens
<h1 className="font-display text-h1">

// ✅ Spacing from tokens
<section className="py-section lg:py-section-lg">

// ✅ Radii from tokens
<div className="rounded-md"> {/* Uses --radius-md */}
```

---

## 📐 Responsive Design

Always use Tailwind breakpoints:

```tsx
<div className="
  px-4           {/* mobile */}
  sm:px-6        {/* 640px+ */}
  lg:px-8        {/* 1024px+ */}
  max-w-7xl      {/* container max width */}
  mx-auto        {/* center */}
">
```

### Breakpoints

| Prefix | Min Width | Description    |
| ------ | --------- | -------------- |
| `sm`   | 640px     | Small devices  |
| `md`   | 768px     | Medium devices |
| `lg`   | 1024px    | Large devices  |
| `xl`   | 1280px    | Extra large    |

---

## 🎭 Dynamic Styles

### For Dynamic Values (inline styles with CSS variables)

```tsx
// ✅ GOOD - Dynamic positioning with CSS variables
<div
  style={{
    top: POS.headlineTop,
    '--custom-value': dynamicValue
  } as React.CSSProperties}
>
```

### For Conditional Classes

```tsx
// ✅ GOOD - Use cn() utility for conditional classes
import { cn } from '@/lib/utils/cn'

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  variant === "primary" && "variant-classes"
)}>
```

---

## 🎨 Animation

### Use Tailwind Animation Classes

```tsx
// ✅ Tailwind animations
<div className="animate-pulse">        {/* Loading skeleton */}
<div className="animate-bounce">       {/* Bouncing */}
<div className="animate-spin">         {/* Spinner */}

// ✅ Transition utilities
<button className="transition-colors hover:bg-accent/90">
<div className="transition-transform hover:scale-110">
```

### For Complex Animations

Use Framer Motion:

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

---

## 🚫 What NOT to Do

### ❌ Don't Add Component Classes to globals.css

```css
/* ❌ BAD - component-specific classes */
.hero-section {
  padding: 4rem;
  background: var(--bg);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

**Instead:**

```tsx
// ✅ GOOD - Tailwind utilities
<section className="py-section bg-bg">
<div className="grid grid-cols-3 gap-4">
```

### ❌ Don't Use Inline Styles for Static Values

```tsx
// ❌ BAD
<div style={{ padding: '1rem', backgroundColor: '#FFF8F0' }}>

// ✅ GOOD
<div className="p-4 bg-bg">
```

### ❌ Don't Mix Styling Approaches Inconsistently

```tsx
// ❌ BAD - mixing approaches without reason
<div className="custom-card bg-blue-500" style={{ padding: '1rem' }}>

// ✅ GOOD - consistent Tailwind
<div className="bg-blue-500 p-4 rounded-lg shadow-md">
```

---

## 📚 Examples

### Button Component

```tsx
// ✅ GOOD - Tailwind-first
export function Button({ variant = 'primary', children }) {
  return (
    <button
      className={cn(
        // Base styles
        'px-6 py-3 rounded-pill font-medium transition-colors',
        // Variants
        variant === 'primary' && 'bg-accent text-surface hover:bg-accent/90',
        variant === 'secondary' &&
          'bg-surface text-ink border-2 border-border-color hover:bg-bg-alt'
      )}
    >
      {children}
    </button>
  )
}
```

### Card Component

```tsx
// ✅ GOOD - Tailwind classes
export function Card({ children, className }) {
  return (
    <div
      className={cn(
        'bg-surface rounded-2xl p-6 shadow-retro',
        'hover:shadow-retro-hover transition-shadow',
        className
      )}
    >
      {children}
    </div>
  )
}
```

---

## 🔧 When to Use Each Approach

| Scenario            | Solution                                         |
| ------------------- | ------------------------------------------------ |
| Standard button     | Tailwind classes                                 |
| Card container      | Tailwind classes                                 |
| Form input          | Tailwind classes or existing `.input-field`      |
| Dynamic positioning | Inline `style` with CSS variables                |
| Complex animation   | Framer Motion                                    |
| Simple transition   | Tailwind `transition-*` utilities                |
| Global animation    | `@keyframes` in globals.css                      |
| Color tokens        | Tailwind color classes (`bg-accent`, `text-ink`) |
| Layout spacing      | Tailwind spacing (`p-4`, `py-section`)           |

---

## ✅ Migration Strategy

**For New Components:**

- Always use Tailwind-first approach
- No new utility classes in globals.css

**For Existing Components:**

- Don't refactor working code without reason
- When touching a file, consider migrating to Tailwind
- Maintain visual consistency during migration

**Priority:**

1. New features → Tailwind only
2. Bug fixes → Keep existing approach
3. Major refactors → Consider Tailwind migration

---

## 📖 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Design Tokens](./app/globals.css) - See `:root` variables
- [cn() Utility](./lib/utils/cn.ts) - Class name merger
- [Framer Motion](https://www.framer.com/motion/) - For complex animations

---

**Remember**: Consistency > Perfection. Use Tailwind for new code, but don't break working features just to be "pure."
