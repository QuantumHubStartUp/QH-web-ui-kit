
interface LoadingTextProps {
  text?: string;
  textSizeClass: string;
}

export const LoadingText: React.FC<LoadingTextProps> = ({ 
  text, 
  textSizeClass 
}) => {
  if (!text) return null;

  return (
    <span className={`font-medium text-gray-700 dark:text-gray-300 ${textSizeClass}`}>
      {text}
    </span>
  );
};