import { Phone, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function BookingCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&h=600&fit=crop"
          alt="Premium detailing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/95 to-dark-950/90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-6 border border-amber-500/20">
            READY TO TRANSFORM YOUR VEHICLE?
          </span>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            BOOK YOUR <span className="text-gradient">DETAIL</span> TODAY
          </h2>

          <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
            Call us now or fill out the contact form below. We offer same-day availability and free travel within our 30-mile service area.
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-dark-300">
              <Calendar size={18} className="text-amber-400" />
              <span>Same-day booking available</span>
            </div>
            <div className="flex items-center gap-2 text-dark-300">
              <Clock size={18} className="text-amber-400" />
              <span>7 AM – 8 PM, 7 days/week</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+13475551234"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 font-bold text-lg rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 hover:shadow-xl hover:shadow-amber-500/25 animate-pulse-glow"
            >
              <Phone size={22} />
              (347) 555-1234
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-10 py-4 glass text-white font-semibold text-lg rounded-full hover:bg-white/10 hover:border-amber-500/30 transition-all hover:scale-105"
            >
              Send a Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}