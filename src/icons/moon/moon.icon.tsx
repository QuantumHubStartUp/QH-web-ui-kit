
interface IMoonIconProps {
    size: string;
    className?: string;
}

export const MoonIcon: React.FC<IMoonIconProps> = ({ size, className = '' }) => {
  const sizeClass = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5';
  
  return (
    <svg 
      className={`${sizeClass} ${className}`}
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path
        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
      />
    </svg>
  );
};