'use client';

import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { cn } from './utils';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
  trackClassName?: string;
  thumbClassName?: string;
  showTooltip?: boolean;
  tooltipFormat?: (value: number) => string;
  showLabels?: boolean;
  disabled?: boolean;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Slider({
  min = 0,
  max = 100,
  step = 1,
  defaultValue,
  value: controlledValue,
  onChange,
  className = '',
  trackClassName = '',
  thumbClassName = '',
  showTooltip = false,
  tooltipFormat = (value) => `${value}`,
  showLabels = false,
  disabled = false,
  color = 'bg-purple-600',
  size = 'md',
}: SliderProps) {
  const isControlled = controlledValue !== undefined;
  const [localValue, setLocalValue] = useState(defaultValue ?? min);
  const actualValue = isControlled ? controlledValue : localValue;
  const [isDragging, setIsDragging] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const rangeRef = useRef<HTMLInputElement>(null);

  // Calculate percentage of value within range for styling
  const percentage = ((actualValue - min) / (max - min)) * 100;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isControlled) {
      setLocalValue(newValue);
    }
    onChange?.(newValue);
  };

  // Size classes
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  const thumbSizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  useEffect(() => {
    // If defaultValue changes and component is uncontrolled
    if (!isControlled && defaultValue !== undefined) {
      setLocalValue(defaultValue);
    }
  }, [defaultValue, isControlled]);

  return (
    <div className={cn('relative py-4', className)}>
      {showLabels && (
        <div className="flex justify-between mb-2 text-sm text-gray-500">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}

      <div className="relative">
        {/* Background track */}
        <div 
          className={cn(
            'absolute inset-0 rounded-full bg-gray-200 dark:bg-gray-700',
            sizeClasses[size],
            trackClassName
          )}
        />

        {/* Colored progress track */}
        <motion.div
          className={cn(
            'absolute left-0 top-0 bottom-0 rounded-full',
            color,
            sizeClasses[size]
          )}
          style={{ width: `${percentage}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.2 }}
        />

        {/* Thumb tooltip */}
        {showTooltip && tooltipVisible && (
          <motion.div
            className="absolute -top-8 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-md"
            style={{ left: `calc(${percentage}% - 12px)` }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {tooltipFormat(actualValue)}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
          </motion.div>
        )}

        {/* Input range with custom styling */}
        <input
          ref={rangeRef}
          type="range"
          min={min}
          max={max}
          step={step}
          value={actualValue}
          onChange={handleChange}
          disabled={disabled}
          className={cn(
            'w-full appearance-none bg-transparent cursor-pointer',
            sizeClasses[size],
            disabled && 'cursor-not-allowed opacity-60'
          )}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          style={{
            // Hide default track but keep interaction
            WebkitAppearance: 'none',
            appearance: 'none',
          }}
        />

        {/* Custom thumb */}
        <motion.div
          className={cn(
            'pointer-events-none absolute top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md ring-2 ring-purple-500',
            thumbSizeClasses[size],
            isDragging && 'ring-purple-600',
            thumbClassName
          )}
          style={{ left: `calc(${percentage}% - ${size === 'sm' ? '6px' : size === 'md' ? '8px' : '10px'})` }}
          animate={{
            scale: isDragging ? 1.2 : 1,
            boxShadow: isDragging 
              ? '0 0 0 8px rgba(124, 58, 237, 0.1)' 
              : '0 0 0 0px rgba(124, 58, 237, 0)'
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 15
          }}
        />
      </div>
    </div>
  );
} 