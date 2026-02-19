import { Shield, Clock, Droplets, Award, Star, Truck, Sparkles, CheckCircle } from 'lucide-react';

const reasons = [
  {
    icon: Truck,
    title: 'We Come To You',
    description: 'Fully mobile service — we bring professional-grade equipment and products right to your location.',
    highlight: 'FREE travel within 30 miles',
  },
  {
    icon: Award,
    title: 'Certified Detailers',
    description: 'Our technicians are IDA-certified with years of experience working on all vehicle types.',
    highlight: 'Trained professionals',
  },
  {
    icon: Shield,
    title: 'Insured & Bonded',
    description: 'Fully insured business for your complete peace of mind. Your vehicle is always protected.',
    highlight: 'Full liability coverage',
  },
  {
    icon: Sparkles,
    title: 'Premium Products',
    description: 'We use only top-tier products from brands like Gtechniq, CarPro, and Chemical Guys.',
    highlight: 'Professional-grade only',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Same-day availability, evenings, and weekends. We work around your schedule, not the other way around.',
    highlight: '7 days a week',
  },
  {
    icon: Droplets,
    title: 'Eco-Friendly',
    description: 'Water-saving rinseless wash techniques and biodegradable products that are safe for the environment.',
    highlight: 'Green detailing',
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[200px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
            WHY CHOOSE US
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            THE SCRATCHPRO <span className="text-gradient">DIFFERENCE</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            We're not just another detailing service. Here's what sets us apart from the rest.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group glass rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                  <Icon size={28} className="text-amber-400" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed mb-4">{reason.description}</p>
                <div className="flex items-center gap-2 text-amber-400 text-sm font-medium">
                  <CheckCircle size={16} />
                  {reason.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Bar */}
        <div className="mt-16 glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-dark-950 flex items-center justify-center">
                  <Star size={14} className="text-dark-950" fill="currentColor" />
                </div>
              ))}
            </div>
            <div>
              <div className="font-heading text-xl font-bold text-white">5.0 Rating</div>
              <p className="text-dark-400 text-sm">Based on 100+ Google reviews</p>
            </div>
          </div>
          <a
            href="tel:+13475551234"
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 whitespace-nowrap"
          >
            Book Your Detail Today
          </a>
        </div>
      </div>
    </section>
  );
}