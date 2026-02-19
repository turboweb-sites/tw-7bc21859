import { Shield, Award, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

const highlights = [
  { icon: Shield, title: 'Fully Insured', desc: 'Licensed and insured for your peace of mind' },
  { icon: Award, title: 'Certified Pros', desc: 'IDA-certified detailing professionals' },
  { icon: Clock, title: 'On Time, Every Time', desc: 'Punctual service with flexible scheduling' },
  { icon: Users, title: 'Customer First', desc: '100% satisfaction guaranteed on every detail' },
];

const checklist = [
  'Professional-grade products & equipment',
  'Eco-friendly, water-saving techniques',
  'Mobile service — we come to you',
  'Before & after photo documentation',
  'Transparent pricing with no hidden fees',
  'Same-day and weekend availability',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-900/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=400&h=500&fit=crop"
                    alt="Detailing process"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=300&fit=crop"
                    alt="Ceramic coating"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=300&fit=crop"
                    alt="Paint correction"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=400&h=500&fit=crop"
                    alt="Finished detail"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 glass-dark rounded-2xl p-5 animate-float">
              <div className="text-center">
                <span className="font-heading text-4xl font-bold text-gradient">2+</span>
                <p className="text-dark-300 text-sm mt-1">Years of<br/>Excellence</p>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
              ABOUT US
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              WHY <span className="text-gradient">SCRATCHPRO</span>?
            </h2>
            <p className="text-dark-300 text-lg leading-relaxed mb-8">
              Founded in Brooklyn, ScratchPro Detailing was built on a simple belief: every vehicle deserves professional care. We're a mobile detailing service — meaning we bring our full setup to your driveway, office, or wherever your car is parked. No more waiting at shops or dropping your car off for hours.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="glass rounded-xl p-4 hover:border-amber-500/20 transition-all group">
                    <Icon size={24} className="text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                    <h3 className="font-heading text-base font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-dark-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Checklist */}
            <div className="space-y-3 mb-8">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-amber-400 flex-shrink-0" />
                  <span className="text-dark-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:+13475551234"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Schedule Your Detail
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}