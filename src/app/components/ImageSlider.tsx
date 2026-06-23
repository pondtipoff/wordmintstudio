import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1629019324504-2e1fdf96e5e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2xhdGlvbiUyMGxhbmd1YWdlcyUyMGRpdmVyc2l0eSUyMGNvbW11bmljYXRpb258ZW58MXx8fHwxNzc1NzIyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Translation text'
  },
  {
    url: 'https://images.unsplash.com/photo-1706403615881-d83dc2067c5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0cmFuc2xhdGlvbiUyMGxhbmd1YWdlcyUyMGRpdmVyc2l0eSUyMGNvbW11bmljYXRpb258ZW58MXx8fHwxNzc1NzIyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Colorful speech bubbles on wooden wall'
  },
  {
    url: 'https://images.unsplash.com/photo-1673515334893-2c20c91d0e93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx0cmFuc2xhdGlvbiUyMGxhbmd1YWdlcyUyMGRpdmVyc2l0eSUyMGNvbW11bmljYXRpb258ZW58MXx8fHwxNzc1NzIyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Languages wooden block'
  },
  {
    url: 'https://images.unsplash.com/photo-1673515335807-ab07bcab4bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx0cmFuc2xhdGlvbiUyMGxhbmd1YWdlcyUyMGRpdmVyc2l0eSUyMGNvbW11bmljYXRpb258ZW58MXx8fHwxNzc1NzIyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Languages scrabble tiles'
  }
];

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentIndex].url}
            alt={slides[currentIndex].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
