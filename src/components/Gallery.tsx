import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=600&fit=crop',
    title: 'Full Detail — BMW M4',
    category: 'Full Detail',
  },
  {
    src: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&h=600&fit=crop',
    title: 'Ceramic Coating Application',
    category: 'Ceramic Coating',
  },
  {
    src: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&h=600&fit=crop',
    title: 'Paint Correction Results',
    category: 'Paint Correction',
  },
  {
    src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=600&fit=crop',
    title: 'Multi-Stage Polish',
    category: 'Paint Correction',
  },
  {
    src: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=800&h=600&fit=crop',
    title: 'Exterior Wash & Wax',
    category: 'Exterior',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDrDFDDRxB9ji5662spX5RZy8_aBS8rbW2Q&s',
    title: 'Interior Deep Clean',
    category: 'Interior',
  },
];

const categories = ['All', 'Full Detail', 'Ceramic Coating', 'Paint Correction', 'Exterior', 'Interior'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-dark-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
            OUR WORK
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            RECENT <span className="text-gradient">PROJECTS</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            See the transformations we deliver. Every vehicle gets our full attention and professional care.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950'
                  : 'glass text-dark-300 hover:text-white hover:border-amber-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-amber-400 text-xs font-medium">{img.category}</span>
                <h3 className="font-heading text-lg font-bold text-white">{img.title}</h3>
              </div>
              <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-amber-500/30 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-dark-950/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-amber-400 transition-colors"
          >
            <X size={24} />
          </button>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-amber-400 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-amber-400 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
          <div className="max-w-4xl w-full">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="text-center mt-4">
              <span className="text-amber-400 text-sm">{filteredImages[selectedImage].category}</span>
              <h3 className="font-heading text-2xl font-bold text-white">{filteredImages[selectedImage].title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}