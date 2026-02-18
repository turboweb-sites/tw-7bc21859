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
      <Gallery />
      <Pricing />
      <ServiceArea />
      <WhyUs />
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
            {title.split(' ')[0]} <span className="text-gradient">{title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-dark-300 text-lg max-w-2xl leading-relaxed">{description}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            WHAT'S <span className="text-gradient">INCLUDED</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl glass hover:bg-white/5 transition-all">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4 border border-amber-500/30">
                  <span className="text-amber-400 font-bold">{index + 1}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-8">
            SERVICE <span className="text-gradient">PRICING</span>
          </h2>
          <div className="space-y-4 mb-10">
            {pricing.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-xl glass">
                <span className="text-dark-300">{item.split('–')[0]}</span>
                <span className="text-amber-400 font-bold">{item.split('–')[1] || ''}</span>
              </div>
            ))}
          </div>
          <a
            href="tel:7252663030"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 font-bold text-lg rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-2xl shadow-amber-500/30"
          >
            Book Now — (725) 266-3030
          </a>
        </div>
      </section>
    </div>
  );
}

function InteriorDetailingPage() {
  return (
    <ServicePage
      title="Interior Detailing"
      subtitle="DEEP CLEAN YOUR CABIN"
      description="Our interior detailing service restores every surface inside your vehicle to like-new condition. From deep vacuuming and steam cleaning to leather conditioning and odor elimination — we leave no spot untouched."
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDrDFDDRxB9ji5662spX5RZy8_aBS8rbW2Q&s"
      features={[
        { title: 'Deep Vacuum & Steam Clean', desc: 'Every carpet fiber, seat crevice, and floor mat gets thorough attention with professional-grade steam equipment.' },
        { title: 'Leather & Upholstery Care', desc: 'Conditioning and protection for leather seats, or deep fabric cleaning for cloth interiors.' },
        { title: 'Dashboard & Console Detail', desc: 'All plastic, vinyl, and trim pieces cleaned, dressed, and protected with UV-resistant products.' },
        { title: 'Odor Elimination', desc: 'Professional ozone treatment and deodorizing to remove smoke, pet, and food odors permanently.' },
      ]}
      pricing={[
        'Sedan / Coupe – from $99',
        'SUV / Crossover – from $129',
        'Truck / Van – from $149',
        'Add Ozone Treatment – +$40',
      ]}
    />
  );
}

function ExteriorDetailingPage() {
  return (
    <ServicePage
      title="Exterior Detailing"
      subtitle="SHOWROOM SHINE"
      description="A meticulous hand wash, clay bar treatment, and protective sealant application that leaves your paint gleaming and protected."
      image="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=1200&h=600&fit=crop"
      features={[
        { title: 'Hand Wash & Dry', desc: 'Two-bucket method hand wash with pH-neutral shampoo for a swirl-free finish.' },
        { title: 'Clay Bar Treatment', desc: 'Removes embedded contaminants from the paint surface for a glass-smooth feel.' },
        { title: 'Wheel & Tire Detail', desc: 'Wheels degreased and cleaned, tires dressed with UV-protective coating.' },
        { title: 'Sealant & Trim Restoration', desc: 'Paint sealant for long-lasting protection. Faded trim pieces restored to deep black.' },
      ]}
      pricing={[
        'Sedan / Coupe – from $79',
        'SUV / Crossover – from $99',
        'Truck / Van – from $119',
        'Add Clay Bar – +$30',
      ]}
    />
  );
}

function CeramicCoatingPage() {
  return (
    <ServicePage
      title="Ceramic Coating"
      subtitle="ULTIMATE PROTECTION"
      description="Professional-grade 9H ceramic coating that provides years of protection against UV rays, chemical etching, and water spots."
      image="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1200&h=600&fit=crop"
      features={[
        { title: '9H Hardness Coating', desc: 'Industrial-grade ceramic coating that bonds to the clear coat for maximum scratch resistance.' },
        { title: 'Hydrophobic Finish', desc: 'Water beads and sheets off the surface, making washing easier and keeping your car cleaner longer.' },
        { title: 'UV & Chemical Protection', desc: 'Blocks harmful UV rays and resists damage from bird droppings, tree sap, and road chemicals.' },
        { title: '2–5 Year Durability', desc: 'Depending on the package, enjoy years of low-maintenance protection and showroom shine.' },
      ]}
      pricing={[
        '1-Year Ceramic Coating – from $299',
        '3-Year Ceramic Coating – from $599',
        '5-Year Ceramic Coating – from $899',
        'Paint Correction included with 3yr & 5yr packages',
      ]}
    />
  );
}

function PaintCorrectionPage() {
  return (
    <ServicePage
      title="Paint Correction"
      subtitle="RESTORE YOUR FINISH"
      description="Multi-stage paint correction to remove swirl marks, scratches, oxidation, and imperfections — revealing a mirror-like finish."
      image="https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&h=600&fit=crop"
      features={[
        { title: 'Swirl Mark Removal', desc: 'Machine polishing to eliminate spider-web swirl marks left by improper washing techniques.' },
        { title: 'Scratch Removal', desc: 'Light to moderate scratches buffed out using multi-stage compounding and polishing.' },
        { title: 'Oxidation Restoration', desc: 'Faded, chalky paint restored to its original color depth and clarity.' },
        { title: 'Mirror Finish', desc: 'Final stage polish brings out incredible gloss and reflection in the clear coat.' },
      ]}
      pricing={[
        'Single-Stage Correction – from $199',
        'Two-Stage Correction – from $349',
        'Multi-Stage Correction – from $499',
        'Best paired with Ceramic Coating',
      ]}
    />
  );
}

function FullDetailPage() {
  return (
    <ServicePage
      title="Full Detail"
      subtitle="COMPLETE PACKAGE"
      description="Our most popular service — a comprehensive interior and exterior detail that transforms your vehicle from top to bottom."
      image="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200&h=600&fit=crop"
      features={[
        { title: 'Complete Interior Clean', desc: 'Full vacuum, steam clean, leather conditioning, dashboard detail, and window cleaning.' },
        { title: 'Full Exterior Detail', desc: 'Hand wash, clay bar, sealant application, wheel detail, and tire dressing.' },
        { title: 'Engine Bay Cleaning', desc: 'Degreased, cleaned, and dressed for a factory-fresh look under the hood.' },
        { title: 'Final Inspection', desc: 'Quality check on every surface to ensure nothing is missed. Air freshener included.' },
      ]}
      pricing={[
        'Sedan / Coupe – from $199',
        'SUV / Crossover – from $249',
        'Truck / Van – from $279',
        'Add Ceramic Spray Sealant – +$50',
      ]}
    />
  );
}

function PremiumProtectionPage() {
  return (
    <ServicePage
      title="Premium Protection"
      subtitle="MAXIMUM DEFENSE"
      description="The ultimate protection package combining paint protection film, ceramic coating, and premium sealants for unmatched durability."
      image="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=1200&h=600&fit=crop"
      features={[
        { title: 'Paint Protection Film', desc: 'Self-healing PPF applied to high-impact areas — bumper, hood, fenders, and mirrors.' },
        { title: 'Premium Paint Sealant', desc: 'Professional-grade sealant that bonds to clear coat for months of protection and shine.' },
        { title: 'Glass Treatment', desc: 'Hydrophobic coating on all glass surfaces for improved visibility in rain.' },
        { title: 'Trim & Wheel Coating', desc: 'Ceramic-infused coating applied to trim pieces and wheels for long-lasting protection.' },
      ]}
      pricing={[
        'Glass Treatment Only – from $79',
        'Trim & Wheel Coating – from $149',
        'PPF Front-End Package – from $799',
        'Full Premium Protection – from $1,299',
      ]}
    />
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-dark-400 font-heading tracking-wider">SCRATCHPRO DETAILING</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/services/interior-detailing" component={InteriorDetailingPage} />
        <Route path="/services/exterior-detailing" component={ExteriorDetailingPage} />
        <Route path="/services/ceramic-coating" component={CeramicCoatingPage} />
        <Route path="/services/paint-correction" component={PaintCorrectionPage} />
        <Route path="/services/full-detail" component={FullDetailPage} />
        <Route path="/services/premium-protection" component={PremiumProtectionPage} />
        <Route>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="font-heading text-6xl font-bold text-white mb-4">404</h1>
              <p className="text-dark-400 mb-8">Page not found</p>
              <a href="/" className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all">
                Go Home
              </a>
            </div>
          </div>
        </Route>
      </Switch>
      <Footer />
      <ScrollToTop />
    </div>
  );
}