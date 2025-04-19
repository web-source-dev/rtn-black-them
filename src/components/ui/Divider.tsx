'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from './utils';

interface DividerProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted' | 'gradient';
  size?: 'thin' | 'regular' | 'thick';
  color?: string;
  label?: ReactNode;
  labelPosition?: 'center' | 'start' | 'end';
  gradientFrom?: string;
  gradientTo?: string;
  animate?: boolean;
  animationDuration?: number;
}

export default function Divider({
  className = '',
  orientation = 'horizontal',
  variant = 'solid',
  size = 'regular',
  color = '',
  label,
  labelPosition = 'center',
  gradientFrom = 'from-purple-500',
  gradientTo = 'to-blue-500',
  animate = false,
  animationDuration = 1.5,
}: DividerProps) {
  // Thickness class based on size
  const sizeClasses = {
    thin: orientation === 'horizontal' ? 'h-px' : 'w-px',
    regular: orientation === 'horizontal' ? 'h-[1px]' : 'w-[1px]',
    thick: orientation === 'horizontal' ? 'h-0.5' : 'w-0.5',
  };

  // Border style based on variant
  const variantClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
    gradient: 'bg-gradient-to-r border-0',
  };

  // Base color or default color
  const colorClass = color || 'border-gray-200 dark:border-gray-800';

  // Gradient colors if using gradient variant
  const gradientClasses = variant === 'gradient' 
    ? `${gradientFrom} ${gradientTo}` 
    : '';

  // Animation variants
  const animationVariants = {
    hidden: { 
      scaleX: orientation === 'horizontal' ? 0 : 1,
      scaleY: orientation === 'vertical' ? 0 : 1,
      opacity: 0 
    },
    visible: { 
      scaleX: 1, 
      scaleY: 1, 
      opacity: 1,
      transition: {
        duration: animationDuration,
        ease: 'easeOut',
      }
    }
  };
  // If the divider has a label
  if (label) {
    return (
      <div 
        className={cn(
          'flex items-center w-full',
          orientation === 'vertical' && 'flex-col h-full',
          className
        )}
      >
        <motion.div
          className={cn(
            orientation === 'horizontal' ? 'w-full border-t' : 'h-full border-l',
            variant !== 'gradient' && colorClass,
            variant !== 'gradient' && variantClasses[variant],
            variant === 'gradient' && `${gradientClasses} ${sizeClasses[size]}`,
            labelPosition === 'center' ? 'flex-1' : labelPosition === 'start' ? 'w-8' : 'flex-1'
          )}
          initial={animate ? 'hidden' : 'visible'}
          animate="visible"
          variants={animationVariants}
          style={{
            transformOrigin: labelPosition === 'center' ? 'center' : 
                           labelPosition === 'start' ? 'left' : 'right'
          }}
        />
        <div 
          className={cn(
            'px-2 text-gray-500 text-sm whitespace-nowrap',
            orientation === 'vertical' && 'py-2'
          )}
        >
          {label}
        </div>
        {(labelPosition === 'center' || labelPosition === 'start') && (
          <motion.div
            className={cn(
              orientation === 'horizontal' ? 'w-full border-t' : 'h-full border-l',
              variant !== 'gradient' && colorClass,
              variant !== 'gradient' && variantClasses[variant],
              variant === 'gradient' && `${gradientClasses} ${sizeClasses[size]}`,
              labelPosition === 'center' ? 'flex-1' : 'flex-1'
            )}
            initial={animate ? 'hidden' : 'visible'}
            animate="visible"
            variants={animationVariants}
            style={{
              transformOrigin: labelPosition === 'center' ? 'center' : 'right'
            }}
          />
        )}
      </div>
    );
  }

  // Simple divider without label
  return (
    <motion.div
      className={cn(
        orientation === 'horizontal' ? 'w-full' : 'h-full',
        variant !== 'gradient' && `border-${orientation === 'horizontal' ? 't' : 'l'}`,
        variant !== 'gradient' && colorClass,
        variant !== 'gradient' && variantClasses[variant],
        variant === 'gradient' && `${gradientClasses} ${sizeClasses[size]}`,
        className
      )}
      initial={animate ? 'hidden' : 'visible'}
      animate="visible"
      variants={animationVariants}
    />
  );
} 