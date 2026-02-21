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
import GalleryPage from './pages/GalleryPage';
import PricingPage from './pages/PricingPage';
import ReviewsPage from './pages/ReviewsPage';

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
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-6">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gradient">{title.split(' ').slice(-1)}</span>
          </h1>
          <p className="text-dark-300 text-lg sm:text-xl max-w-xl leading-relaxed">{description}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover:border-amber-500/20 transition-all">
                <h3 className="font-heading text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-dark-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-8">
            STARTING <span className="text-gradient">PRICING</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricing.map((item, index) => (
              <div key={index} className="glass rounded-xl p-6 hover:border-amber-500/20 transition-all">
                <p className="text-white font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const servicePages: Record<string, ServicePageProps> = {
  'ceramic-coating': {
    title: 'Ceramic Coating',
    subtitle: 'PREMIUM PROTECTION',
    description: 'Professional-grade 9H ceramic coating that provides years of protection against UV, chemicals, and scratches. Hydrophobic finish keeps your car cleaner, longer.',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&h=800&fit=crop',
    features: [
      { title: '9H Hardness Rating', desc: 'The highest grade of ceramic coating available, providing maximum scratch resistance and durability.' },
      { title: 'Hydrophobic Finish', desc: 'Water beads and rolls off your paint, keeping your vehicle cleaner between washes.' },
      { title: 'UV Protection', desc: 'Blocks harmful UV rays that cause paint fading and oxidation over time.' },
      { title: '2–5 Year Durability', desc: 'Long-lasting protection that outlasts traditional wax by years, not months.' },
      { title: 'Chemical Resistance', desc: 'Protects against bird droppings, tree sap, acid rain, and road chemicals.' },
      { title: 'Enhanced Gloss', desc: 'Adds incredible depth and gloss to your paint that turns heads everywhere.' },
    ],
    pricing: [
      'Sedan/Coupe — from $499',
      'SUV/Crossover — from $599',
      'Truck/Van — from $699',
      'Glass Coating Add-on — $79',
      'Wheel Coating Add-on — $99',
      'Annual Maintenance — $149',
    ],
  },
  'window-tinting': {
    title: 'Window Tinting',
    subtitle: 'STYLE & PROTECTION',
    description: 'Professional window tinting using premium ceramic films. Reduce heat, block UV rays, and enhance your vehicle\'s appearance.',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1920&h=800&fit=crop',
    features: [
      { title: 'Ceramic Film Technology', desc: 'Premium ceramic tint that blocks heat without interfering with electronics or visibility.' },
      { title: '99% UV Rejection', desc: 'Protects your skin and interior from harmful ultraviolet radiation.' },
      { title: 'Heat Reduction', desc: 'Significantly reduces interior temperature, improving comfort and reducing AC load.' },
      { title: 'Glare Reduction', desc: 'Reduces blinding glare from sun and headlights for safer driving.' },
      { title: 'Privacy & Security', desc: 'Enhanced privacy for passengers and valuables inside your vehicle.' },
      { title: 'Lifetime Warranty', desc: 'Our premium films come with a lifetime warranty against bubbling, peeling, and fading.' },
    ],
    pricing: [
      'Full Car (5 windows) — from $249',
      'SUV/Crossover — from $299',
      'Windshield Strip — $49',
      'Full Windshield — $199',
      'Sunroof — $79',
    ],
  },
  'paint-correction': {
    title: 'Paint Correction',
    subtitle: 'RESTORE YOUR FINISH',
    description: 'Multi-stage machine polishing to remove swirl marks, scratches, oxidation, and restore your paint to a flawless mirror finish.',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1920&h=800&fit=crop',
    features: [
      { title: 'Paint Depth Measurement', desc: 'We measure your paint thickness before starting to ensure safe correction without burning through.' },
      { title: 'Multi-Stage Correction', desc: 'Up to three stages of machine polishing with progressively finer compounds for perfect results.' },
      { title: 'Swirl Mark Removal', desc: 'Eliminates circular scratches caused by improper washing techniques and automatic car washes.' },
      { title: 'Scratch Leveling', desc: 'Removes light to moderate scratches, water spots, and etching from your clear coat.' },
      { title: 'LED Light Inspection', desc: 'Every panel is inspected under professional LED lighting to ensure 100% defect removal.' },
      { title: 'Sealant Protection', desc: 'After correction, we apply a premium sealant or coating to protect your newly perfected paint.' },
    ],
    pricing: [
      'Single-Stage (Light) — from $299',
      'Two-Stage (Moderate) — from $449',
      'Three-Stage (Heavy) — from $599',
      'SUV Surcharge — +$100–150',
      'Ceramic Coating Add-on — from $399',
    ],
  },
  'interior-detailing': {
    title: 'Interior Detailing',
    subtitle: 'DEEP CLEAN & REFRESH',
    description: 'Complete interior transformation — steam cleaning, leather conditioning, carpet shampooing, and odor elimination for a fresh, showroom feel.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDrDFDDRxB9ji5662spX5RZy8_aBS8rbW2Q&s',
    features: [
      { title: 'Steam Cleaning', desc: 'High-temperature steam sanitizes and deep-cleans every surface without harsh chemicals.' },
      { title: 'Leather Care', desc: 'Professional cleaning and conditioning to restore softness and prevent cracking.' },
      { title: 'Carpet & Mat Shampoo', desc: 'Hot water extraction removes deep stains, dirt, and allergens from carpet fibers.' },
      { title: 'Dashboard & Console', desc: 'Detailed cleaning of every button, vent, and crevice with UV protectant application.' },
      { title: 'Odor Elimination', desc: 'Enzyme treatment and ozone therapy to permanently remove smoke, pet, and food odors.' },
      { title: 'Glass & Mirrors', desc: 'Streak-free interior glass cleaning for crystal-clear visibility.' },
    ],
    pricing: [
      'Sedan/Coupe — from $129',
      'SUV/Crossover — from $159',
      'Truck/Van — from $179',
      'Pet Hair Removal — +$39–59',
      'Ozone Treatment — +$49',
    ],
  },
  'exterior-detailing': {
    title: 'Exterior Detailing',
    subtitle: 'SHINE & PROTECT',
    description: 'Professional hand wash, clay bar decontamination, polishing, and wax protection to make your paint shine like new.',
    image: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=1920&h=800&fit=crop',
    features: [
      { title: 'Hand Wash & Dry', desc: 'Gentle two-bucket method hand wash using pH-neutral soap to safely clean your paint.' },
      { title: 'Clay Bar Treatment', desc: 'Removes embedded contaminants like industrial fallout, tree sap, and overspray.' },
      { title: 'Wheel & Tire Detail', desc: 'Deep cleaning of wheels, wheel wells, and premium tire dressing application.' },
      { title: 'Paint Sealant / Wax', desc: 'Premium wax or sealant application for lasting shine and protection.' },
      { title: 'Trim Restoration', desc: 'Restores faded black plastic trim to its original rich, dark appearance.' },
      { title: 'Glass Treatment', desc: 'Exterior glass cleaning and optional hydrophobic rain-repellent coating.' },
    ],
    pricing: [
      'Essential Wash — from $89',
      'Wash + Clay + Wax — from $149',
      'Full Exterior Detail — from $199',
      'SUV Surcharge — +$30–50',
      'Headlight Restoration — +$49–79',
    ],
  },
  'full-detail': {
    title: 'Full Detail Package',
    subtitle: 'THE COMPLETE TREATMENT',
    description: 'Our most popular service — a comprehensive interior and exterior detail that transforms your vehicle from top to bottom.',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&h=800&fit=crop',
    features: [
      { title: 'Complete Interior', desc: 'Full vacuum, steam clean, leather/fabric conditioning, dashboard detail, and odor treatment.' },
      { title: 'Complete Exterior', desc: 'Hand wash, clay bar, machine polish, wax/sealant, wheels, tires, and trim restoration.' },
      { title: 'Engine Bay Cleaning', desc: 'Degreasing, steam cleaning, and dressing of the engine compartment.' },
      { title: 'Door Jambs & Trunk', desc: 'Often overlooked areas get the same attention as the rest of the vehicle.' },
      { title: 'Before & After Photos', desc: 'Professional documentation so you can see the full transformation.' },
      { title: 'Final LED Inspection', desc: 'Every panel and surface inspected under LED lighting to ensure perfection.' },
    ],
    pricing: [
      'Sedan/Coupe — from $249',
      'SUV/Crossover — from $299',
      'Truck/Van — from $349',
      'Add Ceramic Coating — from $399',
      'Add Paint Correction — from $299',
    ],
  },
  'premium-protection': {
    title: 'Premium Protection',
    subtitle: 'ULTIMATE DEFENSE',
    description: 'The ultimate protection package — paint protection film, ceramic coating, and premium sealants for total vehicle defense.',
    image: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=1920&h=800&fit=crop',
    features: [
      { title: 'Paint Protection Film', desc: 'Self-healing PPF on high-impact areas protects against rock chips, scratches, and road debris.' },
      { title: 'Ceramic Coating', desc: 'Professional 9H ceramic coating over PPF and exposed paint for double protection.' },
      { title: 'Glass Treatment', desc: 'Hydrophobic windshield and window treatment for improved visibility in rain.' },
      { title: 'Interior Protection', desc: 'Fabric and leather coatings that repel stains, spills, and UV damage.' },
      { title: 'Wheel & Caliper Coating', desc: 'Ceramic coating on wheels and brake calipers for easy cleaning and heat resistance.' },
      { title: '5-Year Warranty', desc: 'Comprehensive warranty covering coating failure, PPF yellowing, and defects.' },
    ],
    pricing: [
      'Partial Front PPF + Ceramic — from $1,499',
      'Full Front PPF + Ceramic — from $2,499',
      'Full Body PPF + Ceramic — from $4,999',
      'SUV Surcharge — +$300–500',
      'Annual Maintenance Plan — $249/year',
    ],
  },
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-dark-400 text-sm">Loading ScratchPro...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/reviews" component={ReviewsPage} />
        {Object.entries(servicePages).map(([slug, props]) => (
          <Route key={slug} path={`/services/${slug}`}>
            {() => <ServicePage {...props} />}
          </Route>
        ))}
        <Route>
          {() => (
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="font-heading text-6xl font-bold text-gradient mb-4">404</h1>
                <p className="text-dark-400 text-lg mb-8">Page not found</p>
                <a href="/" className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 font-bold rounded-full">
                  Go Home
                </a>
              </div>
            </div>
          )}
        </Route>
      </Switch>
      <Footer />
      <ScrollToTop />
    </div>
  );
}