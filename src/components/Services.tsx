import { useState } from 'react';
import { SprayCan, Car, Shield, Paintbrush, Droplets, Star, ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';

const services = [
  {
    icon: SprayCan,
    title: 'Interior Detailing',
    description: 'Deep cleaning of seats, carpets, dashboard, and all interior surfaces. Steam cleaning, leather conditioning, and odor elimination included.',
    features: ['Vacuum & Steam Clean', 'Leather Conditioning', 'Dashboard & Console Detail', 'Odor Elimination'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDrDFDDRxB9ji5662spX5RZy8_aBS8rbW2Q&s',
    href: '/services/interior-detailing',
  },
  {
    icon: Droplets,
    title: 'Exterior Wash & Detail',
    description: 'Hand wash, clay bar treatment, wheel cleaning, and tire dressing. Your car will look like it just rolled off the showroom floor.',
    features: ['Hand Wash & Dry', 'Clay Bar Treatment', 'Wheel & Tire Detail', 'Trim Restoration'],
    image: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=600&h=400&fit=crop',
    href: '/services/exterior-detailing',
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    description: 'Long-lasting protection for your paint with professional-grade ceramic coating. Hydrophobic finish that repels water, dirt, and UV rays.',
    features: ['9H Ceramic Coating', 'UV Protection', 'Hydrophobic Finish', '2-5 Year Durability'],
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=400&fit=crop',
    href: '/services/ceramic-coating',
  },
  {
    icon: Paintbrush,
    title: 'Paint Correction',
    description: 'Multi-stage paint correction to remove swirl marks, scratches, oxidation, and restore your paint to a mirror finish.',
    features: ['Swirl Mark Removal', 'Scratch Removal', 'Multi-Stage Polish', 'Mirror Finish'],
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop',
    href: '/services/paint-correction',
  },
  {
    icon: Car,
    title: 'Full Detail Package',
    description: 'Complete interior and exterior detailing — our most popular service. The full treatment for vehicles that deserve the best.',
    features: ['Full Interior Clean', 'Full Exterior Detail', 'Engine Bay Cleaning', 'Final Inspection'],
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=400&fit=crop',
    href: '/services/full-detail',
  },
  {
    icon: Star,
    title: 'Premium Protection',
    description: 'Paint protection film (PPF), window tinting consultation, and premium sealant application for ultimate vehicle protection.',
    features: ['PPF Installation', 'Paint Sealant', 'Glass Treatment', 'Trim Coating'],
    image: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=600&h=400&fit=crop',
    href: '/services/premium-protection',
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [, setLocation] = useLocation();

  const handleServiceClick = (href: string) => {
    setLocation(href);
    window.scrollTo(0, 0);
  };

  return (
    <section id="services" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
            OUR SERVICES
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            WHAT WE <span className="text-gradient">OFFER</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            From quick exterior washes to complete ceramic coating packages — we have the right service for every vehicle and budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleServiceClick(service.href)}
              >
                {/* Card Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-dark-950/40 group-hover:from-dark-950 group-hover:via-dark-950/90" />
                </div>

                {/* Card Content */}
                <div className="relative p-8 min-h-[380px] flex flex-col justify-end">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4 border border-amber-500/30 group-hover:bg-amber-500/30 transition-colors">
                    <Icon size={28} className="text-amber-400" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-dark-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className={`space-y-2 transition-all duration-500 ${
                    hoveredIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-dark-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mt-4 text-amber-400 text-sm font-semibold group-hover:gap-3 transition-all">
                    View Details <ArrowRight size={16} />
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-amber-500/30 transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}