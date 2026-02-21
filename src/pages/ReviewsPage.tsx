import { useState, useEffect } from 'react';
import { Star, Quote, Phone, ArrowRight, Filter, ThumbsUp, Car, Shield, Award, CheckCircle } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  vehicle: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  verified: boolean;
  helpful: number;
  image?: string;
}

const allReviews: Review[] = [
  {
    id: 1,
    name: 'Michael R.',
    vehicle: '2023 BMW M4',
    rating: 5,
    text: 'Absolutely incredible work! My M4 looks better than the day I bought it. The ceramic coating has been holding up perfectly for 6 months now. Best detailer in Brooklyn, hands down. The team was professional, on time, and paid attention to every single detail. I\'ve already recommended ScratchPro to all my friends.',
    service: 'Ceramic Coating',
    date: 'January 2026',
    verified: true,
    helpful: 24,
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    name: 'Sarah L.',
    vehicle: '2022 Mercedes GLE',
    rating: 5,
    text: 'So convenient having them come to my apartment building. They set up in the parking garage and transformed my GLE. Interior smells amazing and the exterior is showroom quality. I was nervous about mobile detailing, but these guys are 100% legit. Will definitely be a repeat customer.',
    service: 'Full Detail',
    date: 'January 2026',
    verified: true,
    helpful: 19,
    image: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'David K.',
    vehicle: '2021 Tesla Model 3',
    rating: 5,
    text: 'Third time using ScratchPro and they never disappoint. Attention to detail is next level. They even cleaned areas I didn\'t know existed in my car. The interior steam cleaning made everything look and smell brand new. Worth every penny and then some.',
    service: 'Interior Detailing',
    date: 'December 2025',
    verified: true,
    helpful: 15,
  },
  {
    id: 4,
    name: 'Jennifer W.',
    vehicle: '2024 Porsche Cayenne',
    rating: 5,
    text: 'Found ScratchPro through a friend\'s recommendation and I\'m so glad I did. Professional, on time, and the results speak for themselves. My Cayenne has never looked this good. They took the time to explain every step of the process and showed me the before/after under LED lights. Incredible.',
    service: 'Full Detail',
    date: 'December 2025',
    verified: true,
    helpful: 22,
    image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=400&h=300&fit=crop',
  },
  {
    id: 5,
    name: 'Anthony M.',
    vehicle: '2020 Audi A6',
    rating: 5,
    text: 'Had some nasty swirl marks from a bad car wash. ScratchPro did a two-stage correction and the paint is absolutely flawless now. They really know what they\'re doing. The difference was night and day — my black paint is now a mirror. Topped it off with ceramic coating for long-term protection.',
    service: 'Paint Correction',
    date: 'November 2025',
    verified: true,
    helpful: 31,
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=300&fit=crop',
  },
  {
    id: 6,
    name: 'Robert T.',
    vehicle: '2023 Ford F-150',
    rating: 5,
    text: 'Brought my F-150 back from the dead. After months of construction site dust and mud, I thought it would never be clean again. ScratchPro\'s full detail package was exactly what I needed. Engine bay looks showroom-fresh and the interior is spotless. Great value for the price.',
    service: 'Full Detail',
    date: 'November 2025',
    verified: true,
    helpful: 17,
  },
  {
    id: 7,
    name: 'Lisa C.',
    vehicle: '2022 Range Rover Sport',
    rating: 5,
    text: 'I\'m very particular about who touches my car, and ScratchPro exceeded every expectation. The ceramic coating on my Range Rover is flawless — water just beads right off. They were incredibly thorough and even fixed some minor paint chips I hadn\'t noticed. Top-tier service.',
    service: 'Ceramic Coating',
    date: 'October 2025',
    verified: true,
    helpful: 28,
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=300&fit=crop',
  },
  {
    id: 8,
    name: 'James P.',
    vehicle: '2021 Lexus ES 350',
    rating: 5,
    text: 'The essential wash package is an amazing deal. In and out in under 2 hours, and my Lexus looked fantastic. The hand wash is so much better than any automatic car wash. I now do this bi-weekly and my car always looks great.',
    service: 'Essential Wash',
    date: 'October 2025',
    verified: true,
    helpful: 12,
  },
  {
    id: 9,
    name: 'Maria G.',
    vehicle: '2023 Honda Civic',
    rating: 5,
    text: 'Don\'t let the "budget-friendly" price of the interior detail fool you — the quality is premium. They shampooed all my carpets, cleaned every vent, and conditioned all the plastic trim. My Civic\'s interior hasn\'t looked this good since I drove it off the lot. Highly recommend!',
    service: 'Interior Detailing',
    date: 'September 2025',
    verified: true,
    helpful: 14,
  },
  {
    id: 10,
    name: 'Chris B.',
    vehicle: '2020 Chevrolet Corvette C8',
    rating: 5,
    text: 'I trust ScratchPro with my C8 and that says a lot. The paint correction they did was a work of art — every swirl and micro-scratch gone. Then they applied the ceramic Pro package. This car draws attention everywhere I go now. It literally looks wet all the time. Absolute perfection.',
    service: 'Paint Correction',
    date: 'September 2025',
    verified: true,
    helpful: 35,
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400&h=300&fit=crop',
  },
  {
    id: 11,
    name: 'Samantha D.',
    vehicle: '2024 Toyota RAV4',
    rating: 5,
    text: 'As a mom of three, my RAV4 was basically a snack war zone. ScratchPro\'s interior detailing was a miracle — every crumb, stain, and mystery sticky spot is gone. The kids can\'t believe it\'s the same car. Booking them every quarter from now on.',
    service: 'Interior Detailing',
    date: 'August 2025',
    verified: true,
    helpful: 20,
  },
  {
    id: 12,
    name: 'Kevin H.',
    vehicle: '2022 Genesis G80',
    rating: 5,
    text: 'The Ultimate Protection package was a big investment, but worth every dollar. PPF on the front, full ceramic coating, and glass treatment — my G80 is basically bulletproof now. The 5-year warranty gives me total peace of mind. ScratchPro is the real deal.',
    service: 'Ceramic Coating',
    date: 'August 2025',
    verified: true,
    helpful: 26,
  },
  {
    id: 13,
    name: 'Patricia N.',
    vehicle: '2021 BMW X5',
    rating: 4,
    text: 'Great service overall. My X5 looks amazing after the full detail. Only giving 4 stars because they ran about 30 minutes behind schedule, but they called ahead to let me know and the quality of work more than made up for it. Will use again.',
    service: 'Full Detail',
    date: 'July 2025',
    verified: true,
    helpful: 8,
  },
  {
    id: 14,
    name: 'Derek F.',
    vehicle: '2023 Hyundai Tucson',
    rating: 5,
    text: 'First time trying a mobile detailing service and I\'m hooked. They came to my office parking lot and had my Tucson looking brand new by the time I got off work. Exterior wash and clay bar treatment made the paint silky smooth. Highly recommend the exterior detail package.',
    service: 'Essential Wash',
    date: 'July 2025',
    verified: true,
    helpful: 11,
  },
  {
    id: 15,
    name: 'Angela V.',
    vehicle: '2022 Volvo XC90',
    rating: 5,
    text: 'We had dog hair EVERYWHERE in our XC90. ScratchPro not only removed every single hair, but also eliminated the pet odor completely with their ozone treatment. The car smells and looks incredible. Already booked my next appointment. These guys are the best in Brooklyn!',
    service: 'Interior Detailing',
    date: 'June 2025',
    verified: true,
    helpful: 18,
  },
];

const serviceCategories = ['All', 'Full Detail', 'Ceramic Coating', 'Paint Correction', 'Interior Detailing', 'Essential Wash'];

const stats = [
  { value: '500+', label: 'Cars Detailed' },
  { value: '5.0', label: 'Average Rating' },
  { value: '100%', label: 'Satisfaction' },
  { value: '150+', label: 'Reviews' },
];

export default function ReviewsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState<'recent' | 'helpful'>('recent');
  const [showCount, setShowCount] = useState(8);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredReviews = activeFilter === 'All'
    ? allReviews
    : allReviews.filter(r => r.service === activeFilter);

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'helpful') return b.helpful - a.helpful;
    return b.id - a.id;
  });

  const visibleReviews = sortedReviews.slice(0, showCount);
  const hasMore = showCount < sortedReviews.length;

  const averageRating = (allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length).toFixed(1);
  const ratingDistribution = [5, 4, 3, 2, 1].map(stars => ({
    stars,
    count: allReviews.filter(r => r.rating === stars).length,
    percentage: Math.round((allReviews.filter(r => r.rating === stars).length / allReviews.length) * 100),
  }));

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&h=800&fit=crop"
            alt="Reviews hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/50" />
        </div>

        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[200px]" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium border border-amber-500/20 mb-6">
              <Star size={16} />
              CLIENT REVIEWS
            </span>
          </div>
          <h1 className={`font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-6 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            WHAT PEOPLE
            <br />
            <span className="text-gradient">SAY ABOUT US</span>
          </h1>
          <p className={`text-dark-300 text-lg sm:text-xl max-w-xl leading-relaxed transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Real reviews from real customers. Every review is from a verified client who trusted us with their vehicle. See why Brooklyn chooses ScratchPro.
          </p>

          {/* Stats */}
          <div className={`flex flex-wrap gap-6 mt-10 transition-all duration-700 delay-[450ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-xl px-6 py-3 text-center">
                <div className="font-heading text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-dark-400 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-16 bg-dark-900/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Overall Rating */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
                <span className="font-heading text-7xl font-bold text-gradient">{averageRating}</span>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={24} className="text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-dark-400 text-sm">Based on {allReviews.length} reviews</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="flex items-center gap-2 glass rounded-lg px-4 py-2">
                  <Shield size={16} className="text-amber-400" />
                  <span className="text-white text-sm font-medium">Verified Reviews</span>
                </div>
                <div className="flex items-center gap-2 glass rounded-lg px-4 py-2">
                  <Award size={16} className="text-amber-400" />
                  <span className="text-white text-sm font-medium">Google 5-Star Rated</span>
                </div>
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-3">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-20 justify-end">
                    <span className="text-white text-sm font-medium">{item.stars}</span>
                    <Star size={14} className="text-amber-400" fill="currentColor" />
                  </div>
                  <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-dark-400 text-sm w-12 text-right">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Reviews */}
      <section className="py-24 bg-dark-950 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[200px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[200px]" />

        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Filter Bar */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Filter size={20} className="text-amber-400" />
                <h2 className="font-heading text-2xl font-bold text-white">Filter Reviews</h2>
                <span className="text-dark-500 text-sm">({filteredReviews.length} reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-dark-400 text-sm">Sort by:</span>
                <button
                  onClick={() => setSortBy('recent')}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    sortBy === 'recent'
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      : 'glass text-dark-400 hover:text-white'
                  }`}
                >
                  Most Recent
                </button>
                <button
                  onClick={() => setSortBy('helpful')}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    sortBy === 'helpful'
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      : 'glass text-dark-400 hover:text-white'
                  }`}
                >
                  Most Helpful
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveFilter(cat);
                    setShowCount(8);
                  }}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === cat
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 shadow-lg shadow-amber-500/20'
                      : 'glass text-dark-300 hover:text-white hover:border-amber-500/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Review Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {visibleReviews.map((review, index) => (
              <div
                key={review.id}
                className={`glass rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 hover:-translate-y-1 ${
                  index === 0 && review.image ? 'md:col-span-2' : ''
                }`}
              >
                {/* Featured review with image */}
                {index === 0 && review.image ? (
                  <div className="grid md:grid-cols-2">
                    <div className="relative aspect-[4/3] md:aspect-auto">
                      <img
                        src={review.image}
                        alt={`${review.name}'s ${review.vehicle}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-dark-950/20" />
                      <div className="absolute bottom-4 left-4 md:hidden">
                        <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-medium border border-amber-500/30">
                          {review.service}
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} size={18} className="text-amber-400" fill="currentColor" />
                          ))}
                        </div>
                        <span className="hidden md:inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20">
                          {review.service}
                        </span>
                      </div>
                      <Quote size={32} className="text-amber-500/20 mb-3" />
                      <p className="text-white text-base leading-relaxed mb-6">
                        "{review.text}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-heading text-lg font-bold text-white">{review.name}</span>
                            {review.verified && (
                              <CheckCircle size={16} className="text-amber-400" />
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Car size={14} className="text-dark-500" />
                            <span className="text-dark-400 text-sm">{review.vehicle}</span>
                          </div>
                          <span className="text-dark-500 text-xs mt-1 block">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-dark-500 text-sm">
                          <ThumbsUp size={14} />
                          <span>{review.helpful}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard review card */
                  <div className="p-8">
                    {review.image && (
                      <div className="rounded-xl overflow-hidden mb-5 aspect-[16/9]">
                        <img
                          src={review.image}
                          alt={`${review.name}'s ${review.vehicle}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} size={16} className="text-amber-400" fill="currentColor" />
                        ))}
                        {Array.from({ length: 5 - review.rating }).map((_, i) => (
                          <Star key={i} size={16} className="text-dark-700" />
                        ))}
                      </div>
                      <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20">
                        {review.service}
                      </span>
                    </div>
                    <p className="text-dark-300 text-sm leading-relaxed mb-5">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-heading text-base font-bold text-white">{review.name}</span>
                          {review.verified && (
                            <CheckCircle size={14} className="text-amber-400" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <Car size={12} className="text-dark-500" />
                          <span className="text-dark-500 text-xs">{review.vehicle}</span>
                          <span className="text-dark-600">•</span>
                          <span className="text-dark-500 text-xs">{review.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-dark-500 text-sm">
                        <ThumbsUp size={14} />
                        <span>{review.helpful}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowCount(prev => prev + 6)}
                className="inline-flex items-center gap-2 px-8 py-3 glass text-white font-semibold rounded-full hover:bg-white/10 hover:border-amber-500/30 transition-all hover:scale-105"
              >
                Load More Reviews
                <ArrowRight size={18} />
              </button>
            </div>
          )}

          {filteredReviews.length === 0 && (
            <div className="text-center py-20">
              <Star size={48} className="text-dark-600 mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold text-white mb-2">No Reviews Yet</h3>
              <p className="text-dark-400">We're collecting reviews for this category. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 bg-dark-900/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading text-3xl font-bold text-white mb-4">
                  HAD A GREAT <span className="text-gradient">EXPERIENCE</span>?
                </h3>
                <p className="text-dark-300 text-base leading-relaxed mb-6">
                  We'd love to hear from you! Leave us a review on Google and help others discover the ScratchPro difference. Your feedback means the world to us.
                </p>
                <a
                  href="https://g.page/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
                >
                  <Star size={18} />
                  Leave a Google Review
                  <ArrowRight size={18} />
                </a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 glass rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <ThumbsUp size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">{allReviews.filter(r => r.rating === 5).length} Five-Star Reviews</h4>
                    <p className="text-dark-400 text-xs">Our clients consistently rate us 5 stars.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 glass rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">100% Verified</h4>
                    <p className="text-dark-400 text-xs">Every review is from a real, verified customer.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 glass rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Shield size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">Satisfaction Guaranteed</h4>
                    <p className="text-dark-400 text-xs">Not happy? We redo the work for free.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[200px] -translate-x-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-6 border border-amber-500/20">
            JOIN OUR HAPPY CLIENTS
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            READY FOR YOUR <span className="text-gradient">TRANSFORMATION</span>?
          </h2>
          <p className="text-dark-300 text-lg mb-10 max-w-2xl mx-auto">
            Every 5-star review started with a phone call. Book your detail today and experience the ScratchPro difference for yourself.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+13475551234"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-full hover:from-green-400 hover:to-green-500 transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/25"
            >
              <Phone size={22} />
              (347) 555-1234
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-10 py-4 glass text-white font-semibold text-lg rounded-full hover:bg-white/10 hover:border-amber-500/30 transition-all hover:scale-105"
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}