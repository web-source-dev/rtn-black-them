'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './utils';

type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: TooltipPosition;
  delay?: number;
  className?: string;
  tooltipClassName?: string;
  showArrow?: boolean;
}

export default function Tooltip({
  children,
  content,
  position = 'top',
  delay = 200,
  className = '',
  tooltipClassName = '',
  showArrow = true,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const calculatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
    const middleX = triggerRect.left + triggerRect.width / 2;
    const middleY = triggerRect.top + triggerRect.height / 2;

    let x = 0;
    let y = 0;

    switch (position) {
      case 'top':
        x = middleX - tooltipRect.width / 2;
        y = triggerRect.top - tooltipRect.height - 10;
        break;
      case 'right':
        x = triggerRect.right + 10;
        y = middleY - tooltipRect.height / 2;
        break;
      case 'bottom':
        x = middleX - tooltipRect.width / 2;
        y = triggerRect.bottom + 10;
        break;
      case 'left':
        x = triggerRect.left - tooltipRect.width - 10;
        y = middleY - tooltipRect.height / 2;
        break;
    }

    // Adjust if tooltip goes out of viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (x < 10) x = 10;
    if (x + tooltipRect.width > viewportWidth - 10) x = viewportWidth - tooltipRect.width - 10;
    if (y < 10) y = 10;
    if (y + tooltipRect.height > viewportHeight - 10) y = viewportHeight - tooltipRect.height - 10;

    setCoords({ x, y });
  }, [position]);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      calculatePosition();
      window.addEventListener('scroll', calculatePosition);
      window.addEventListener('resize', calculatePosition);
    }

    return () => {
      window.removeEventListener('scroll', calculatePosition);
      window.removeEventListener('resize', calculatePosition);
    };
  }, [isVisible, calculatePosition]);

  const getArrowClassName = () => {
    switch (position) {
      case 'top': return 'bottom-[-6px] left-1/2 -translate-x-1/2 border-t-4 border-l-4 border-r-0 border-b-0 rotate-[-135deg]';
      case 'right': return 'left-[-6px] top-1/2 -translate-y-1/2 border-t-4 border-r-4 border-l-0 border-b-0 rotate-[-135deg]';
      case 'bottom': return 'top-[-6px] left-1/2 -translate-x-1/2 border-b-4 border-r-4 border-t-0 border-l-0 rotate-[-135deg]';
      case 'left': return 'right-[-6px] top-1/2 -translate-y-1/2 border-b-4 border-l-4 border-t-0 border-r-0 rotate-[-135deg]';
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      transition: {
        duration: 0.1,
        ease: 'easeOut',
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <>
      <div
        ref={triggerRef}
        className={cn('inline-block', className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
      >
        {children}
      </div>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            className={cn(
              'fixed z-50 max-w-xs rounded bg-gray-900 px-3 py-2 text-sm text-white shadow-lg',
              tooltipClassName
            )}
            style={{
              left: coords.x,
              top: coords.y,
              transformOrigin: position === 'top' ? 'bottom' : 
                               position === 'bottom' ? 'top' : 
                               position === 'left' ? 'right' : 'left',
            }}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {content}
            {showArrow && (
              <div
                className={cn(
                  'absolute h-0 w-0 border-solid border-gray-900',
                  getArrowClassName()
                )}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 