"use client";

import { ModalFooter } from "./components/ModalFooter";
import { ModalBody } from "./components/ModalBody";
import { ModalHeader } from "./components/ModalHeader";
import { useModal } from "./hooks/useModal.hook";
import { useModalStyles } from "./hooks/useModalStyles.hook";
import { ModalOverlay } from "./components/ModalOverlay";
import { ModalContent } from "./components/ModalContent";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  animation?: 'fade' | 'slide' | 'scale';
  backdropBlur?: 'none' | 'light' | 'default' | 'strong';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  size = 'md',
  animation = 'fade',
  backdropBlur = 'default',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className,
}: ModalProps) => {
  const { modalRef, handleOverlayClick } = useModal({
    isOpen,
    onClose,
    closeOnEscape
  });

  const { backdropStyle } = useModalStyles({ backdropBlur });

  if (!isOpen) return null;

  const handleOverlayClickWithCheck = (event: React.MouseEvent) => {
    if (closeOnOverlayClick) {
      handleOverlayClick(event);
    }
  };

  return (
    <ModalOverlay
      animation={animation}
      className={className}
      backdropStyle={backdropStyle}
      onClick={handleOverlayClickWithCheck}
    >
      <ModalContent
        size={size}
        animation={animation}
        modalRef={modalRef}
      >
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export { Modal };
export type { ModalProps };