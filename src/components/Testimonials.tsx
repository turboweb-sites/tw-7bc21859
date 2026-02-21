import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';

const reviews = [
  {
    name: 'Michael R.',
    vehicle: '2023 BMW M4',
    rating: 5,
    text: 'Absolutely incredible work! My M4 looks better than the day I bought it. The ceramic coating has been holding up perfectly for 6 months now. Best detailer in Brooklyn, hands down.',
    service: 'Ceramic Coating + Paint Correction',
  },
  {
    name: 'Sarah L.',
    vehicle: '2022 Mercedes GLE',
    rating: 5,
    text: 'So convenient having them come to my apartment building. They set up in the parking garage and transformed my GLE. Interior smells amazing and the exterior is showroom quality.',
    service: 'Full Detail Package',
  },
  {
    name: 'David K.',
    vehicle: '2021 Tesla Model 3',
    rating: 5,
    text: 'Third time using ScratchPro and they never disappoint. Attention to detail is next level. They even cleaned areas I didn\'t know existed in my car. Worth every penny.',
    service: 'Interior Detailing',
  },
  {
    name: 'Jennifer W.',
    vehicle: '2024 Porsche Cayenne',
    rating: 5,
    text: 'Found ScratchPro through a friend\'s recommendation and I\'m so glad I did. Professional, on time, and the results speak for themselves. My Cayenne has never looked this good.',
    service: 'Full Detail + Ceramic Coating',
  },
  {
    name: 'Anthony M.',
    vehicle: '2020 Audi A6',
    rating: 5,
    text: 'Had some nasty swirl marks from a bad car wash. ScratchPro did a two-stage correction and the paint is absolutely flawless now. They really know what they\'re doing.',
    service: 'Paint Correction',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setLocation] = useLocation();

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="testimonials" className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
            TESTIMONIALS
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            WHAT OUR CLIENTS <span className="text-gradient">SAY</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from our satisfied clients across Brooklyn and beyond.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="glass rounded-2xl p-8 md:p-12 relative">
            <Quote size={48} className="text-amber-500/20 absolute top-6 left-6" />
            
            <div className="relative">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                  <Star key={i} size={20} className="text-amber-400" fill="currentColor" />
                ))}
              </div>

              <p className="text-white text-lg md:text-xl leading-relaxed mb-6 italic">
                "{reviews[currentIndex].text}"
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="font-heading text-xl font-bold text-white">{reviews[currentIndex].name}</div>
                  <div className="text-dark-400 text-sm">{reviews[currentIndex].vehicle}</div>
                  <div className="text-amber-400 text-sm mt-1">{reviews[currentIndex].service}</div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-amber-400 hover:border-amber-500/30 transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-amber-400 hover:border-amber-500/30 transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-amber-400 w-8' : 'bg-dark-600 hover:bg-dark-500'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {reviews.slice(0, 3).map((review, index) => (
            <div key={index} className="glass rounded-xl p-6 hover:border-amber-500/20 transition-all">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-dark-300 text-sm mb-4 line-clamp-3">"{review.text}"</p>
              <div className="text-white text-sm font-bold">{review.name}</div>
              <div className="text-dark-500 text-xs">{review.vehicle}</div>
            </div>
          ))}
        </div>

        {/* View All Reviews Link */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              setLocation('/reviews');
              window.scrollTo(0, 0);
            }}
            className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors group"
          >
            View All Reviews
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}