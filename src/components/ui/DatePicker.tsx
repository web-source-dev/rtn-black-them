'use client';

import React, { useState, useRef, useEffect } from 'react';
import { HiCalendar, HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  id?: string;
  className?: string;
  min?: string;
  max?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  placeholder = 'Select a date',
  required = false,
  id,
  className = '',
  min,
  max,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(
    value ? new Date(value) : new Date()
  );
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);
  const datePickerRef = useRef<HTMLDivElement>(null);

  // Format date as YYYY-MM-DD
  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  // Format date for display (Month DD, YYYY)
  const formatDisplayDate = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // Get days in month
  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get day of week for first day of month (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
  };

  // Generate the calendar days for the current month view
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const days = [];

    // Add empty cells for days before the first day of month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      days.push(date);
    }

    return days;
  };

  // Check if date is the selected date
  const isSelectedDate = (date: Date): boolean => {
    if (!value) return false;
    const selectedDate = new Date(value);
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  // Check if date is within min/max constraints
  const isDateDisabled = (date: Date): boolean => {
    if (min && formatDate(date) < min) return true;
    if (max && formatDate(date) > max) return true;
    return false;
  };

  // Navigate to previous month
  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    if (isDateDisabled(date)) return;
    onChange(formatDate(date));
    setIsOpen(false);
  };

  // Handle date hover
  const handleDateHover = (date: Date | null) => {
    setHoveredDate(date ? formatDate(date) : null);
  };

  // Reset when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle clear date
  const clearDate = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange('');
  };

  return (
    <div className={`relative ${className}`} ref={datePickerRef}>
      <div 
        className={`flex items-center justify-between w-full bg-background/30 border border-border/40 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary rounded-lg px-4 py-3 transition-colors text-left cursor-pointer ${
          !value ? 'text-foreground/50' : 'text-foreground'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <HiCalendar className="w-5 h-5 mr-2 text-foreground/70" />
          <span>{value ? formatDisplayDate(value) : placeholder}</span>
        </div>
        <div className="flex items-center">
          {value && (
            <button
              type="button"
              className="mr-1 text-foreground/50 hover:text-foreground transition-colors"
              onClick={clearDate}
              aria-label="Clear date"
            >
              <HiX className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Hidden native input for form validation */}
      <input
        type="date"
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        min={min}
        max={max}
        className="sr-only"
        aria-hidden="true"
        tabIndex={-1}
      />

      {isOpen && (
        <div className="absolute z-20 mt-1 p-3 w-full md:w-auto md:min-w-[320px] bg-background border border-border/40 rounded-lg shadow-lg max-h-96 overflow-auto">
          {/* Calendar header */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              className="p-1 rounded-full hover:bg-foreground/10 transition-colors"
              onClick={previousMonth}
              aria-label="Previous month"
            >
              <HiChevronLeft className="w-5 h-5" />
            </button>
            <h3 className="font-medium">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h3>
            <button
              type="button"
              className="p-1 rounded-full hover:bg-foreground/10 transition-colors"
              onClick={nextMonth}
              aria-label="Next month"
            >
              <HiChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div key={day} className="text-center text-xs font-medium text-foreground/70 py-1">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar dates */}
          <div className="grid grid-cols-7 gap-1">
            {generateCalendarDays().map((date, index) => {
              if (!date) {
                return <div key={`empty-${index}`} className="h-8" />;
              }

              const dateString = formatDate(date);
              const isDisabled = isDateDisabled(date);
              const isSelected = isSelectedDate(date);
              const isHovered = hoveredDate === dateString;

              return (
                <button
                  key={dateString}
                  type="button"
                  className={`h-8 w-8 flex items-center justify-center rounded-full text-sm transition-colors ${
                    isSelected
                      ? 'bg-primary text-primary-foreground'
                      : isHovered && !isDisabled
                      ? 'bg-primary/20'
                      : 'hover:bg-foreground/10'
                  } ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                  onClick={() => !isDisabled && handleDateSelect(date)}
                  onMouseEnter={() => handleDateHover(date)}
                  onMouseLeave={() => handleDateHover(null)}
                  disabled={isDisabled}
                  aria-label={date.toLocaleDateString()}
                  aria-selected={isSelected}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          {/* Today button */}
          <div className="mt-3 flex justify-center">
            <button
              type="button"
              className="text-sm text-primary hover:underline transition-colors"
              onClick={() => {
                const today = new Date();
                if (!isDateDisabled(today)) {
                  handleDateSelect(today);
                  setCurrentMonth(today);
                }
              }}
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker; 