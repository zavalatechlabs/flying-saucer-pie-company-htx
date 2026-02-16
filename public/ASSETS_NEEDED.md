# Missing Assets - To Be Created

The following assets need to be generated for proper SEO and branding:

## 🖼️ Open Graph Image (og-image.jpg)

**Location:** `/public/og-image.jpg`  
**Dimensions:** 1200px × 630px  
**Format:** JPG or PNG  
**Purpose:** Social media previews (Facebook, Twitter, LinkedIn, etc.)

**Content Suggestions:**

- Flying Saucer Pie Company logo
- Tagline: "Our Pies Are Out Of This World!"
- Background: Retro space-age diner theme colors (cream, terracotta)
- Overhead pie photo (optional)

**Tools:**

- Figma
- Canva
- Photoshop
- https://www.opengraph.xyz/

---

## 🌐 Favicon Set

**Required Sizes:**

- `favicon.ico` (16x16, 32x32, 48x48 multi-size ICO file)
- `apple-touch-icon.png` (180x180) - iOS home screen icon
- `favicon-16x16.png` (16x16)
- `favicon-32x32.png` (32x32)
- `favicon-192x192.png` (192x192) - Android Chrome
- `favicon-512x512.png` (512x512) - Android Chrome

**Design:**

- Use the Flying Saucer icon from `/public/brand/saucer.svg`
- Background: Transparent or theme color (#FFF8F0 - warm cream)
- Keep it simple and recognizable at small sizes

**Tools:**

- https://realfavicongenerator.net/ (upload 512x512 PNG, generates all sizes)
- https://favicon.io/
- Figma/Sketch/Illustrator

---

## 📝 Implementation Checklist

Once assets are created:

### 1. Add Images to Public Folder

```bash
public/
├── og-image.jpg              # Social media preview
├── favicon.ico               # Browser tab icon (multi-size)
├── apple-touch-icon.png      # iOS home screen
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-192x192.png
└── favicon-512x512.png
```

### 2. Update app/layout.tsx

```typescript
export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/favicon-512x512.png',
      },
    ],
  },
  // OG image already referenced in existing metadata
}
```

### 3. Create Web App Manifest (Optional)

```json
// public/manifest.json
{
  "name": "Flying Saucer Pie Company",
  "short_name": "Flying Saucer",
  "description": "Houston's Best Pies Since 1967",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FFF8F0",
  "theme_color": "#D4856A",
  "icons": [
    {
      "src": "/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## 🎨 Design Guidelines

**Color Palette:**

- Background: #FFF8F0 (warm cream)
- Accent: #D4856A (terracotta)
- Ink: #1A1A2E (deep navy)
- Surface: #FFFFFF (white)

**Fonts:**

- Display: Outfit
- Body: DM Sans
- Hero Logo: Fredoka + Pacifico

**Style:**

- Retro Space-Age Diner theme
- Playful but professional
- Warm, inviting, nostalgic

---

## ✅ Testing After Implementation

1. **Social Media Preview:**
   - Share link on Facebook/Twitter/LinkedIn
   - Use https://www.opengraph.xyz/ to preview
   - Check https://cards-dev.twitter.com/validator

2. **Favicon Display:**
   - Check browser tab icon
   - Check iOS home screen (add to home screen)
   - Check Android Chrome (add to home screen)
   - Check various browsers (Chrome, Firefox, Safari, Edge)

3. **PWA Readiness (if manifest added):**
   - Check Lighthouse PWA score
   - Test "Add to Home Screen" functionality

---

**Status:** ⏳ Assets need to be created by designer  
**Priority:** Medium (affects SEO and branding)  
**Estimated Time:** 1-2 hours design work
