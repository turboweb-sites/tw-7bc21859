import { Phone, Mail, MapPin, Star } from 'lucide-react';

const quickLinks = [
  { label: 'Interior Detailing', href: '/services/interior-detailing' },
  { label: 'Exterior Detailing', href: '/services/exterior-detailing' },
  { label: 'Ceramic Coating', href: '/services/ceramic-coating' },
  { label: 'Paint Correction', href: '/services/paint-correction' },
  { label: 'Full Detail', href: '/services/full-detail' },
  { label: 'Premium Protection', href: '/services/premium-protection' },
];

const companyLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Our Services', href: '/#services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  const handleLinkClick = (href: string) => {
    if (href.startsWith('/#')) {
      const el = document.getElementById(href.replace('/#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = href;
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/7bc21859-2966-4bc7-88ba-1b7758c106e4/035c4d81-04a2-4846-9c62-b8a889dfd9d2/Gemini_Generated_Image_7x6v5y7x6v5y7x6v_removebg_preview_1771458102515_066c76.webp"
                alt="ScratchPro Detailing"
                className="h-10 w-auto object-contain"
              />
              <div>
                <span className="font-heading text-lg font-bold text-white tracking-wider">SCRATCHPRO</span>
                <span className="block text-[9px] text-amber-400 tracking-[0.3em] font-medium -mt-1">DETAILING</span>
              </div>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed mb-4">
              Professional mobile auto detailing serving Brooklyn, NY and surrounding areas within 30 miles. Premium results, every time.
            </p>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="text-amber-400" fill="currentColor" />
              ))}
              <span className="text-dark-400 text-xs ml-2">5.0 on Google</span>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Services</h3>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.href)}
                  className="block text-dark-400 text-sm hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Company</h3>
            <nav className="space-y-2">
              {companyLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.href)}
                  className="block text-dark-400 text-sm hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+13475551234" className="flex items-center gap-3 text-dark-400 text-sm hover:text-amber-400 transition-colors">
                <Phone size={16} className="text-amber-400 flex-shrink-0" />
                (347) 555-1234
              </a>
              <a href="mailto:info@scratchprodetailing.com" className="flex items-center gap-3 text-dark-400 text-sm hover:text-amber-400 transition-colors">
                <Mail size={16} className="text-amber-400 flex-shrink-0" />
                info@scratchprodetailing.com
              </a>
              <div className="flex items-start gap-3 text-dark-400 text-sm">
                <MapPin size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                Brooklyn, NY 11223<br />30-mile service radius
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            © {new Date().getFullYear()} ScratchPro Detailing. All rights reserved.
          </p>
          <p className="text-dark-600 text-xs">
            Premium Mobile Auto Detailing — Brooklyn, NY
          </p>
        </div>
      </div>
    </footer>
  );
}