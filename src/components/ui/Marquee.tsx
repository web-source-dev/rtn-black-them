'use client';

import React, { ReactNode, useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from './utils';

interface MarqueeProps {
  children: ReactNode | ReactNode[];
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  speed?: number;
  className?: string;
  reverse?: boolean;
}

export default function Marquee({
  children,
  direction = 'left',
  pauseOnHover = true,
  speed = 25,
  className = '',
  reverse = false,
}: MarqueeProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [duration, setDuration] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const calculateWidth = () => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      const contentRect = contentRef.current?.getBoundingClientRect();
      
      if (containerRect && contentRect) {
        setContainerWidth(containerRect.width);
        setContentWidth(contentRect.width);
        
        // Calculate animation duration based on content width and speed
        // The larger the content, the longer the animation should take
        const calculatedDuration = (contentRect.width / speed) * 2;
        setDuration(calculatedDuration);
      }
    };

    calculateWidth();
    
    // Recalculate on resize
    window.addEventListener('resize', calculateWidth);
    return () => {
      window.removeEventListener('resize', calculateWidth);
    };
  }, [speed, children]);

  // Determine if we need to duplicate content to ensure smooth infinite scrolling
  const shouldDuplicateContent = contentWidth < containerWidth * 2;

  // For reasonable performance, limit duplications to what's necessary
  const duplications = shouldDuplicateContent 
    ? Math.max(2, Math.ceil((containerWidth * 2) / contentWidth)) 
    : 1;

  const directionFactor = direction === 'left' ? -1 : 1;
  const reverseFactor = reverse ? -1 : 1;
  const finalDirection = directionFactor * reverseFactor;

  return (
    <div 
      ref={containerRef}
      className={cn('overflow-hidden whitespace-nowrap', className)}
    >
      <motion.div
        className="inline-flex"
        animate={{
          x: finalDirection < 0 ? [-contentWidth, 0] : [0, -contentWidth],
        }}
        transition={{
          x: {
            duration: duration,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          },
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : undefined}
      >
        <div ref={contentRef} className="flex items-center">
          {children}
        </div>
        
        {/* Duplicate content as needed for seamless scrolling */}
        {Array.from({ length: duplications - 1 }).map((_, index) => (
          <div key={`duplicate-${index}`} className="flex items-center">
            {React.Children.map(children, (child, childIndex) => 
              React.isValidElement(child) ? 
                React.cloneElement(child, { 
                  // Ensure the key is always unique by using the index and childIndex,
                  // and only append the original key if it exists and isn't empty
                  key: `dup-${index}-${childIndex}${child.key && String(child.key).trim() ? `-${child.key}` : ''}` 
                }) : 
                child
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
} 