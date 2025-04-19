'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AmbientLightEffectProps {
  children: React.ReactNode;
  color?: string;
  size?: number;
  opacity?: number;
  blur?: number;
  className?: string;
}

export default function AmbientLightEffect({
  children,
  color = '#ffffff',
  size = 300,
  opacity = 0.15,
  blur = 40,
  className = '',
}: AmbientLightEffectProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isClient) return <div className={className}>{children}</div>;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="pointer-events-none absolute z-10"
        animate={{
          x: mousePosition.x - size / 2,
          y: mousePosition.y - size / 2,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          background: color,
          opacity,
          filter: `blur(${blur}px)`,
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
} 