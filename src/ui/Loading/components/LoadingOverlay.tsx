
import { Loading, LoadingProps } from '../Loading';

export interface LoadingOverlayProps extends LoadingProps {
  overlay?: boolean;
  backdropBlur?: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  overlay = true,
  backdropBlur = true,
  ...props
}) => {
  const overlayClass = `
    fixed inset-0 z-50 flex items-center justify-center
    ${overlay ? 'bg-black/20 dark:bg-black/40' : ''}
    ${backdropBlur ? 'backdrop-blur-sm' : ''}
  `;

  return (
    <div className={overlayClass}>
      <Loading {...props} />
    </div>
  );
};