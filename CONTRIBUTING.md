# Contributing to Flying Saucer Pie Company Website

Thank you for your interest in contributing! This document outlines the conventions and standards we follow.

---

## 📝 File Naming Convention

We use consistent file naming to improve discoverability and maintainability:

### **Components** (React/TSX)

Use **PascalCase** matching the exported component name:

- ✅ `Button.tsx` → exports `Button`
- ✅ `PieCard.tsx` → exports `PieCard`
- ✅ `ScrollReveal.tsx` → exports `ScrollReveal`
- ❌ `button.tsx`
- ❌ `pie-card.tsx`

### **Utilities, Data, Config** (Non-component TypeScript)

Use **kebab-case**:

- ✅ `business-info.ts`
- ✅ `pies.ts`
- ✅ `cn.ts` (utility function)
- ❌ `businessInfo.ts`
- ❌ `Pies.ts`

### **Hooks** (Custom React hooks)

Use **camelCase** starting with `use`:

- ✅ `useHeroAnimation.ts`
- ✅ `useScrollPosition.ts`
- Can also use kebab-case: `use-hero-animation.ts` (acceptable alternative)

### **Config Files**

Use **kebab-case**:

- ✅ `index.ts`
- ✅ `hero-layout.ts`

---

## 🎨 Code Formatting

We use **Prettier** for consistent code formatting. The configuration is in `.prettierrc`:

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 100,
  "endOfLine": "lf"
}
```

### **Commands:**

```bash
# Format all files
npm run format

# Check if files are formatted
npm run format:check
```

### **Editor Integration:**

Install the Prettier extension for your IDE for automatic formatting on save.

---

## 🚨 Pre-Commit Hooks

We use **Husky** + **lint-staged** to automatically lint and format code before commits.

**What runs on commit:**

- ESLint (with auto-fix)
- Prettier (auto-format)

Files are automatically fixed when you commit. If ESLint finds unfixable errors, the commit will be blocked.

---

## 🧪 TypeScript Standards

### **Strict Mode**

We enforce TypeScript strict mode with additional checks:

- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noImplicitReturns: true`
- `noUncheckedIndexedAccess: true`

### **Type Imports**

Use centralized types from `lib/types`:

```typescript
// ✅ Good
import { Pie, PieCardProps, BusinessInfo } from '@/lib/types'

// ❌ Bad - inline interfaces
interface PieCardProps {
  // ...
}
```

### **No `any`**

Never use `as any`. Use proper TypeScript types:

```typescript
// ❌ Bad
style={{ '--custom': value } as any}

// ✅ Good
style={{ '--custom': value } as React.CSSProperties}
```

---

## 🎯 Component Guidelines

### **Component Structure**

```typescript
'use client' // If needed

import { ... } from '...'

interface ComponentProps {
  // Props with JSDoc comments
}

export function Component({ prop1, prop2 }: ComponentProps) {
  // Component implementation
}
```

### **Props Typing**

- Always define prop interfaces
- Use centralized types when available
- Add JSDoc comments for complex props

### **Accessibility**

- Use semantic HTML elements
- Add `aria-label` for icon-only buttons
- Ensure keyboard navigation works
- Add proper form labels

---

## 📦 Configuration

### **Environment Variables**

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

All config is loaded from `lib/config/index.ts` with build-time validation.

### **Feature Flags**

Toggle features via environment variables:

- `NEXT_PUBLIC_ENABLE_HERO_ANIMATION`
- `NEXT_PUBLIC_ENABLE_REVIEW_ANIMATION`
- `NEXT_PUBLIC_ENABLE_SCROLL_ANIMATIONS`

---

## 🚀 Development Workflow

1. **Create a feature branch:**

   ```bash
   git checkout -b feature/my-feature
   ```

2. **Make changes** following the conventions above

3. **Format and lint:**

   ```bash
   npm run format
   npm run lint
   ```

4. **Build and test:**

   ```bash
   npm run build
   ```

5. **Commit:**

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

   (Pre-commit hooks will run automatically)

6. **Push and create PR:**
   ```bash
   git push origin feature/my-feature
   ```

---

## 🔍 Code Review Checklist

Before submitting a PR, ensure:

- [ ] Code is formatted with Prettier
- [ ] No ESLint errors
- [ ] TypeScript builds without errors
- [ ] All types are properly defined
- [ ] No `any` types used
- [ ] File naming follows conventions
- [ ] Accessibility attributes added where needed
- [ ] Environment variables added to `.env.example` if new
- [ ] Build succeeds (`npm run build`)

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Questions?** Open an issue or ask in the team channel.

Thank you for contributing! 🦞
