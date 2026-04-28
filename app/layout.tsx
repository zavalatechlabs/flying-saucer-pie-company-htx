import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'
import { LocationTeaser } from '@/components/sections/LocationTeaser'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { businessInfo } from '@/lib/data/business-info'
import { site } from '@/lib/config'
import { Fredoka, Pacifico, Mulish, Josefin_Sans } from 'next/font/google'

// Hero logo fonts (LOCKED - hero foreground only)
const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-fredoka',
})

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pacifico',
})

// Body font — humanist sans, warm and highly readable
const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
})

// Display font — geometric 1960s sans, complements the retro space-age aesthetic
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: {
    default: "Flying Saucer Pie Company - Houston's Best Pies Since 1967",
    template: '%s | Flying Saucer Pie Company',
  },
  description:
    'The oldest family-owned bakery in Houston. Handmade fresh pies daily with no preservatives. Our pies are out of this world!',
  keywords: [
    'Houston pies',
    'pie shop Houston',
    'Flying Saucer Pie Company',
    'Houston bakery',
    'fresh pies',
    'homemade pies',
    'pie delivery Houston',
    'best pies Houston',
  ],
  authors: [{ name: 'Flying Saucer Pie Company' }],
  creator: 'Flying Saucer Pie Company',
  publisher: 'Flying Saucer Pie Company',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    title: "Flying Saucer Pie Company - Houston's Best Pies Since 1967",
    description:
      'The oldest family-owned bakery in Houston. Handmade fresh pies daily with no preservatives. Our pies are out of this world!',
    siteName: site.name,
    images: [
      {
        url: '/social-share-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Flying Saucer Pie Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Flying Saucer Pie Company - Houston's Best Pies Since 1967",
    description:
      'The oldest family-owned bakery in Houston. Handmade fresh pies daily with no preservatives.',
    images: ['/social-share-preview.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: businessInfo.name,
    description: businessInfo.about.short,
    url: site.url,
    telephone: businessInfo.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '29.8182',
      longitude: '-95.4096',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '19:00',
      },
    ],
    servesCuisine: 'American',
    priceRange: '$$',
    image: `${site.url}/social-share-preview.jpg`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1247',
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`font-body antialiased ${fredoka.variable} ${pacifico.variable} ${mulish.variable} ${josefinSans.variable}`}
      >
        <ThemeProvider>
          {/* Global paper grain texture overlay */}
          <div className="grain-overlay" aria-hidden="true" />

          <Navigation />
          <main aria-label="Main content">{children}</main>
          <LocationTeaser />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
