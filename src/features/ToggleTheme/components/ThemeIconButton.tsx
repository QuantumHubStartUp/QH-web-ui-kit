import { MoonIcon } from "../../../icons/moon/moon.icon";
import { SunIcon } from "../../../icons/sun/sun.icon";
import { Button } from "../../../ui";
import { getButtonSize } from "../utils/theme.utils";


interface ThemeIconButtonProps {
  isDark: boolean;
  size: 'sm' | 'md' | 'lg';
  showLabel: boolean;
  className?: string;
  onToggle: () => void;
}

export const ThemeIconButton: React.FC<ThemeIconButtonProps> = ({
  isDark,
  size,
  showLabel,
  className = '',
  onToggle
}) => {
  return (
    <Button
      variant="ghost"
      size={getButtonSize(size)}
      onClick={onToggle}
      className={`p-2 ${className}`}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <SunIcon size={size} /> : <MoonIcon size={size} />}
      {showLabel && (
        <span className="ml-2">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </Button>
  );
};