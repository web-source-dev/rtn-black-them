'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { cn } from './utils';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Image from 'next/image';
// Add these styles at the top of the file, after imports
const carouselStyles = `
  .carousel {
    --carousel-transition-duration: 500ms;
  }

  .carousel .active-slide {
    z-index: 10;
    position: relative;
  }

  .carousel-card-effect {
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateY(0deg);
    transition: transform var(--carousel-transition-duration) ease;
  }
  
  .carousel-card-effect.is-transitioning {
    transform: perspective(1000px) rotateY(2deg);
  }

  .carousel-thumbnails button:focus-visible {
    outline: 2px solid hsl(var(--primary));
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion) {
    .carousel {
      --carousel-transition-duration: 0ms;
    }

    .carousel-card-effect {
      transform: none !important;
      transition: opacity 0.2s ease;
    }
  }
`;

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
  progressBar?: boolean;
  fadeMode?: boolean;
  arrowsStyle?: 'default' | 'floating' | 'outside';
  paginationStyle?: 'thumbnails' | 'dots';
  thumbSize?: string;
  mode?: 'fadeInOut' | '3d';
  adaptiveHeight?: boolean;
  height?: string;
  cardEffect?: boolean;
  centerMode?: boolean;
  draggable?: boolean;
}

export default function Carousel({
  items,
  className = '',
  slideClassName = '',
  autoPlay = false,
  interval = 5000,
  showArrows = true,
  showDots = true,
  loop = true,
  slidesToShow = 1,
  gap = 16,
  progressBar = false,
  fadeMode = false,
  arrowsStyle = 'default',
  paginationStyle,
  thumbSize = '40px',
  mode,
  adaptiveHeight,
  height,
  cardEffect,
  centerMode,
  draggable = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [width, setWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const slideRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const [effectiveSlidesToShow, setEffectiveSlidesToShow] = useState(slidesToShow);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setEffectiveSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setEffectiveSlidesToShow(Math.min(slidesToShow, 2));
      } else {
        setEffectiveSlidesToShow(slidesToShow);
      }

      if (carouselRef.current) {
        setWidth(carouselRef.current.offsetWidth);
      }
    };

    handleResize();
    
    // Use ResizeObserver for better performance
    const resizeObserver = new ResizeObserver(handleResize);
    if (carouselRef.current) {
      resizeObserver.observe(carouselRef.current);
    }
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, [slidesToShow]);

  const maxIndex = Math.max(0, items.length - effectiveSlidesToShow);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      loop ? (prevIndex + 1) % (maxIndex + 1) : Math.min(prevIndex + 1, maxIndex)
    );
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 500);
  }, [loop, maxIndex, isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      loop ? (prevIndex - 1 + maxIndex + 1) % (maxIndex + 1) : Math.max(prevIndex - 1, 0)
    );
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 500);
  }, [loop, maxIndex, isTransitioning]);

  const handleDotClick = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 500);
  }, [currentIndex, isTransitioning]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (isTransitioning) return;
    
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      handlePrev();
    } else if (info.offset.x < -swipeThreshold) {
      handleNext();
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement === carouselRef.current || carouselRef.current?.contains(document.activeElement)) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handlePrev();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    if (autoPlay && !isPaused) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(handleNext, interval);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }
  }, [currentIndex, autoPlay, interval, isPaused, handleNext]);

  const visibleItems = [];
  for (let i = 0; i < effectiveSlidesToShow; i++) {
    const index = (currentIndex + i) % items.length;
    if (index < items.length) {
      visibleItems.push({ item: items[index], index });
    }
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? width : -width,
      opacity: fadeMode ? 0 : 1,
      scale: cardEffect ? 0.95 : 1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -width : width,
      opacity: fadeMode ? 0 : 1,
      scale: cardEffect ? 0.95 : 1,
      zIndex: 0,
    }),
  };

  const multiItemVariants = {
    animate: { x: -currentIndex * (width / effectiveSlidesToShow + gap) }
  };

  const getArrowClass = () => {
    switch (arrowsStyle) {
      case 'floating':
        return 'absolute top-1/2 z-20 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary';
      case 'outside':
        return 'absolute top-1/2 z-20 -translate-y-1/2 bg-transparent text-gray-800 dark:text-white p-3 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary';
      default:
        return 'absolute top-1/2 z-20 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white rounded-full p-2 shadow-md transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary';
    }
  };

  // Handle drag start event
  const handleDragStart = () => {
    setIsPaused(true);
  };
  
  // Calculate slide width based on effective slides to show and gap
  const getSlideWidth = () => {
    return `calc((100% - ${(effectiveSlidesToShow - 1) * gap}px) / ${effectiveSlidesToShow})`;
  };

  const renderThumbnails = () => {
    if (paginationStyle !== 'thumbnails' || !showDots) return null;
    
    return (
      <div 
        className="flex justify-center mt-4 gap-2 overflow-x-auto px-4 py-2 -mx-4 carousel-thumbnails" 
        role="tablist"
        aria-label="Slide thumbnails"
      >
        {items.map((_, idx) => {
          if (idx > maxIndex) return null;
          
          return (
            <button
              key={`carousel-thumb-${idx}`}
              onClick={() => handleDotClick(idx)}
              className={cn(
                'flex-shrink-0 transition-all overflow-hidden',
                currentIndex === idx 
                  ? 'border-2 border-primary' 
                  : 'border border-gray-200 dark:border-gray-700 opacity-70 hover:opacity-100'
              )}
              style={{ 
                width: thumbSize, 
                height: thumbSize, 
                borderRadius: '0.25rem' 
              }}
              aria-label={`Go to slide ${idx + 1}`}
              role="tab"
              aria-selected={currentIndex === idx}
              aria-controls={`carousel-slide-${idx}`}
              tabIndex={currentIndex === idx ? 0 : -1}
            >
              <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                {React.isValidElement(items[idx]) && React.Children.map(items[idx], (child) => {
                  if (React.isValidElement(child) && 'image' in (child.props as { image: string })) {
                    return (
                      <Image 
                        src={(child.props as { image: string }).image} 
                        alt={`Slide ${idx + 1}`}
                        className="object-cover w-full h-full"
                      />
                    );
                  }
                  return <div className="text-xs text-center">{idx + 1}</div>;
                })}
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <style jsx global>{carouselStyles}</style>
      <div 
        ref={carouselRef}
        className={cn('relative overflow-hidden carousel', className)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Content carousel"
        tabIndex={0}
      >
        {/* Single Item View */}
        {effectiveSlidesToShow === 1 && mode !== 'fadeInOut' && (
          <div className="relative overflow-hidden" style={{ height: adaptiveHeight ? height : 'auto' }}>
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={`carousel-slide-${currentIndex}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                  rotateY: { duration: 0.3 },
                }}
                drag={draggable ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                className={cn('w-full', slideClassName)}
                ref={(el) => { slideRefs.current[currentIndex] = el; }}
                style={{ 
                  perspective: mode === '3d' ? 1000 : undefined,
                  transformStyle: mode === '3d' ? 'preserve-3d' : undefined,
                }}
                role="tabpanel"
                id={`carousel-slide-${currentIndex}`}
                aria-label={`Slide ${currentIndex + 1} of ${items.length}`}
                aria-hidden="false"
              >
                {items[currentIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Fade In/Out Mode */}
        {effectiveSlidesToShow === 1 && mode === 'fadeInOut' && (
          <div className="relative overflow-hidden" style={{ height: adaptiveHeight ? height : 'auto' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`carousel-fade-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={cn('w-full absolute top-0 left-0', slideClassName)}
                ref={(el) => { slideRefs.current[currentIndex] = el; }}
                role="tabpanel"
                id={`carousel-slide-${currentIndex}`}
                aria-label={`Slide ${currentIndex + 1} of ${items.length}`}
                aria-hidden="false"
              >
                {items[currentIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {effectiveSlidesToShow > 1 && (
          <div className="overflow-hidden">
            <motion.div 
              className={cn('flex', gap > 0 ? `gap-${gap}` : '')}
              animate={multiItemVariants.animate}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30,
                bounce: 0.1
              }}
              drag={draggable ? "x" : false}
              dragConstraints={{ left: -width, right: 0 }}
              dragElastic={0.1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              {items.map((item, index) => (
                <motion.div 
                  key={`multi-slide-${index}`} 
                  className={cn(
                    'flex-shrink-0', 
                    slideClassName,
                    cardEffect && 'carousel-card-effect',
                    index === currentIndex && 'active-slide',
                    isTransitioning && 'is-transitioning'
                  )}
                  style={{ 
                    width: getSlideWidth(),
                    transform: cardEffect ? (centerMode && index === currentIndex ? 'scale(1.05)' : 'scale(0.95)') : 'none',
                    transition: 'transform 0.5s ease, opacity 0.5s ease',
                    opacity: centerMode ? (index === currentIndex ? 1 : 0.8) : 1,
                  }}
                  ref={(el) => { slideRefs.current[index] = el; }}
                  role="tabpanel"
                  id={`carousel-slide-${index}`}
                  aria-label={`Slide ${index + 1} of ${items.length}`}
                  aria-hidden={index === currentIndex ? "false" : "true"}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {showArrows && items.length > effectiveSlidesToShow && (
          <>
            <button
              onClick={handlePrev}
              className={cn(
                getArrowClass(),
                arrowsStyle === 'outside' ? '-left-12' : 'left-4',
                (!loop && currentIndex === 0) && 'opacity-50 cursor-not-allowed',
                isTransitioning && 'pointer-events-none'
              )}
              disabled={!loop && currentIndex === 0 || isTransitioning}
              aria-label="Previous slide"
            >
              <BsChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              onClick={handleNext}
              className={cn(
                getArrowClass(),
                arrowsStyle === 'outside' ? '-right-12' : 'right-4',
                (!loop && currentIndex >= maxIndex) && 'opacity-50 cursor-not-allowed',
                isTransitioning && 'pointer-events-none'
              )}
              disabled={!loop && currentIndex >= maxIndex || isTransitioning}
              aria-label="Next slide"
            >
              <BsChevronRight size={20} aria-hidden="true" />
            </button>
          </>
        )}

        {progressBar && items.length > effectiveSlidesToShow && (
          <div className="absolute bottom-4 left-0 right-0 z-10 px-4">
            <div className="bg-white/20 dark:bg-gray-700/20 h-1 w-full rounded-full overflow-hidden">
              <motion.div 
                className="bg-primary h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` 
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                role="progressbar"
                aria-valuenow={Math.round(((currentIndex + 1) / (maxIndex + 1)) * 100)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Slide ${currentIndex + 1} of ${maxIndex + 1}`}
              />
            </div>
          </div>
        )}

        {showDots && !progressBar && items.length > effectiveSlidesToShow && (
          <div 
            className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2"
            role="tablist"
            aria-label="Slide navigation"
          >
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={`carousel-dot-${idx}`}
                onClick={() => handleDotClick(idx)}
                className={cn(
                  'transition-all',
                  currentIndex === idx 
                    ? 'w-8 h-2 bg-primary rounded-full' 
                    : 'w-2 h-2 bg-white/50 hover:bg-white/80 rounded-full'
                )}
                aria-label={`Go to slide ${idx + 1}`}
                role="tab"
                aria-selected={currentIndex === idx}
                aria-controls={`carousel-slide-${idx}`}
                tabIndex={-1}
                disabled={isTransitioning}
              />
            ))}
          </div>
        )}

        {renderThumbnails()}
      </div>
    </>
  );
} 