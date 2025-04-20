'use client';

import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { cn } from './utils';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface CarouselProps {
  items: React.ReactNode[];
  className?: string;
  slideClassName?: string;
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  loop?: boolean;
  slidesToShow?: number;
  gap?: number;
  arrowsStyle?: 'default' | 'floating' | 'outside';
}

// Minimal carousel with only essential features
const Carousel = memo(function Carousel({
  items,
  className = '',
  slideClassName = '',
  autoPlay = false,
  interval = 0,
  showArrows = true,
  showDots = false,
  loop = true,
  slidesToShow = 1,
  gap = 16,
  arrowsStyle = 'default',
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Simple resize handler
  useEffect(() => {
    if (!carouselRef.current) return;
    
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, items.length - slidesToShow);

  // Basic navigation functions
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      loop ? (prevIndex + 1) % (maxIndex + 1) : Math.min(prevIndex + 1, maxIndex)
    );
  }, [loop, maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      loop ? (prevIndex - 1 + maxIndex + 1) % (maxIndex + 1) : Math.max(prevIndex - 1, 0)
    );
  }, [loop, maxIndex]);

  // Simple autoplay with no animations
  useEffect(() => {
    if (autoPlay && interval > 0) {
      const timer = setInterval(handleNext, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, handleNext]);

  // Calculate slide width
  const slideWidth = `calc((100% - ${(slidesToShow - 1) * gap}px) / ${slidesToShow})`;

  return (
    <div 
      ref={carouselRef}
      className={cn('relative overflow-hidden', className)}
    >
      {/* Simple slider container */}
      <div 
        className="flex transition-transform duration-300 ease-out"
        style={{ 
          transform: `translateX(-${currentIndex * (width / slidesToShow + gap / slidesToShow)}px)`,
          gap: `${gap}px`
        }}
      >
        {items.map((item, index) => (
          <div 
            key={`slide-${index}`} 
            className={cn('flex-shrink-0', slideClassName)}
            style={{ width: slideWidth }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Simple arrow navigation */}
      {showArrows && items.length > slidesToShow && (
        <>
          <button
            onClick={handlePrev}
            className={cn(
              'absolute top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-1.5',
              (!loop && currentIndex === 0) && 'opacity-50 cursor-not-allowed',
              arrowsStyle === 'outside' ? '-left-10' : 'left-2'
            )}
            disabled={!loop && currentIndex === 0}
            aria-label="Previous slide"
          >
            <BsChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className={cn(
              'absolute top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-1.5',
              (!loop && currentIndex >= maxIndex) && 'opacity-50 cursor-not-allowed',
              arrowsStyle === 'outside' ? '-right-10' : 'right-2'
            )}
            disabled={!loop && currentIndex >= maxIndex}
            aria-label="Next slide"
          >
            <BsChevronRight size={18} />
          </button>
        </>
      )}

      {/* Simple dot indicators (only if needed) */}
      {showDots && items.length > slidesToShow && (
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex space-x-0 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={`dot-${idx}`}
              onClick={() => setCurrentIndex(idx)}
              className={`w-10 h-10 flex items-center justify-center p-2`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span className={`block w-2 h-2 rounded-full ${
                currentIndex === idx ? 'bg-white' : 'bg-white/50'
              }`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

export default Carousel; 