'use client';

import { motion } from 'framer-motion';
import { cn } from './utils';

interface SpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'border' | 'dots' | 'bars' | 'circles' | 'pulse';
  color?: string;
  className?: string;
  thickness?: 'thin' | 'regular' | 'thick';
  speed?: 'slow' | 'normal' | 'fast';
  label?: string;
}

export default function Spinner({
  size = 'md',
  variant = 'border',
  color = 'border-purple-600 text-purple-600',
  className = '',
  thickness = 'regular',
  speed = 'normal',
  label,
}: SpinnerProps) {
  const sizeClasses = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12',
  };

  const thicknessClasses = {
    thin: 'border border-t-2',
    regular: 'border-2 border-t-4',
    thick: 'border-4 border-t-8',
  };

  const speedDuration = {
    slow: 2,
    normal: 1,
    fast: 0.6,
  };

  // Base spinner with border
  if (variant === 'border') {
    const borderColorClass = color.startsWith('border-') 
      ? color 
      : 'border-purple-600';
    
    return (
      <div role="status" className={cn('flex items-center', className)}>
        <motion.div
          className={cn(
            'rounded-full border-transparent',
            sizeClasses[size],
            thicknessClasses[thickness],
            borderColorClass,
          )}
          animate={{ rotate: 360 }}
          transition={{
            duration: speedDuration[speed],
            ease: 'linear',
            repeat: Infinity,
          }}
        />
        {label && <span className="ml-2">{label}</span>}
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  // Dots spinner
  if (variant === 'dots') {
    const textColorClass = color.startsWith('text-') 
      ? color 
      : 'text-purple-600';
    
    return (
      <div role="status" className={cn('flex items-center', className)}>
        <div className="inline-flex gap-1">
          {[0, 1, 2].map((i,index) => (
            <motion.div
              key={index}
              className={cn(
                'rounded-full',
                textColorClass,
                size === 'xs' ? 'h-1 w-1' :
                size === 'sm' ? 'h-1.5 w-1.5' :
                size === 'md' ? 'h-2 w-2' :
                size === 'lg' ? 'h-2.5 w-2.5' : 'h-3 w-3'
              )}
              initial={{ backgroundColor: 'currentColor', opacity: 0.4 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: speedDuration[speed] * 2,
                times: [0, 0.5, 1],
                ease: 'easeInOut',
                delay: i * (speedDuration[speed] / 3),
                repeat: Infinity,
              }}
            />
          ))}
        </div>
        {label && <span className="ml-2">{label}</span>}
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  // Bars variant
  if (variant === 'bars') {
    const textColorClass = color.startsWith('text-') 
      ? color 
      : 'text-purple-600';
    
    return (
      <div role="status" className={cn('flex items-center', className)}>
        <div className="inline-flex gap-1 items-end h-full">
          {[0, 1, 2, 3].map((i,index) => (
            <motion.div
              key={index}
              className={cn(
                'w-1 bg-current rounded',
                textColorClass,
                size === 'xs' ? 'h-3' :
                size === 'sm' ? 'h-4' :
                size === 'md' ? 'h-6' :
                size === 'lg' ? 'h-8' : 'h-10'
              )}
              initial={{ height: '30%' }}
              animate={{ height: ['30%', '100%', '30%'] }}
              transition={{
                duration: speedDuration[speed] * 1.5,
                times: [0, 0.5, 1],
                ease: 'easeInOut',
                delay: i * (speedDuration[speed] / 5),
                repeat: Infinity,
              }}
              style={{ 
                transformOrigin: 'bottom'
              }}
            />
          ))}
        </div>
        {label && <span className="ml-2">{label}</span>}
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  // Circles variant
  if (variant === 'circles') {
    const textColorClass = color.startsWith('text-') 
      ? color 
      : 'text-purple-600';
    
    return (
      <div role="status" className={cn('flex items-center', className)}>
        <div className="relative inline-flex">
          {[0, 1, 2].map((i,index) => (
            <motion.div
              key={index}
              className={cn(
                'absolute rounded-full border-2 border-current',
                textColorClass,
                sizeClasses[size],
              )}
              initial={{ opacity: 0.3, scale: 0.8 }}
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.8, 1, 0.8] }}
              transition={{
                duration: speedDuration[speed] * 2,
                times: [0, 0.5, 1],
                ease: 'easeInOut',
                delay: i * (speedDuration[speed] / 3),
                repeat: Infinity,
              }}
            />
          ))}
          <div className={cn('opacity-0', sizeClasses[size])} />
        </div>
        {label && <span className="ml-2">{label}</span>}
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  // Pulse spinner
  if (variant === 'pulse') {
    const bgColorClass = color.startsWith('bg-') 
      ? color 
      : 'bg-purple-600';
    
    return (
      <div role="status" className={cn('flex items-center', className)}>
        <motion.div
          className={cn(
            'rounded-full',
            bgColorClass,
            sizeClasses[size],
          )}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: speedDuration[speed] * 1.5,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        />
        {label && <span className="ml-2">{label}</span>}
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  // Default case - return border spinner as fallback
  return (
    <div role="status" className={cn('flex items-center', className)}>
      <motion.div
        className={cn(
          'rounded-full border-2 border-transparent border-t-4',
          sizeClasses[size],
          color.startsWith('border-') ? color : 'border-purple-600',
        )}
        animate={{ rotate: 360 }}
        transition={{
          duration: speedDuration[speed],
          ease: 'linear',
          repeat: Infinity,
        }}
      />
      {label && <span className="ml-2">{label}</span>}
      <span className="sr-only">Loading...</span>
    </div>
  );
} 