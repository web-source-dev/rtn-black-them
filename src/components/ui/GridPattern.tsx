'use client';

import React from 'react';

interface GridPatternProps {
  className?: string;
  size?: number;
  dotSize?: number;
  dotColor?: string;
  backgroundOpacity?: number;
}

export default function GridPattern({
  className = '',
  size = 40,
  dotSize = 1,
  dotColor = 'currentColor',
  backgroundOpacity = 0.05,
}: GridPatternProps) {
  return (
    <div 
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{
        backgroundImage: `radial-gradient(${dotColor} ${dotSize}px, transparent 0)`,
        backgroundSize: `${size}px ${size}px`,
        backgroundPosition: '0 0',
        opacity: backgroundOpacity,
      }}
    />
  );
} 