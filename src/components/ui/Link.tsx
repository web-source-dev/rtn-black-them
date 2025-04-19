'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from './utils';

interface LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  variant?: 'default' | 'subtle' | 'underline' | 'highlight' | 'button';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  underlineEffect?: 'slide' | 'grow' | 'static' | 'none';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  animate?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Link({
  children,
  href,
  className = '',
  variant = 'default',
  size = 'md',
  external = false,
  underlineEffect = 'slide',
  icon,
  iconPosition = 'right',
  animate = true,
  disabled = false,
  onClick,
}: LinkProps) {
  const variantClasses = {
    default: 'text-purple-600 dark:text-purple-400',
    subtle: 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
    underline: 'text-purple-600 dark:text-purple-400 underline underline-offset-4',
    highlight: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/30 px-1.5 py-0.5 rounded',
    button: 'text-white bg-purple-600 hover:bg-purple-700 px-3 py-1.5 rounded',
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };
  
  // Whether to show the underline effect (not for all variants)
  const showUnderlineEffect = 
    animate && 
    underlineEffect !== 'none' && 
    variant !== 'button' && 
    variant !== 'highlight' && 
    !disabled;

  return (
    <span className="relative inline-flex">
      <motion.a
        href={disabled ? '#' : href}
        className={cn(
          'relative inline-flex items-center transition-colors',
          variantClasses[variant],
          sizeClasses[size],
          disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
          className
        )}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={(e) => {
          if (disabled) e.preventDefault();
          if (!disabled && onClick) onClick();
        }}
        whileHover={animate && !disabled ? { scale: variant === 'button' ? 1.03 : 1.01 } : undefined}
        whileTap={animate && !disabled ? { scale: 0.98 } : undefined}
      >
        {/* Left Icon */}
        {icon && iconPosition === 'left' && (
          <motion.span 
            className="mr-1.5"
            animate={{ x: 0 }}
            whileHover={animate && !disabled ? { x: -3 } : undefined}
          >
            {icon}
          </motion.span>
        )}
        
        {/* Link Text */}
        <span>{children}</span>
        
        {/* Right Icon */}
        {icon && iconPosition === 'right' && (
          <motion.span 
            className="ml-1.5"
            animate={{ x: 0 }}
            whileHover={animate && !disabled ? { x: 3 } : undefined}
          >
            {icon}
          </motion.span>
        )}
        
        {/* External Link Indicator */}
        {external && (
          <svg 
            className="ml-1 h-3 w-3" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        )}
      </motion.a>
      
      {/* Underline Effect - Separate from the anchor to avoid rendering issues */}
      {showUnderlineEffect && (
        <motion.span
          className={cn(
            'absolute bottom-0 left-0 h-0.5 bg-current pointer-events-none',
            underlineEffect === 'slide' ? 'w-0' : underlineEffect === 'grow' ? 'w-1/4 left-1/2 -translate-x-1/2' : 'w-full'
          )}
          initial={underlineEffect === 'static' ? { opacity: 0.5 } : { width: underlineEffect === 'grow' ? '25%' : 0 }}
          whileHover={
            underlineEffect === 'slide' 
              ? { width: '100%' } 
              : underlineEffect === 'grow' 
                ? { width: '100%', left: 0, translateX: 0 } 
                : { opacity: 1 }
          }
          transition={{ duration: 0.2 }}
        />
      )}
    </span>
  );
} 