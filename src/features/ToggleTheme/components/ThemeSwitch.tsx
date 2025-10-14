import { MoonIcon } from "../../../icons/moon/moon.icon";
import { SunIcon } from "../../../icons/sun/sun.icon";



interface ThemeSwitchProps {
  isDark: boolean;
  className?: string;
  onToggle: () => void;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  isDark,
  className = '',
  onToggle
}) => {
  return (
    <button
      onClick={onToggle}
      className={`
        relative inline-flex items-center justify-between
        w-14 h-8 rounded-full p-1 transition-colors duration-300
        ${isDark ? 'bg-blue-600' : 'bg-gray-300'}
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${className}
      `}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      role="switch"
      aria-checked={isDark}
    >
      <span
        className={`
          absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-lg
          transform transition-transform duration-300
          ${isDark ? 'translate-x-6' : 'translate-x-0'}
        `}
      />
      <MoonIcon size="sm" className={`text-white ${isDark ? 'opacity-100' : 'opacity-0'}`} />
      <SunIcon size="sm" className={`text-yellow-500 ${isDark ? 'opacity-0' : 'opacity-100'}`} />
    </button>
  );
};