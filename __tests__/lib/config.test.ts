import { describe, it, expect } from 'vitest'
import { config, site, contact } from '@/lib/config'

describe('Config', () => {
  it('has required site configuration', () => {
    expect(config.site.url).toBeDefined()
    expect(config.site.name).toBeDefined()
  })

  it('has contact information', () => {
    expect(contact.phone).toBeDefined()
    expect(contact.email).toBeDefined()
  })

  it('has feature flags', () => {
    expect(typeof config.features.heroAnimation).toBe('boolean')
    expect(typeof config.features.scrollAnimations).toBe('boolean')
  })
})
