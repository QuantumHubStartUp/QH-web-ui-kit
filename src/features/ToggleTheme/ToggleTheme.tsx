"use client";

import React from 'react';
import { useTheme } from './hooks/useTheme.hook';
import { ThemeSkeleton } from './components/ThemeSkeleton';
import { ThemeIconButton } from './components/ThemeIconButton';
import { ThemeTextButton } from './components/ThemeTextButton';
import { ThemeSwitch } from './components/ThemeSwitch';


interface ToggleThemeProps {
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
  variant?: 'icon' | 'button' | 'switch';
}

/**
 * Компонент для смены темы приложения.
 * 
 * @param {ToggleThemeProps} props - Объект с параметрами компонента.
 * @param {string} [props.size='md'] - Размер текста.
 * @param {boolean} [props.showLabel=false] - Показывать ли метку переключателя.
 * @param {string} [props.className=''] - Дополнительный класс для компонента.
 * @param {string} [props.variant='icon'] - Вариант переключателя (icon, button, switch).
 * 
 * @returns {React.ReactElement} - Компонент для смены темы приложения.
 */
const ToggleTheme: React.FC<ToggleThemeProps> = ({
  size = 'md',
  showLabel = false,
  className = '',
  variant = 'icon'
}) => {
  const { isDark, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return <ThemeSkeleton size={size} className={className} />;
  }

  switch (variant) {
    case 'icon':
      return (
        <ThemeIconButton
          isDark={isDark}
          size={size}
          showLabel={showLabel}
          className={className}
          onToggle={toggleTheme}
        />
      );
    
    case 'button':
      return (
        <ThemeTextButton
          isDark={isDark}
          size={size}
          showLabel={showLabel}
          className={className}
          onToggle={toggleTheme}
        />
      );
    
    case 'switch':
      return (
        <ThemeSwitch
          isDark={isDark}
          className={className}
          onToggle={toggleTheme}
        />
      );
    
    default:
      return (
        <ThemeIconButton
          isDark={isDark}
          size={size}
          showLabel={showLabel}
          className={className}
          onToggle={toggleTheme}
        />
      );
  }
};

export { ToggleTheme };
export type { ToggleThemeProps };