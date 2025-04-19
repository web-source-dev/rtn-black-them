'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from './utils';

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'ghost' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
  tooltip?: string;
  isActive?: boolean;
  hoverEffect?: 'scale' | 'rotate' | 'bounce' | 'glow' | 'none';
}

export default function IconButton({
  icon,
  onClick,
  variant = 'default',
  size = 'md',
  className = '',
  disabled = false,
  ariaLabel,
  tooltip,
  isActive = false,
  hoverEffect = 'scale',
}: IconButtonProps) {
  const variantClasses = {
    default: 'bg-purple-600 text-white hover:bg-purple-700',
    outline: 'bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/20',
    ghost: 'bg-transparent text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/20',
    light: 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50',
    dark: 'bg-gray-800 text-white hover:bg-gray-700',
  };

  const sizeClasses = {
    sm: 'p-1.5 text-sm',
    md: 'p-2 text-base',
    lg: 'p-3 text-lg',
  };

  // Different hover animations
  const getHoverAnimation = () => {
    switch (hoverEffect) {
      case 'scale':
        return { scale: 1.1 };
      case 'rotate':
        return { rotate: 15 };
      case 'bounce':
        return { 
          y: [0, -6, 0],
          transition: { duration: 0.5, times: [0, 0.5, 1] }
        };
      case 'glow':
        return { 
          boxShadow: '0 0 8px rgba(124, 58, 237, 0.6)'
        };
      case 'none':
        return {};
      default:
        return { scale: 1.1 };
    }
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      title={tooltip}
      className={cn(
        'relative flex items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        isActive && 'ring-2 ring-purple-500',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      whileHover={!disabled ? getHoverAnimation() : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      initial={false}
    >
      {/* Glow effect only for glow hover effect */}
      {hoverEffect === 'glow' && !disabled && (
        <motion.div
          className="absolute inset-0 -z-10 rounded-full bg-purple-500 opacity-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.4, scale: 1.2 }}
          transition={{ duration: 0.2 }}
        />
      )}
      
      {icon}
      
      {/* Active indicator dot */}
      {isActive && (
        <motion.div 
          className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </motion.button>
  );
} 