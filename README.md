# 🛸 Flying Saucer Pie Company Website

A modern, space-themed website for Houston's oldest family-owned bakery, serving handmade pies since 1967.

## 🌟 Features

### Customer Experience

- **Beautiful Design**: Space-themed animations and UFO delivery effects
- **Mobile-First**: Fully responsive design optimized for phones
- **Fast Performance**: 95+ PageSpeed score with optimized images
- **Online Ordering**: Full e-commerce with Stripe integration (coming soon)
- **Real-Time Availability**: See which pies are available now

### Business Features

- **Menu Management**: Easy updates via CMS
- **Order Management**: Dashboard for staff to manage orders
- **Analytics**: Track popular pies and peak times
- **SEO Optimized**: Structured data for local search dominance
- **Holiday Mode**: Special hours and Thanksgiving information

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: PostgreSQL (Neon)
- **ORM**: Prisma
- **Payments**: Stripe
- **Email**: Resend
- **Hosting**: Vercel

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/flying-saucer-pie.git
cd flying-saucer-pie
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🏗️ Project Structure

```
flying-saucer-pie/
├── app/                    # Next.js app directory (pages & API)
│   ├── (routes)/          # Page routes
│   └── api/               # API endpoints
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── sections/         # Page sections
│   └── features/         # Feature components
├── lib/                  # Utilities and data
│   ├── data/            # Business data and pie menu
│   ├── utils/           # Helper functions
│   └── api/             # API helpers
├── public/              # Static assets
└── styles/              # Global styles
```

## 🎨 Design System

### Colors

- **Space Night**: Deep blue (#0B1929) - Primary brand
- **Cosmic Orange**: Vibrant orange (#FF6B35) - CTAs
- **Pie Crust**: Golden brown (#D4A574) - Accents
- **Cream**: Warm whites for backgrounds

### Typography

- **Headers**: Space Grotesk
- **Body**: Inter
- **Monospace**: JetBrains Mono

### Animations

- UFO delivery animations
- Floating pie effects
- Steam rising from fresh pies
- Constellation ingredient maps

## 🌐 Pages

- **Home** (`/`): Hero, features, menu preview
- **Menu** (`/menu`): Full pie catalog with filtering
- **About** (`/about`): Our story, FAQ, holiday info
- **Location** (`/location`): Map, hours, directions
- **Contact** (`/contact`): Contact form and info

## 📱 Progressive Web App

The site works offline and can be installed as an app:

- Service worker for offline functionality
- App manifest for installation
- Push notifications for order updates

## 🔒 Security

- Input validation on all forms
- Rate limiting on API routes
- Secure payment processing via Stripe
- HTTPS enforced
- Security headers configured

## 📈 Performance

- Server-side rendering for fast initial load
- Image optimization with Next.js
- Lazy loading for below-fold content
- Code splitting by route
- CDN distribution via Vercel

## 🚢 Deployment

The site automatically deploys to Vercel on push to main:

```bash
git add .
git commit -m "your changes"
git push origin main
```

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is proprietary to Flying Saucer Pie Company.

---

Made with 🥧 and ❤️ in Houston, Texas
