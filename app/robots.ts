import { MetadataRoute } from 'next'
import { site } from '@/lib/config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/'],
    },
    sitemap: `${site.url}/sitemap.xml`,
  }
}
