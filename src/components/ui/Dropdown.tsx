'use client';

import React, { useState, useRef, useEffect } from 'react';
import { HiChevronDown, HiCheck } from 'react-icons/hi';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  id?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  required = false,
  id,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        id={id}
        className={`flex items-center justify-between w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-colors text-left ${
          !selectedOption ? 'text-foreground/50' : 'text-foreground'
        }`}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        data-required={required}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <HiChevronDown 
          className={`w-5 h-5 text-foreground/70 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-background border border-border/40 rounded-lg shadow-lg py-1 max-h-60 overflow-auto">
          <ul className="py-1" role="listbox">
            {options.map((option) => (
              <li
                key={option.value}
                role="option"
                aria-selected={value === option.value}
                className={`flex items-center justify-between px-4 py-2 cursor-pointer transition-colors ${
                  value === option.value
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-foreground/5'
                }`}
                onClick={() => handleOptionClick(option.value)}
              >
                <span>{option.label}</span>
                {value === option.value && <HiCheck className="w-5 h-5" />}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Hidden native select for form validation */}
      <select
        name={id}
        id={`native-${id}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="sr-only bg-black z-[100px]"
        aria-hidden="true"
        tabIndex={-1}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown; 