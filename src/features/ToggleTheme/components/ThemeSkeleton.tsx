
import { getSizeClasses } from '../utils/theme.utils';

interface ThemeSkeletonProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Компонент для отображения скелетона темы приложения.
 * 
 * @param {ThemeSkeletonProps} props - Объект с параметрами компонента.
 * @param {string} [props.size='md'] - Размер текста.
 * @param {string} [props.className=''] - Дополнительный класс для компонента.
 * 
 * @returns {React.ReactElement} - Компонент для отображения скелетона темы приложения.
 */
export const ThemeSkeleton: React.FC<ThemeSkeletonProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  return (
    <div className={`inline-flex ${getSizeClasses(size)} ${className}`}>
      <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-full w-full h-full" />
    </div>
  );
};