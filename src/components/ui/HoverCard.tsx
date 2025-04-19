'use client';

import { useState, useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { cn } from './utils';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
interface HoverCardProps {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  className?: string;
  imageClassName?: string;
  onClick?: () => void;
}

export default function HoverCard({
  title,
  description,
  image,
  link,
  className = '',
  imageClassName = '',
  onClick,
}: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCursorPosition({ x, y });
  };

  return (
    <Link href={link || ''}>
    <div
      ref={cardRef}
      className={cn(
        'group relative overflow-hidden rounded-xl transition-all duration-500',
        'bg-white/50 dark:bg-gray-900 border border-transparent',
        isHovered && 'border-transparent shadow-xl transform-gpu -translate-y-1 cursor-pointer',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 z-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(90deg, var(--background) 0%, var(--primary) 50%, var(--secondary) 100%)',
          backgroundSize: '200% 100%',
        }}
        animate={isHovered ? { backgroundPosition: ['0% 0%', '100% 0%'] } : {}}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
      />
      
      {/* Card content */}
      <div className="relative z-10 m-[2px] rounded-lg bg-background dark:bg-gray-900 p-6 dark:text-card-foreground">
        {image && (
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <div className="aspect-video cursor-none w-full overflow-hidden">
              <Image 
                src={image} 
                alt={title} 
                className={cn(
                  'h-full w-full object-cover transition-transform duration-500', 
                  isHovered && 'scale-105',
                  imageClassName
                )}
                width={1000}
                height={1000}
              />
            </div>
            
            {/* Cursor arrow on hover */}
            {isHovered && (
              <motion.div
                className="absolute pointer-events-none rotate-[-45deg] flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-md"
                style={{
                  top: cursorPosition.y - 32,
                  left: cursorPosition.x - 32,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <BsArrowRight className="h-6 w-6" />
              </motion.div>
            )}
          </div>
        )}
        
        <h3 className="text-xl font-semibold mb-2 text-card">{title}</h3>
        {description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        )}
        <p className='flex items-center gap-2 text-primary'>
                Learn more <BsArrowRight />
        </p>
      </div>
    </div>
    </Link>
  );
} 