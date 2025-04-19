'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from './utils';
import Image from 'next/image';
interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  fallbackClassName?: string;
  status?: 'online' | 'offline' | 'away' | 'busy' | 'none';
  shape?: 'circle' | 'square';
  border?: boolean;
  borderColor?: string;
  onClick?: () => void;
  isAnimated?: boolean;
}

export default function Avatar({
  src,
  alt = '',
  fallback,
  size = 'md',
  className = '',
  fallbackClassName = '',
  status = 'none',
  shape = 'circle',
  border = false,
  borderColor = 'border-gray-200 dark:border-gray-800',
  onClick,
  isAnimated = false,
}: AvatarProps) {
  const [imageError, setImageError] = useState(!src);
  const [isLoading, setIsLoading] = useState(!!src);

  useEffect(() => {
    setImageError(!src);
    setIsLoading(!!src);
  }, [src]);

  // Generate initials for fallback
  const getInitials = () => {
    if (fallback) return fallback;
    if (!alt) return '';
    
    return alt
      .split(' ')
      .map(part => part.charAt(0))
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  // Size classes
  const sizeClasses = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
    xl: 'h-16 w-16 text-xl',
  };

  // Status indicator classes
  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
    none: 'hidden',
  };

  // Status animation variants
  const pulseVariants = {
    online: {
      scale: [1, 1.2, 1],
      opacity: [0.8, 1, 0.8],
      transition: { 
        repeat: Infinity, 
        duration: 2 
      }
    },
    away: {
      scale: [1, 1.15, 1],
      opacity: [0.8, 1, 0.8],
      transition: { 
        repeat: Infinity, 
        duration: 3 
      }
    },
    busy: {
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: { 
        repeat: Infinity, 
        duration: 1.5 
      }
    },
  };

  const avatarMotionProps = isAnimated ? {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: 'spring', stiffness: 500, damping: 30 },
  } : {};

  const isClickable = !!onClick;

  return (
    <motion.div
      className={cn(
        'relative inline-flex shrink-0',
        sizeClasses[size],
        shape === 'circle' ? 'rounded-full' : 'rounded-md',
        border && `border-2 ${borderColor}`,
        isClickable && 'cursor-pointer',
        className
      )}
      {...avatarMotionProps}
      whileHover={isClickable ? { scale: 1.05 } : undefined}
      whileTap={isClickable ? { scale: 0.95 } : undefined}
      onClick={onClick}
    >
      {/* Image */}
      {src && !imageError && (
        <>
          <Image
            src={src}
            alt={alt}
            className={cn(
              'h-full w-full object-cover',
              shape === 'circle' ? 'rounded-full' : 'rounded-md',
              isLoading && 'opacity-0'
            )}
            onLoad={() => setIsLoading(false)}
            onError={() => setImageError(true)}
          />
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <div className="h-1/3 w-1/3 animate-spin rounded-full border-b-2 border-gray-400" />
            </div>
          )}
        </>
      )}

      {/* Fallback */}
      {(imageError || !src) && (
        <div
          className={cn(
            'flex h-full w-full items-center justify-center bg-gray-200 dark:bg-gray-700',
            shape === 'circle' ? 'rounded-full' : 'rounded-md',
            fallbackClassName
          )}
        >
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {getInitials()}
          </span>
        </div>
      )}

      {/* Status indicator */}
      {status !== 'none' && (
        <motion.div
          className={cn(
            'absolute bottom-0 right-0 h-1/4 w-1/4 min-h-1.5 min-w-1.5 rounded-full ring-2 ring-white dark:ring-gray-950',
            statusColors[status]
          )}
          animate={status in pulseVariants ? pulseVariants[status as keyof typeof pulseVariants] : undefined}
        />
      )}
    </motion.div>
  );
} 