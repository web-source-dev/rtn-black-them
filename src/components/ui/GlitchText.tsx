'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
  glitchDuration?: number;
  glitchIntensity?: number; // 1-10
  active?: boolean;
  onHover?: boolean;
  color?: string;
  glitchColor1?: string;
  glitchColor2?: string;
}

export default function GlitchText({
  text,
  className = '',
  glitchInterval = 3000,
  glitchDuration = 200,
  glitchIntensity = 5,
  active = true,
  onHover = false,
  color = 'text-white',
  glitchColor1 = 'text-red-500',
  glitchColor2 = 'text-blue-500',
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [glitchedText, setGlitchedText] = useState(text);
  const [glitchId, setGlitchId] = useState(0);
  
  // Refs to hold timeout IDs for proper cleanup
  const mainIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const glitchFrameRef = useRef<NodeJS.Timeout | null>(null);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Characters to use for glitching
  const glitchChars = '!<>-_\\/[]{}—=+*^?#________';

  // Function to create glitched version of text
  const glitchText = useCallback((originalText: string) => {
    // Intensity determines how many characters get glitched
    const charsToGlitch = Math.max(1, Math.floor(originalText.length * (glitchIntensity / 10)));
    let glitchedStr = originalText;
    
    // Replace random characters with glitch characters
    for (let i = 0; i < charsToGlitch; i++) {
      const randomIndex = Math.floor(Math.random() * originalText.length);
      const randomGlitchChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
      
      glitchedStr = 
        glitchedStr.substring(0, randomIndex) + 
        randomGlitchChar + 
        glitchedStr.substring(randomIndex + 1);
    }
    
    return glitchedStr;
  }, [glitchIntensity, glitchChars]);

  // Function to cleanup all timeouts
  const cleanupTimeouts = useCallback(() => {
    if (mainIntervalRef.current) {
      clearInterval(mainIntervalRef.current);
      mainIntervalRef.current = null;
    }
    
    if (glitchFrameRef.current) {
      clearInterval(glitchFrameRef.current);
      glitchFrameRef.current = null;
    }
    
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }
  }, []);

  // Function to start a glitch sequence
  const startGlitchSequence = useCallback(() => {
    setIsGlitching(true);
    setGlitchId(prevId => prevId + 1);
    
    // Clear any existing intervals/timeouts
    if (glitchFrameRef.current) {
      clearInterval(glitchFrameRef.current);
    }
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }
    
    let frameCount = 0;
    const totalFrames = 3; // Reduced frame count for quicker effect
    
    // Create several quick glitch frames
    glitchFrameRef.current = setInterval(() => {
      setGlitchedText(glitchText(text));
      frameCount++;
      
      if (frameCount >= totalFrames) {
        // Clear the glitch frame interval
        if (glitchFrameRef.current) {
          clearInterval(glitchFrameRef.current);
          glitchFrameRef.current = null;
        }
        
        // Immediately reset to original text
        setGlitchedText(text);
        setIsGlitching(false);
      }
    }, glitchDuration / totalFrames);
  }, [text, glitchDuration, glitchText]);

  useEffect(() => {
    // Update glitched text when original text changes
    setGlitchedText(text);
    
    if (!active || (onHover && !isHovering)) {
      cleanupTimeouts();
      setIsGlitching(false);
      setGlitchedText(text);
      return;
    }

    // Set up glitch interval
    cleanupTimeouts(); // Clean up existing intervals first
    
    mainIntervalRef.current = setInterval(() => {
      startGlitchSequence();
    }, glitchInterval);

    // Clean up all intervals and timeouts on component unmount
    return cleanupTimeouts;
  }, [active, isHovering, onHover, text, glitchDuration, glitchInterval, glitchIntensity, startGlitchSequence, cleanupTimeouts]);

  return (
    <div
      className={cn('relative inline-block', className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        if (onHover) {
          // Force reset text when mouse leaves
          setGlitchedText(text);
          setIsGlitching(false);
        }
      }}
    >
      {/* Base text layer */}
      <span className={cn('relative z-10', color)}>
        {isGlitching ? glitchedText : text}
      </span>
      
      {/* Glitch effect layers */}
      <AnimatePresence mode="wait">
        {isGlitching && (
          <>
            <motion.span
              key={`glitch-layer1-${glitchId}`}
              className={cn('absolute left-0 top-0 z-20 opacity-80', glitchColor1)}
              initial={{ x: -3, y: 2 }}
              animate={{ x: [-2, 2, -1, 1, 0], y: [1, -1, 0, 1, 0] }}
              exit={{ x: 0, y: 0, opacity: 0, transition: { duration: 0.1 } }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {glitchedText}
            </motion.span>
            
            <motion.span
              key={`glitch-layer2-${glitchId}`}
              className={cn('absolute left-0 top-0 z-30 opacity-80', glitchColor2)}
              initial={{ x: 3, y: -2 }}
              animate={{ x: [2, -2, 1, -1, 0], y: [-1, 1, 0, -1, 0] }}
              exit={{ x: 0, y: 0, opacity: 0, transition: { duration: 0.1 } }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {glitchedText}
            </motion.span>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 