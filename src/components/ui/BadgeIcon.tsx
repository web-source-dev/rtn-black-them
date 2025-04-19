'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from './utils';

interface BadgeIconProps {
  icon: ReactNode;
  count?: number | string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'outline' | 'ghost';
  badgePosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  badgeSize?: 'xs' | 'sm' | 'md';
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
  maxCount?: number;
  showZero?: boolean;
  dot?: boolean;
  animate?: boolean;
  className?: string;
  badgeClassName?: string;
  onClick?: () => void;
  pulse?: boolean;
}

export default function BadgeIcon({
  icon,
  count,
  variant = 'primary',
  badgePosition = 'top-right',
  badgeSize = 'sm',
  iconSize = 'md',
  maxCount = 99,
  showZero = false,
  dot = false,
  animate = true,
  className = '',
  badgeClassName = '',
  onClick,
  pulse = false,
}: BadgeIconProps) {
  // Determine if the badge should be shown
  const shouldShowBadge = dot || 
    (count !== undefined && 
      (typeof count === 'number' ? count > 0 || showZero : true));
  
  // Format count if it's a number
  const formattedCount = dot 
    ? undefined 
    : typeof count === 'number' && count > maxCount 
      ? `${maxCount}+` 
      : count?.toString();

  // Variant styles for badge
  const variantClasses = {
    primary: 'bg-purple-600 text-white',
    secondary: 'bg-gray-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
    outline: 'bg-white text-gray-900 border border-gray-300 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700',
    ghost: 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100',
  };

  // Badge size classes
  const badgeSizeClasses = {
    xs: dot ? 'h-1.5 w-1.5' : 'h-3 min-w-3 text-[8px] px-0.5',
    sm: dot ? 'h-2 w-2' : 'h-4 min-w-4 text-[10px] px-1',
    md: dot ? 'h-2.5 w-2.5' : 'h-5 min-w-5 text-xs px-1',
  };

  // Icon size classes
  const iconSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  // Badge position classes
  const positionClasses = {
    'top-right': '-top-1 -right-1',
    'top-left': '-top-1 -left-1',
    'bottom-right': '-bottom-1 -right-1',
    'bottom-left': '-bottom-1 -left-1',
  };

  // Animation variants
  const badgeAnimationVariants = {
    initial: { 
      scale: 0,
      opacity: 0, 
    },
    animate: { 
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }
    },
    exit: {
      scale: 0,
      opacity: 0,
    }
  };

  return (
    <div 
      className={cn(
        'relative inline-flex items-center justify-center',
        iconSizeClasses[iconSize],
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {/* Icon */}
      {icon}
      
      {/* Badge */}
      {shouldShowBadge && (
        <motion.div
          className={cn(
            'absolute flex items-center justify-center rounded-full',
            positionClasses[badgePosition],
            variantClasses[variant],
            badgeSizeClasses[badgeSize],
            pulse && 'animate-pulse',
            badgeClassName
          )}
          initial={animate ? 'initial' : false}
          animate="animate"
          exit="exit"
          variants={animate ? badgeAnimationVariants : undefined}
        >
          {!dot && formattedCount}
        </motion.div>
      )}
    </div>
  );
} 