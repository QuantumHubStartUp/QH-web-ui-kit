
import { progressBarVariants } from '../styles/variants';
import { type VariantProps } from 'class-variance-authority';

interface NoticeProgressBarProps {
  autoClose?: boolean;
  progress: number;
  variant: VariantProps<typeof progressBarVariants>['variant'];
}

export const NoticeProgressBar: React.FC<NoticeProgressBarProps> = ({
  autoClose = true,
  progress,
  variant
}) => {
  if (!autoClose) return null;

  return (
    <div 
      className={progressBarVariants({ variant })} 
      style={{ width: `${progress}%` }} 
    />
  );
};