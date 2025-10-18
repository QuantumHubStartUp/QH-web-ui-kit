import { useState, useCallback } from 'react';

interface UseNoticeVisibilityProps {
  onClose?: () => void;
}

interface UseNoticeVisibilityReturn {
  isVisible: boolean;
  handleClose: () => void;
}

export const useNoticeVisibility = ({
  onClose
}: UseNoticeVisibilityProps): UseNoticeVisibilityReturn => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  }, [onClose]);

  return {
    isVisible,
    handleClose
  };
};