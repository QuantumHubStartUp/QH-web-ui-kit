import { useEffect, useRef } from "react";

interface UseModalProps {
  isOpen: boolean;
  onClose: () => void;
  closeOnEscape?: boolean;
}

interface UseModalReturn {
  modalRef: React.RefObject<HTMLDivElement>;
  handleOverlayClick: (event: React.MouseEvent) => void;
}

export const useModal = ({
  isOpen,
  onClose,
  closeOnEscape = true
}: UseModalProps): UseModalReturn => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Обработка ESC клавиши
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEscape) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeOnEscape, onClose]);

  // Фокус на модалке при открытии
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return {
    modalRef,
    handleOverlayClick
  };
};