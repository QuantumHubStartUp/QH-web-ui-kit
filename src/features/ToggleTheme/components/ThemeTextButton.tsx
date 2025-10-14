import { MoonIcon } from "../../../icons/moon/moon.icon";
import { SunIcon } from "../../../icons/sun/sun.icon";
import { Button } from "../../../ui";
import { getButtonSize, getThemeLabel } from "../utils/theme.utils";


interface ThemeTextButtonProps {
  isDark: boolean;
  size: 'sm' | 'md' | 'lg';
  showLabel: boolean;
  className?: string;
  onToggle: () => void;
}

export const ThemeTextButton: React.FC<ThemeTextButtonProps> = ({
  isDark,
  size,
  showLabel,
  className = '',
  onToggle
}) => {
  return (
    <Button
      variant="outline"
      size={getButtonSize(size)}
      onClick={onToggle}
      className={className}
      icon={isDark ? <SunIcon size={size} /> : <MoonIcon size={size} />}
    >
      {getThemeLabel(isDark, showLabel)}
    </Button>
  );
};