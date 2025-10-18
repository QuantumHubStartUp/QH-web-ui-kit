import { modalOverlayVariants } from "../styles/variants";
import { VariantProps } from "class-variance-authority";

interface ModalOverlayProps {
  animation?: VariantProps<typeof modalOverlayVariants>['animation'];
  className?: string;
  backdropStyle: React.CSSProperties;
  onClick: (event: React.MouseEvent) => void;
  children: React.ReactNode;
}

export const ModalOverlay: React.FC<ModalOverlayProps> = ({
  animation = 'fade',
  className,
  backdropStyle,
  onClick,
  children
}) => {
  return (
    <div 
      className={modalOverlayVariants({ animation, className })}
      onClick={onClick}
      style={backdropStyle}
    >
      {children}
    </div>
  );
};