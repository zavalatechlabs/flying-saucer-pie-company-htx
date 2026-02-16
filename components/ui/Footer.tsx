import Link from 'next/link'
import { businessInfo } from '@/lib/data/business-info'
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react'
import { SaucerIcon } from './SaucerIcon'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer aria-label="Site footer" className="bg-ink text-surface py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <SaucerIcon size={48} />
              <div>
                <h3 className="text-xl font-display font-bold text-surface">Flying Saucer</h3>
                <p className="text-xs text-surface/60 font-display">Pie Company</p>
              </div>
            </div>
            <p className="text-sm text-surface/80 leading-relaxed font-body">
              {businessInfo.tagline}
            </p>
            <p className="text-xs text-surface/60 mt-3 font-display font-medium">
              Houston Strong Since {businessInfo.established}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-surface">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Menu', 'About', 'Location', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-surface/70 hover:text-accent transition-colors text-sm font-body"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about#faq"
                  className="text-surface/70 hover:text-accent transition-colors text-sm font-body"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-surface">Find Us</h4>
            <div className="space-y-3 text-sm font-body">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div className="text-surface/80 leading-relaxed">
                  <p>{businessInfo.address.street}</p>
                  <p>{businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a 
                  href={`tel:${businessInfo.phone}`} 
                  className="hover:text-accent transition-colors text-surface/80"
                >
                  {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div className="text-surface/80 leading-relaxed">
                  <p className="font-medium">Tuesday - Saturday</p>
                  <p>8:00 AM - 7:00 PM</p>
                  <p className="text-xs text-surface/60 mt-1">Closed Sun & Mon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-surface">Stay Connected</h4>
            <p className="text-sm text-surface/70 mb-4 leading-relaxed font-body">
              Follow us for daily pie updates and special announcements!
            </p>
            <div className="flex gap-3">
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-surface/10 rounded-full hover:bg-accent 
                         transition-all duration-200 hover:scale-110"
                aria-label="Visit us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-surface/10 rounded-full hover:bg-accent 
                         transition-all duration-200 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-surface/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-surface/60 font-body">
            <p>© {currentYear} Flying Saucer Pie Company. All pies reserved.</p>
            <p className="flex items-center gap-2 font-display">
              <SaucerIcon size={20} />
              Powered by Space City Love
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
