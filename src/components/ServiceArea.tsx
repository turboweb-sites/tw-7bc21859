import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

const areas = [
  'Brooklyn', 'Manhattan', 'Queens', 'Bronx', 'Staten Island',
  'Long Island City', 'Jersey City', 'Hoboken', 'Fort Lee',
  'Yonkers', 'New Rochelle', 'Garden City',
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-24 bg-dark-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
              SERVICE AREA
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              WE COVER A <span className="text-gradient">30-MILE</span> RADIUS
            </h2>
            <p className="text-dark-300 text-lg leading-relaxed mb-8">
              Based in Brooklyn (ZIP 11223), we serve all five boroughs and surrounding areas within 30 miles. Free travel — no extra charge for coming to your location.
            </p>

            {/* Info Cards */}
            <div className="space-y-4 mb-8">
              <div className="glass rounded-xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white">Home Base: Brooklyn, NY 11223</h3>
                  <p className="text-dark-400 text-sm">Serving all surrounding areas within 30 miles</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Navigation size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white">Free Travel</h3>
                  <p className="text-dark-400 text-sm">No extra charge for mobile service within our radius</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white">Flexible Hours</h3>
                  <p className="text-dark-400 text-sm">Available 7 days a week, 7 AM – 8 PM</p>
                </div>
              </div>
            </div>

            <a
              href="tel:+13475551234"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105"
            >
              <Phone size={18} />
              Check Availability in Your Area
            </a>
          </div>

          {/* Right — Area List */}
          <div className="glass rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-bold text-white mb-6">Areas We Serve</h3>
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 py-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-dark-300 text-sm">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-dark-400 text-sm">
                Don't see your area? Give us a call — we may still be able to reach you!
              </p>
            </div>

            {/* Embedded Map Placeholder with Gradient */}
            <div className="mt-6 rounded-xl overflow-hidden relative h-48 bg-dark-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96907.42726587004!2d-74.0577!3d40.6282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c39a3%3A0x2b5c1e3e7c8b0a0!2sBrooklyn%2C%20NY%2011223!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service area map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}