'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface RevealOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function RevealOnScroll({
  children,
  threshold = 0.1,
  delay = 0,
  direction = 'up',
  className = '',
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getDirectionVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { y: 100, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case 'down':
        return {
          hidden: { y: -100, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case 'left':
        return {
          hidden: { x: 100, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case 'right':
        return {
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      default:
        return {
          hidden: { y: 100, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
    }
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={getDirectionVariants()}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
} 