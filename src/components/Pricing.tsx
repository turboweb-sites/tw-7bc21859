import { Check, Star, Phone, ArrowRight } from 'lucide-react';

const packages = [
  {
    name: 'Essential Wash',
    price: '89',
    description: 'Quick exterior hand wash and interior vacuum — perfect for regular maintenance.',
    features: [
      'Hand Wash & Dry',
      'Wheel & Tire Clean',
      'Interior Vacuum',
      'Dashboard Wipe',
      'Window Cleaning',
      'Air Freshener',
    ],
    popular: false,
  },
  {
    name: 'Full Detail',
    price: '249',
    description: 'Our most popular package — complete interior and exterior transformation.',
    features: [
      'Everything in Essential',
      'Clay Bar Treatment',
      'One-Step Polish',
      'Wax Protection',
      'Deep Interior Steam Clean',
      'Leather Conditioning',
      'Engine Bay Cleaning',
      'Trim Restoration',
    ],
    popular: true,
  },
  {
    name: 'Ceramic Pro',
    price: '499',
    description: 'Full detail plus professional ceramic coating for long-lasting protection.',
    features: [
      'Everything in Full Detail',
      'Multi-Stage Paint Correction',
      '9H Ceramic Coating',
      'Glass Ceramic Treatment',
      'Wheel Ceramic Coating',
      'Trim Ceramic Coating',
      '2-Year Warranty',
      'Maintenance Kit Included',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
            PRICING
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            TRANSPARENT <span className="text-gradient">PRICING</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Straightforward pricing for sedan/coupe. SUVs, trucks, and vans slightly higher. No hidden fees — ever.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-amber-500/10 to-transparent border-2 border-amber-500/30 shadow-2xl shadow-amber-500/10'
                  : 'glass hover:border-amber-500/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 text-xs font-bold rounded-full flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> MOST POPULAR
                </div>
              )}

              <h3 className="font-heading text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <p className="text-dark-400 text-sm mb-6">{pkg.description}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-dark-400 text-lg">from</span>
                <span className="font-heading text-5xl font-bold text-gradient">${pkg.price}</span>
              </div>

              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={16} className="text-amber-400 flex-shrink-0" />
                    <span className="text-dark-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="tel:+13475551234"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold transition-all hover:scale-105 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 hover:shadow-lg hover:shadow-amber-500/25'
                    : 'glass text-white hover:border-amber-500/30'
                }`}
              >
                <Phone size={16} />
                Book Now
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-dark-500 text-sm mt-8">

        </p>
      </div>
    </section>
  );
}