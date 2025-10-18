
interface UseModalStylesProps {
  backdropBlur?: 'none' | 'light' | 'default' | 'strong';
}

interface UseModalStylesReturn {
  backdropStyle: React.CSSProperties;
}

export const useModalStyles = ({
  backdropBlur = 'default'
}: UseModalStylesProps): UseModalStylesReturn => {
  const blurValues = {
    none: 'blur(0)',
    light: 'blur(4px)',
    default: 'blur(8px)',
    strong: 'blur(16px)'
  };

  const backdropStyle = {
    backdropFilter: `var(--modal-backdrop-blur, ${blurValues[backdropBlur]})`,
    WebkitBackdropFilter: `var(--modal-backdrop-blur, ${blurValues[backdropBlur]})`
  };

  return {
    backdropStyle
  };
};