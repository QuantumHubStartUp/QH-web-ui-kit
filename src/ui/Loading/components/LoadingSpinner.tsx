
import { type VariantProps } from 'class-variance-authority';
import { loadingVariants } from '../styles/variants';

interface LoadingSpinnerProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  className,
  variant,
  size,
  speed,
  ...props
}) => {
  return (
    <div
      className={loadingVariants({ variant, size, speed, className })}
      {...props}
    />
  );
};