import { useState, useEffect } from 'react';
import { Phone, ArrowRight, Star, Shield, Clock, MapPin } from 'lucide-react';

const stats = [
  { icon: Star, value: '500+', label: 'Cars Detailed' },
  { icon: Shield, value: '5-Star', label: 'Rated Service' },
  { icon: Clock, value: 'Same Day', label: 'Availability' },
  { icon: MapPin, value: '30-Mile', label: 'Service Radius' },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&h=1080&fit=crop"
          alt="Premium car detailing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/85 to-dark-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-amber-600/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium border border-amber-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              PREMIUM MOBILE DETAILING IN BROOKLYN, NY
            </span>
          </div>

          {/* Heading */}
          <h1 className={`font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-6 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            YOUR CAR
            <br />
            DESERVES
            <br />
            <span className="text-gradient">THE BEST</span>
          </h1>

          {/* Description */}
          <p className={`text-dark-300 text-lg sm:text-xl max-w-xl leading-relaxed mb-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Professional mobile auto detailing — we come to you. Interior & exterior detailing, ceramic coating, and paint correction. Serving Brooklyn and a 30-mile radius from 11223.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-[450ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <a
              href="tel:+13475551234"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 font-bold text-lg rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 hover:shadow-xl hover:shadow-amber-500/25 animate-pulse-glow"
            >
              <Phone size={20} />
              Call Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-8 py-4 glass text-white font-semibold text-lg rounded-full hover:bg-white/10 hover:border-amber-500/30 transition-all hover:scale-105"
            >
              Get Free Quote
            </button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700 delay-[600ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="glass rounded-xl px-4 py-3 text-center hover:border-amber-500/20 transition-all">
                  <Icon size={20} className="text-amber-400 mx-auto mb-1" />
                  <div className="font-heading text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-dark-400 text-xs">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}