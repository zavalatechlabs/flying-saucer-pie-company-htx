import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'
import { businessInfo } from '@/lib/data/business-info'

export const metadata: Metadata = {
  title: {
    default: 'Flying Saucer Pie Company - Houston\'s Best Pies Since 1967',
    template: '%s | Flying Saucer Pie Company'
  },
  description: 'The oldest family-owned bakery in Houston. Handmade fresh pies daily with no preservatives. Our pies are out of this world!',
  keywords: [
    'Houston pies',
    'pie shop Houston',
    'Flying Saucer Pie Company',
    'Houston bakery',
    'fresh pies',
    'homemade pies',
    'pie delivery Houston',
    'best pies Houston'
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
    url: 'https://flyingsaucerpieshop.com',
    title: 'Flying Saucer Pie Company - Houston\'s Best Pies Since 1967',
    description: 'The oldest family-owned bakery in Houston. Handmade fresh pies daily with no preservatives. Our pies are out of this world!',
    siteName: 'Flying Saucer Pie Company',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flying Saucer Pie Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flying Saucer Pie Company - Houston\'s Best Pies Since 1967',
    description: 'The oldest family-owned bakery in Houston. Handmade fresh pies daily with no preservatives.',
    images: ['/og-image.jpg'],
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
    url: 'https://flyingsaucerpieshop.com',
    telephone: businessInfo.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.zip,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '29.8182',
      longitude: '-95.4096'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '19:00'
      }
    ],
    servesCuisine: 'American',
    priceRange: '$$',
    image: 'https://flyingsaucerpieshop.com/og-image.jpg',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1247'
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}