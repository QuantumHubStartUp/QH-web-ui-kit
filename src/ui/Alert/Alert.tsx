"use client";

import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { alertVariants } from './variants';



interface AlertProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  message: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ 
    className,
    variant = 'info',
    size = 'md',
    fullWidth = false,
    title,
    message,
    icon,
    action,
    ...props 
  }, ref) => {
    
    // Иконки по умолчанию для каждого типа
    const getDefaultIcon = () => {
      const iconClass = "w-5 h-5 flex-shrink-0";
      
      switch (variant) {
        case 'success':
          return (
            <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          );
        case 'warning':
          return (
            <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          );
        case 'error':
          return (
            <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          );
        case 'neutral':
          return (
            <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          );
        default:
          return (
            <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          );
      }
    };

    return (
      <div
        ref={ref}
        className={alertVariants({ variant, size, fullWidth, className })}
        role="alert"
        aria-live="polite"
        {...props}
      >
        <div className="flex items-start gap-3">
          {/* Иконка */}
          <div className="flex-shrink-0 mt-0.5">
            {icon || getDefaultIcon()}
          </div>

          {/* Контент */}
          <div className="flex-1 min-w-0">
            {/* Заголовок */}
            {title && (
              <h4 className={`
                font-semibold mb-1
                ${size === 'sm' ? 'text-sm' : ''}
                ${size === 'lg' ? 'text-lg' : ''}
              `}>
                {title}
              </h4>
            )}
            
            {/* Сообщение */}
            <p className={`
              leading-relaxed
              ${size === 'sm' ? 'text-sm' : ''}
              ${size === 'lg' ? 'text-lg' : ''}
            `}>
              {message}
            </p>
            
            {/* Кнопка действия */}
            {action && (
              <div className="mt-3">
                <button
                  type="button"
                  onClick={action.onClick}
                  className={`
                    font-medium underline-offset-2 hover:underline focus:outline-none focus:underline
                    ${variant === 'info' ? 'text-blue-700 dark:text-blue-300' : ''}
                    ${variant === 'success' ? 'text-green-700 dark:text-green-300' : ''}
                    ${variant === 'warning' ? 'text-yellow-700 dark:text-yellow-300' : ''}
                    ${variant === 'error' ? 'text-red-700 dark:text-red-300' : ''}
                    ${variant === 'neutral' ? 'text-gray-700 dark:text-gray-300' : ''}
                  `}
                >
                  {action.label}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';


export { Alert };
export type { AlertProps };