'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from './utils';

interface ProgressBarProps {
  value?: number;
  max?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: string;
  trackColor?: string;
  className?: string;
  labelPosition?: 'top' | 'inside' | 'none';
  labelFormat?: (value: number, max: number) => string;
  showValue?: boolean;
  animate?: boolean;
  rounded?: boolean;
  striped?: boolean;
  indeterminate?: boolean;
  variant?: 'default' | 'gradient';
  gradientFrom?: string;
  gradientTo?: string;
}

export default function ProgressBar({
  value = 0,
  max = 100,
  size = 'md',
  color = 'bg-purple-600',
  trackColor = 'bg-gray-200 dark:bg-gray-700',
  className = '',
  labelPosition = 'none',
  labelFormat,
  showValue = false,
  animate = true,
  rounded = true,
  striped = false,
  indeterminate = false,
  variant = 'default',
  gradientFrom = 'from-purple-500',
  gradientTo = 'to-blue-500',
}: ProgressBarProps) {
  const [renderedValue, setRenderedValue] = useState(0);
  const percentage = Math.min(Math.max(0, value), max) / max;
  const displayValue = Math.round(percentage * 100);

  // Animate the progress value
  useEffect(() => {
    if (!animate) {
      setRenderedValue(value);
      return;
    }

    // Start from current value and animate to the new value
    const startValue = renderedValue;
    const endValue = value;
    const duration = 500; // ms
    const startTime = Date.now();

    const animateValue = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const nextValue = startValue + (endValue - startValue) * progress;

      setRenderedValue(nextValue);

      if (progress < 1) {
        requestAnimationFrame(animateValue);
      }
    };

    requestAnimationFrame(animateValue);
  }, [value, animate, renderedValue]);

  // Size classes for the track height
  const sizeClasses = {
    xs: 'h-1',
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };

  // Label inside size classes
  const labelInsideSizeClasses = {
    xs: 'text-[0px]', // Too small for text
    sm: 'text-[8px]',
    md: 'text-xs',
    lg: 'text-sm',
  };

  // Format the label based on the format function or default
  const formattedLabel = labelFormat 
    ? labelFormat(value, max) 
    : showValue ? `${displayValue}%` : '';

  // Create a gradient or solid color
  const barColor = variant === 'gradient' 
    ? `bg-gradient-to-r ${gradientFrom} ${gradientTo}` 
    : color;

  // Animation variants for the progress bar
  const progressVariants = {
    indeterminate: {
      x: ['-100%', '100%'],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'linear',
      },
    },
  };

  return (
    <div className={cn('w-full space-y-1', className)}>
      {/* Top label */}
      {labelPosition === 'top' && formattedLabel && (
        <div className="flex justify-between text-sm">
          <span>{formattedLabel}</span>
          {showValue && <span>{displayValue}%</span>}
        </div>
      )}

      {/* Progress track */}
      <div
        className={cn(
          'w-full overflow-hidden',
          trackColor,
          sizeClasses[size],
          rounded && 'rounded-full'
        )}
      >
        {/* Progress bar - solid or indeterminate */}
        {indeterminate ? (
          <motion.div
            className={cn(
              'h-full w-1/3',
              barColor,
              rounded && 'rounded-full',
              striped && 'bg-stripes'
            )}
            animate="indeterminate"
            variants={progressVariants}
          />
        ) : (
          <motion.div
            className={cn(
              'flex h-full items-center',
              barColor,
              rounded && 'rounded-full',
              striped && 'bg-stripes'
            )}
            initial={{ width: 0 }}
            animate={{ width: `${percentage * 100}%` }}
            transition={{ duration: animate ? 0.5 : 0, ease: 'easeOut' }}
          >
            {/* Inside label */}
            {labelPosition === 'inside' && formattedLabel && (
              <span 
                className={cn(
                  'ml-2 font-medium text-white',
                  labelInsideSizeClasses[size]
                )}
              >
                {formattedLabel}
              </span>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
} 