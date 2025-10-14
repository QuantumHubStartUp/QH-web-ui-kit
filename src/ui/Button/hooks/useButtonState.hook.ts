
interface UseButtonStateProps {
  loading?: boolean;
  disabled?: boolean;
}

interface UseButtonStateReturn {
  isDisabled: boolean;
  showLoader: boolean;
}

/**
 * Hook для определения состояния кнопки (отключена или находится в состоянии загрузки)
 * @param {UseButtonStateProps} props - объект с параметрами
 * @returns {UseButtonStateReturn} объект с информацией о состоянии кнопки
 */
export const useButtonState = ({ 
  loading = false, 
  disabled = false 
}: UseButtonStateProps): UseButtonStateReturn => {
  const isDisabled = disabled || loading;
  const showLoader = loading;

  return {
    isDisabled,
    showLoader
  };
};