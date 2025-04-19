'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from './utils';

interface ShinyBorderButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  gradientColors?: string[];
}

export default function ShinyBorderButton({
  children,
  className = '',
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  gradientColors = ['#4F46E5', '#06B6D4', '#818CF8'],
}: ShinyBorderButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const variantClasses = {
    primary: 'bg-black text-white',
    secondary: 'bg-white text-black',
    accent: 'bg-black text-white',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  const borderVariants = {
    idle: { 
      backgroundPosition: '0% 50%',
    },
    animate: { 
      backgroundPosition: '100% 50%',
    },
  };

  const gradientBg = `linear-gradient(90deg, ${gradientColors.join(', ')})`;

  return (
    <div className="relative inline-block">
      <motion.div
        className="absolute inset-0 rounded-md p-[2px]"
        style={{ 
          background: gradientBg,
          backgroundSize: '200% 200%',
        }}
        variants={borderVariants}
        initial="idle"
        animate={isHovered ? 'animate' : 'idle'}
        transition={{ duration: 1.5, ease: 'easeInOut', repeat: isHovered ? Infinity : 0 }}
      />
      <button
        className={cn(
          'relative rounded-md font-medium z-10 transition-transform',
          variantClasses[variant],
          sizeClasses[size],
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
} 