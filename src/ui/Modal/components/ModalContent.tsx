
import { modalContentVariants } from "../styles/variants";
import { VariantProps } from "class-variance-authority";

interface ModalContentProps {
  size?: VariantProps<typeof modalContentVariants>['size'];
  animation?: VariantProps<typeof modalContentVariants>['animation'];
  modalRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}

export const ModalContent: React.FC<ModalContentProps> = ({
  size = 'md',
  animation = 'fade',
  modalRef,
  children
}) => {
  return (
    <div
      ref={modalRef}
      className={modalContentVariants({ size, animation })}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>
  );
};