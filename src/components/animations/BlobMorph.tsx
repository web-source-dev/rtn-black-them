'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BlobMorphProps {
  color?: string;
  size?: number | string;
  animationDuration?: number;
  className?: string;
}

export default function BlobMorph({
  color = 'rgba(130, 90, 255, 0.3)',
  size = 300,
  animationDuration = 7,
  className = '',
}: BlobMorphProps) {
  const randomPath = useRef<number[]>([]);

  useEffect(() => {
    // Generate random values for the blob
    randomPath.current = Array.from({ length: 8 }, () => Math.random() * 100);
  }, []);

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
      }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          borderRadius: [
            '60% 40% 30% 70%/60% 30% 70% 40%',
            '30% 60% 70% 40%/50% 60% 30% 60%',
            '60% 40% 30% 70%/60% 30% 70% 40%',
          ],
        }}
        transition={{
          duration: animationDuration,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundColor: color,
        }}
      />
    </motion.div>
  );
} 