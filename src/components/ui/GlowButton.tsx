'use client';

import { useState, useRef, MouseEvent } from 'react';
import { cn } from './utils';

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
}

export default function GlowButton({
  children,
  className = '',
  glowColor = 'rgba(132, 90, 223, 0.5)',
  onClick,
  disabled = false,
  size = 'md',
  variant = 'default',
}: GlowButtonProps) {
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || disabled) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    default: 'bg-purple-600 text-white border-transparent hover:bg-purple-700',
    outline: 'bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/20',
    ghost: 'bg-transparent text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/20 border-transparent',
  };

  return (
    <button
      ref={buttonRef}
      className={cn(
        'relative overflow-hidden rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50',
        sizeClasses[size],
        variantClasses[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {/* Glow effect */}
      <div
        className={cn(
          'absolute inset-0 pointer-events-none transition-opacity',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          background: `radial-gradient(circle 80px at ${glowPosition.x}px ${glowPosition.y}px, ${glowColor}, transparent)`,
        }}
      />
      
      {/* Keep the content over the glow */}
      <span className="relative z-10">{children}</span>
    </button>
  );
} 