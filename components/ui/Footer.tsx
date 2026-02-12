import Link from 'next/link'
import { businessInfo } from '@/lib/data/business-info'
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react'
import { SaucerIcon } from './SaucerIcon'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-space-night text-cream-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <SaucerIcon size={48} />
              <div>
                <h3 className="text-xl font-bold">Flying Saucer</h3>
                <p className="text-xs text-cream-white/60">Pie Company</p>
              </div>
            </div>
            <p className="text-sm text-cream-white/80">
              {businessInfo.tagline}
            </p>
            <p className="text-xs text-cream-white/60 mt-2">
              Houston Strong Since {businessInfo.established}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Menu', 'About', 'Location', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-cream-white/70 hover:text-cosmic-orange transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about#faq"
                  className="text-cream-white/70 hover:text-cosmic-orange transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Find Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-cosmic-orange mt-0.5" />
                <div>
                  <p>{businessInfo.address.street}</p>
                  <p>{businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-cosmic-orange" />
                <a href={`tel:${businessInfo.phone}`} className="hover:text-cosmic-orange transition-colors">
                  {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="text-cosmic-orange mt-0.5" />
                <div>
                  <p>Tuesday - Saturday</p>
                  <p>8:00 AM - 7:00 PM</p>
                  <p className="text-xs text-cream-white/60 mt-1">Closed Sun & Mon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm text-cream-white/70 mb-4">
              Follow us for daily pie updates and special announcements!
            </p>
            <div className="flex gap-3">
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cream-white/10 rounded-full hover:bg-cosmic-orange transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cream-white/10 rounded-full hover:bg-cosmic-orange transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream-white/60">
            <p>© {currentYear} Flying Saucer Pie Company. All pies reserved.</p>
            <p className="flex items-center gap-2">
              <SaucerIcon size={20} />
              Powered by Space City Love
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}