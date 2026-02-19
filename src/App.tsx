import { useState, useEffect } from 'react';
import { Route, Switch } from 'wouter';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import ServiceArea from './components/ServiceArea';
import Testimonials from './components/Testimonials';
import WhyUs from './components/WhyUs';
import BookingCTA from './components/BookingCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Gallery />
      <Pricing />
      <ServiceArea />
      <Testimonials />
      <BookingCTA />
      <Contact />
    </>
  );
}

interface ServiceFeature {
  title: string;
  desc: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: ServiceFeature[];
  pricing: string[];
}

function ServicePage({ title, subtitle, description, image, features, pricing }: ServicePageProps) {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
            {subtitle}
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-dark-300 text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            WHAT'S <span className="text-gradient">INCLUDED</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-8">
            PRICING
          </h2>
          <div className="glass rounded-2xl p-8">
            {pricing.map((line, index) => (
              <p key={index} className="text-dark-300 text-lg mb-2">{line}</p>
            ))}
            <a
              href="tel:+13475551234"
              className="inline-flex items-center gap-2 mt-6 px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all"
            >
              Call for a Quote
            </a>
          </div>
        </div>
      </section>

      <BookingCTA />
      <Contact />
    </div>
  );
}

const servicePages = [
  {
    path: '/services/interior-detailing',
    title: 'INTERIOR DETAILING',
    subtitle: 'PREMIUM SERVICE',
    description: 'Complete deep cleaning of every interior surface. We use professional-grade steam cleaners, UV sanitizers, and premium leather conditioners to restore your cabin to like-new condition.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDrDFDDRxB9ji5662spX5RZy8_aBS8rbW2Q&s',
    features: [
      { title: 'Deep Vacuum & Steam', desc: 'Professional extraction of dirt, debris, and allergens from every surface including seats, carpets, and floor mats.' },
      { title: 'Leather Care', desc: 'Cleaning, conditioning, and UV protection for all leather surfaces to prevent cracking and fading.' },
      { title: 'Dashboard & Console', desc: 'Detailed cleaning and dressing of all plastic, vinyl, and trim surfaces with UV protection.' },
      { title: 'Glass Cleaning', desc: 'Streak-free interior glass cleaning for crystal clear visibility.' },
      { title: 'Odor Elimination', desc: 'Professional ozone treatment and enzyme-based odor removal for a fresh, clean cabin.' },
      { title: 'Trunk Detailing', desc: 'Complete trunk cleaning including carpet extraction, panel cleaning, and organization.' },
    ],
    pricing: ['Sedan / Coupe — from $149', 'SUV / Crossover — from $179', 'Truck / Van — from $199', 'Add pet hair removal — $50'],
  },
  {
    path: '/services/exterior-detailing',
    title: 'EXTERIOR DETAILING',
    subtitle: 'SHOWROOM FINISH',
    description: 'A meticulous hand wash and detail that brings your vehicle\'s exterior back to showroom condition. Clay bar, polish, and premium wax for lasting protection.',
    image: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=800&h=600&fit=crop',
    features: [
      { title: 'Hand Wash & Dry', desc: 'Two-bucket method hand wash with pH-neutral shampoo and microfiber drying for a swirl-free finish.' },
      { title: 'Clay Bar Treatment', desc: 'Remove embedded contaminants from paint for a glass-smooth surface.' },
      { title: 'Wheel & Tire Detail', desc: 'Deep clean of wheels, calipers, and wheel wells. Tire dressing for a rich black finish.' },
      { title: 'Trim Restoration', desc: 'Restore faded plastic and rubber trim to like-new dark appearance.' },
      { title: 'Wax & Sealant', desc: 'Premium carnauba wax or synthetic sealant for up to 3 months of protection and shine.' },
      { title: 'Glass Treatment', desc: 'Water-repellent coating on all exterior glass for improved visibility in rain.' },
    ],
    pricing: ['Sedan / Coupe — from $129', 'SUV / Crossover — from $159', 'Truck / Van — from $179', 'Add clay bar treatment — $40'],
  },
  {
    path: '/services/ceramic-coating',
    title: 'CERAMIC COATING',
    subtitle: 'ULTIMATE PROTECTION',
    description: 'Professional-grade 9H ceramic coating that provides years of protection. Hydrophobic, UV-resistant, and incredibly glossy — the ultimate paint protection.',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&h=600&fit=crop',
    features: [
      { title: '9H Hardness', desc: 'Industry-leading 9H rated ceramic coating for maximum scratch resistance and durability.' },
      { title: 'Hydrophobic Finish', desc: 'Water beads and rolls off effortlessly, keeping your car cleaner for longer.' },
      { title: 'UV Protection', desc: 'Blocks harmful UV rays to prevent paint oxidation, fading, and chalking.' },
      { title: 'Chemical Resistance', desc: 'Protects against bird droppings, tree sap, acid rain, and road salt damage.' },
      { title: 'Paint Correction First', desc: 'Full multi-stage paint correction included before coating for a flawless base.' },
      { title: '2-5 Year Warranty', desc: 'Professional application with warranty coverage for long-term peace of mind.' },
    ],
    pricing: ['1-Year Coating — from $499', '3-Year Coating — from $799', '5-Year Coating — from $1,199', 'Full vehicle PPF + Ceramic — Custom quote'],
  },
  {
    path: '/services/paint-correction',
    title: 'PAINT CORRECTION',
    subtitle: 'MIRROR FINISH',
    description: 'Multi-stage machine polishing to eliminate swirl marks, scratches, water spots, and oxidation. We restore your paint to a deep, mirror-like finish.',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=600&fit=crop',
    features: [
      { title: 'Paint Assessment', desc: 'Detailed inspection under LED lighting to map out all paint defects and create a correction plan.' },
      { title: 'Single-Stage Polish', desc: 'Remove light swirl marks and minor scratches with a one-step polish for 70%+ defect removal.' },
      { title: 'Multi-Stage Correction', desc: 'Two or three-stage compounding and polishing for 90-95%+ defect removal.' },
      { title: 'Wet Sanding', desc: 'For deep scratches and severe orange peel — wet sanding followed by multi-stage polish.' },
      { title: 'IPA Wipedown', desc: 'Isopropyl alcohol wipe to reveal the true corrected finish without filler residue.' },
      { title: 'Final Protection', desc: 'Sealant or ceramic coating application to lock in the corrected finish.' },
    ],
    pricing: ['Single-Stage — from $299', 'Two-Stage Correction — from $499', 'Three-Stage Correction — from $699', 'Wet sand + correction — from $899'],
  },
  {
    path: '/services/full-detail',
    title: 'FULL DETAIL PACKAGE',
    subtitle: 'COMPLETE TRANSFORMATION',
    description: 'Our most popular service — a comprehensive interior and exterior detail that covers every inch of your vehicle. The ultimate refresh.',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=600&fit=crop',
    features: [
      { title: 'Full Interior Detail', desc: 'Complete deep cleaning of all interior surfaces including steam, extraction, and conditioning.' },
      { title: 'Full Exterior Detail', desc: 'Hand wash, clay bar, polish, and wax for a complete exterior transformation.' },
      { title: 'Engine Bay Cleaning', desc: 'Safe degreasing and detailing of the engine bay for a clean and impressive look.' },
      { title: 'Wheel & Tire Package', desc: 'Deep cleaning, decontamination, and protection for wheels, tires, and wheel wells.' },
      { title: 'Glass Treatment', desc: 'Interior and exterior glass cleaning with hydrophobic coating application.' },
      { title: 'Final Inspection', desc: 'Walk-around inspection under LED lighting to ensure every detail meets our standards.' },
    ],
    pricing: ['Sedan / Coupe — from $249', 'SUV / Crossover — from $299', 'Truck / Van — from $349', 'Add ceramic spray sealant — $79'],
  },
  {
    path: '/services/premium-protection',
    title: 'PREMIUM PROTECTION',
    subtitle: 'ULTIMATE DEFENSE',
    description: 'The highest level of vehicle protection combining paint protection film, ceramic coating, and premium sealants for total peace of mind.',
    image: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=800&h=600&fit=crop',
    features: [
      { title: 'Paint Protection Film', desc: 'Self-healing TPU film that protects against rock chips, scratches, and road debris.' },
      { title: 'Ceramic Coating', desc: '9H professional ceramic coating over PPF or paint for hydrophobic, glossy protection.' },
      { title: 'Glass Coating', desc: 'Ceramic glass treatment for extreme water repellency and improved night visibility.' },
      { title: 'Wheel Coating', desc: 'Ceramic coating for wheels to prevent brake dust bonding and make cleaning effortless.' },
      { title: 'Trim & Plastic Coating', desc: 'Long-lasting coating on all exterior trim to prevent fading and yellowing.' },
      { title: 'Maintenance Kit', desc: 'Premium maintenance kit included with pH-neutral wash, detail spray, and microfiber towels.' },
    ],
    pricing: ['Partial Front PPF — from $799', 'Full Front PPF — from $1,499', 'Full Body PPF — from $4,999', 'PPF + Ceramic Combo — Custom quote'],
  },
];

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-dark-950 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          {servicePages.map((service) => (
            <Route key={service.path} path={service.path}>
              <ServicePage
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                image={service.image}
                features={service.features}
                pricing={service.pricing}
              />
            </Route>
          ))}
          <Route>
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="font-heading text-6xl font-bold text-white mb-4">404</h1>
                <p className="text-dark-400 text-lg mb-8">Page not found</p>
                <a href="/" className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all">
                  Go Home
                </a>
              </div>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;