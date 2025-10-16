
interface UseInputStateProps {
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface UseInputStateReturn {
  isDisabled: boolean;
  showLoader: boolean;
  showIcon: boolean;
  hasLeftPadding: boolean;
}

export const useInputState = ({ 
  loading = false, 
  disabled = false,
  icon
}: UseInputStateProps): UseInputStateReturn => {
  const isDisabled = disabled || loading;
  const showLoader = loading;
  const showIcon = Boolean(icon && !loading);
  const hasLeftPadding = Boolean(icon || loading);

  return {
    isDisabled,
    showLoader,
    showIcon,
    hasLeftPadding
  };
};