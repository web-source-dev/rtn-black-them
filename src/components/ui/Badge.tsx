'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from './utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'subtle' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isNew?: boolean;
  isPulsing?: boolean;
  isAnimated?: boolean;
  onClick?: () => void;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  isNew = false,
  isPulsing = false,
  isAnimated = false,
  onClick,
}: BadgeProps) {
  const variantClasses = {
    default: 'bg-purple-600 text-white',
    outline: 'bg-transparent border border-purple-600 text-purple-600',
    subtle: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1',
  };

  const isClickable = !!onClick;

  // Different animation variants
  const getAnimationProps = () => {
    if (!isAnimated) return {};

    return {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { type: 'spring', stiffness: 500, damping: 30 },
    };
  };

  // For the "NEW" badge effect
  const newBadgeMotion = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  };

  return (
    <motion.span
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap',
        variantClasses[variant],
        sizeClasses[size],
        isPulsing && 'animate-pulse',
        isClickable && 'cursor-pointer hover:opacity-90 active:scale-95 transition-all',
        className
      )}
      onClick={onClick}
      {...getAnimationProps()}
      whileHover={isClickable ? { scale: 1.05 } : undefined}
      whileTap={isClickable ? { scale: 0.95 } : undefined}
    >
      {children}
      
      {isNew && (
        <motion.span 
          className="ml-1.5 flex h-2 w-2"
          {...newBadgeMotion}
        >
          <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
        </motion.span>
      )}
    </motion.span>
  );
} 