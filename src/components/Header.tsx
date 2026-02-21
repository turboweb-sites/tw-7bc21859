import { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useLocation } from 'wouter';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      if (location !== '/') {
        setLocation('/');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setLocation(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl ${
        isScrolled
          ? 'bg-dark-950/95 shadow-2xl shadow-black/20 border-b border-white/5'
          : 'bg-dark-950/70'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-3 group"
            >
              <img
                src="https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/7bc21859-2966-4bc7-88ba-1b7758c106e4/035c4d81-04a2-4846-9c62-b8a889dfd9d2/Gemini_Generated_Image_7x6v5y7x6v5y7x6v_removebg_preview_1771458102515_066c76.webp"
                alt="ScratchPro Detailing"
                className="h-24 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <span className="font-heading text-xl font-bold text-white tracking-wider group-hover:text-amber-400 transition-colors">
                  SCRATCHPRO
                </span>
                <span className="block text-[10px] text-amber-400 tracking-[0.3em] font-medium -mt-1">
                  DETAILING
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                link.label === 'Services' ? (
                  <div key={link.label} className="relative group">
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="px-4 py-2 text-sm font-medium text-dark-300 hover:text-amber-400 transition-colors relative flex items-center gap-1"
                    >
                      {link.label}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-dark-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/40 py-2 min-w-[240px]">
                        {[
                          { label: 'Ceramic Coating', href: '/services/ceramic-coating' },
                          { label: 'Window Tinting', href: '/services/window-tinting' },
                          { label: 'Paint Correction', href: '/services/paint-correction' },
                          { label: 'Interior Detailing', href: '/services/interior-detailing' },
                          { label: 'Exterior Detailing', href: '/services/exterior-detailing' },
                        ].map((subLink) => (
                          <button
                            key={subLink.label}
                            onClick={() => handleNavClick(subLink.href)}
                            className="w-full text-left px-4 py-2.5 text-sm font-medium text-dark-300 hover:text-amber-400 hover:bg-white/5 transition-all"
                          >
                            {subLink.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-4 py-2 text-sm font-medium transition-colors relative group ${
                      location === link.href ? 'text-amber-400' : 'text-dark-300 hover:text-amber-400'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-amber-400 transition-all duration-300 ${
                      location === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </button>
                )
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+13475551234"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 text-sm font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/40 shadow-lg shadow-yellow-400/30"
              >
                <Phone size={16} />
                (347) 555-1234
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg glass text-white hover:text-amber-400 transition-colors"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className={`absolute inset-0 bg-dark-950/98 transition-all duration-300 backdrop-blur-xl`} onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-20 left-0 right-0 p-6 transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-10'
        }`}>
          <nav className="flex flex-col gap-1 mb-6">
            {navLinks.map((link, index) => (
              <div key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-lg font-medium text-dark-300 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all w-full"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </button>
                {link.label === 'Services' && (
                  <div className="ml-4 border-l border-white/10 pl-2 mb-1">
                    {[
                      { label: 'Ceramic Coating', href: '/services/ceramic-coating' },
                      { label: 'Window Tinting', href: '/services/window-tinting' },
                      { label: 'Paint Correction', href: '/services/paint-correction' },
                      { label: 'Interior Detailing', href: '/services/interior-detailing' },
                      { label: 'Exterior Detailing', href: '/services/exterior-detailing' },
                    ].map((subLink, subIndex) => (
                      <button
                        key={subLink.label}
                        onClick={() => handleNavClick(subLink.href)}
                        className="text-left px-4 py-2.5 text-base font-medium text-dark-400 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all w-full"
                        style={{ animationDelay: `${(index + subIndex + 1) * 50}ms` }}
                      >
                        {subLink.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <a
            href="tel:+13475551234"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 font-bold rounded-full text-lg"
          >
            <Phone size={20} />
            (347) 555-1234
          </a>
        </div>
      </div>
    </>
  );
}