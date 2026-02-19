import { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useLocation } from 'wouter';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Reviews', href: '/#testimonials' },
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-950/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/5'
          : 'bg-transparent'
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
                className="h-12 w-auto object-contain"
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
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-dark-300 hover:text-amber-400 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+13475551234"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 text-sm font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
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
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-dark-950/98 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-20 left-0 right-0 p-6 transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-10'
        }`}>
          <nav className="flex flex-col gap-1 mb-6">
            {navLinks.map((link, index) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-lg font-medium text-dark-300 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </button>
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