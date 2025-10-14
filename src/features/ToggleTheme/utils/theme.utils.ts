
export const getSizeClasses = (size: string) => {
  switch (size) {
    case 'sm': return 'text-sm';
    case 'lg': return 'text-lg';
    default: return 'text-base';
  }
};

export const getButtonSize = (size: string) => {
  switch (size) {
    case 'sm': return 'sm';
    case 'lg': return 'lg';
    default: return 'md';
  }
};

export const getThemeLabel = (isDark: boolean, showLabel: boolean): string => {
  if (!showLabel) return isDark ? 'Light' : 'Dark';
  return isDark ? 'Light Mode' : 'Dark Mode';
};