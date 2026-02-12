import Link from 'next/link'
import { businessInfo } from '@/lib/data/business-info'
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react'
import { SaucerIcon } from './SaucerIcon'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-deep-navy text-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <SaucerIcon size={48} />
              <div>
                <h3 className="text-xl font-bold text-warm-cream">Flying Saucer</h3>
                <p className="text-xs text-warm-cream/60">Pie Company</p>
              </div>
            </div>
            <p className="text-sm text-warm-cream/80 leading-relaxed">
              {businessInfo.tagline}
            </p>
            <p className="text-xs text-warm-cream/60 mt-3 font-medium">
              Houston Strong Since {businessInfo.established}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-warm-cream">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Menu', 'About', 'Location', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-warm-cream/70 hover:text-sunset-orange transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about#faq"
                  className="text-warm-cream/70 hover:text-sunset-orange transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-warm-cream">Find Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-sunset-orange mt-0.5 flex-shrink-0" />
                <div className="text-warm-cream/80 leading-relaxed">
                  <p>{businessInfo.address.street}</p>
                  <p>{businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={18} className="text-sunset-orange flex-shrink-0" />
                <a 
                  href={`tel:${businessInfo.phone}`} 
                  className="hover:text-sunset-orange transition-colors text-warm-cream/80"
                >
                  {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={18} className="text-sunset-orange mt-0.5 flex-shrink-0" />
                <div className="text-warm-cream/80 leading-relaxed">
                  <p className="font-medium">Tuesday - Saturday</p>
                  <p>8:00 AM - 7:00 PM</p>
                  <p className="text-xs text-warm-cream/60 mt-1">Closed Sun & Mon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-warm-cream">Stay Connected</h4>
            <p className="text-sm text-warm-cream/70 mb-4 leading-relaxed">
              Follow us for daily pie updates and special announcements!
            </p>
            <div className="flex gap-3">
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-warm-cream/10 rounded-full hover:bg-sunset-orange 
                         transition-all duration-200 hover:scale-110"
                aria-label="Visit us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-warm-cream/10 rounded-full hover:bg-sunset-orange 
                         transition-all duration-200 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-warm-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-warm-cream/60">
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
