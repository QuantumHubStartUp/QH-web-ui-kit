// hooks/useTheme.ts
"use client";

import { useState, useEffect } from 'react';

interface UseThemeReturn {
  isDark: boolean;
  toggleTheme: () => void;
  mounted: boolean;
}

export const useTheme = (): UseThemeReturn => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const currentTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
    setIsDark(currentTheme === 'dark');
    applyTheme(currentTheme);
  }, []);

  const applyTheme = (theme: string) => {
    const isDarkMode = theme === 'dark';
    
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    
    localStorage.setItem('theme', theme);
    setIsDark(isDarkMode);
  };

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
  };

  return {
    isDark,
    toggleTheme,
    mounted
  };
};