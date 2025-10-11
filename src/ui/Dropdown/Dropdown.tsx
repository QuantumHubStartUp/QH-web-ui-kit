"use client";

import { VariantProps } from "class-variance-authority";
import { dropdownButtonVariants, dropdownItemVariants, dropdownMenuVariants, dropdownVariants } from "./variants";
import React, { useEffect, useRef, useState } from "react";

interface DropdownItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger' | 'success' | 'disabled';
  onClick?: () => void;
}

interface DropdownProps 
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof dropdownVariants> {
  items: DropdownItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  variant?: VariantProps<typeof dropdownButtonVariants>['variant'];
  size?: VariantProps<typeof dropdownButtonVariants>['size'];
  position?: VariantProps<typeof dropdownMenuVariants>['position'];
  disabled?: boolean;
  className?: string;
  trigger?: React.ReactNode;
}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ 
    className,
    fullWidth = false,
    items,
    value,
    defaultValue,
    onChange,
    placeholder = "Select an option",
    variant = 'primary',
    size = 'md',
    position = 'bottom',
    disabled = false,
    trigger,
    ...props 
  }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || defaultValue || '');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedItem = items.find(item => item.value === selectedValue);

    // Обработчик клика вне dropdown
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Синхронизация с внешним value
    useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(value);
      }
    }, [value]);

    const handleItemClick = (item: DropdownItem) => {
      if (item.variant === 'disabled' || item.value === selectedValue) return;
      
      setSelectedValue(item.value);
      onChange?.(item.value);
      item.onClick?.();
      setIsOpen(false);
    };

    const toggleDropdown = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
    };

    // Закрытие по Escape
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isOpen) {
          setIsOpen(false);
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    return (
      <div
        ref={dropdownRef}
        className={dropdownVariants({ fullWidth, className })}
        {...props}
      >
        {/* Если передан trigger, рендерим его с добавлением обработчика */}
        {trigger ? (
          <div 
            onClick={toggleDropdown}
            className="cursor-pointer"
          >
            {trigger}
          </div>
        ) : (
          // Стандартная кнопка, если trigger не передан
          <button
            type="button"
            onClick={toggleDropdown}
            disabled={disabled}
            className={dropdownButtonVariants({ variant, size, fullWidth })}
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <span className="truncate">
              {selectedItem ? selectedItem.label : placeholder}
            </span>
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}

        {/* Выпадающее меню */}
        <div 
          className={`
            ${dropdownMenuVariants({ position, fullWidth })}
            transition-all duration-200 ease-in-out
            ${isOpen 
              ? 'opacity-100 scale-100 translate-y-0 visible' 
              : 'opacity-0 scale-95 -translate-y-2 invisible'
            }
          `}
          style={{ zIndex: 9999 }}
        >
          <div className="py-1">
            {items.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => handleItemClick(item)}
                className={dropdownItemVariants({
                  variant: item.variant,
                  active: item.value === selectedValue
                })}
                disabled={item.variant === 'disabled'}
                aria-selected={item.value === selectedValue}
              >
                {item.icon && (
                  <span className="flex-shrink-0 w-4 h-4">
                    {item.icon}
                  </span>
                )}
                <span className="flex-1 truncate text-left">{item.label}</span>
                
                {item.value === selectedValue && (
                  <svg 
                    className="w-4 h-4 flex-shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export { Dropdown };
export type { DropdownProps };