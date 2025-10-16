
interface UseLoadingContentProps {
  isLoading: boolean;
  overlay?: boolean;
}

interface UseLoadingContentReturn {
  wrapperClass: string;
  contentClass: string;
}

export const useLoadingContent = ({
  isLoading,
  overlay = true
}: UseLoadingContentProps): UseLoadingContentReturn => {
  const wrapperClass = overlay && isLoading 
    ? "absolute inset-0 z-10 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg"
    : "";

  const contentClass = isLoading && overlay 
    ? 'opacity-50 pointer-events-none'
    : '';

  return {
    wrapperClass,
    contentClass
  };
};