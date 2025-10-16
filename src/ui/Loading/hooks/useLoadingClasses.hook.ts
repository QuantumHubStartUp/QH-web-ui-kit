
interface UseLoadingClassesProps {
  text?: string;
  textPosition?: 'right' | 'left' | 'bottom' | 'top';
  centered?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | null;
}



interface UseLoadingClassesReturn {
  containerClass: string;
  textSizeClass: string;
  shouldCenter: boolean;
}

export const useLoadingClasses = ({
  text,
  textPosition = 'right',
  centered = false,
  size = 'md'
}: UseLoadingClassesProps): UseLoadingClassesReturn => {
  const positions = {
    right: 'flex-row items-center gap-3',
    left: 'flex-row-reverse items-center gap-3',
    bottom: 'flex-col items-center gap-2',
    top: 'flex-col-reverse items-center gap-2'
  };

  const textSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    xxl: 'text-2xl'
  };

  const containerClass = text 
    ? `inline-flex ${positions[textPosition]} ${centered ? 'justify-center' : ''}`
    : '';

  const textSizeClass = textSizes[size || "md"] || textSizes.md;
  const shouldCenter = centered && !text;

  return {
    containerClass,
    textSizeClass,
    shouldCenter
  };
};