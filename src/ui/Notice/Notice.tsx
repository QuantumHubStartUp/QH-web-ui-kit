"use client";

import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { noticeVariants } from './styles/variants';
import { useNoticeTimer } from './hooks/useNoticeTimer.hook';
import { useNoticeVisibility } from './hooks/useNoticeVisibility.hook';
import { NoticeProgressBar } from './components/NoticeProgressBar';
import { NoticeIcon } from './components/NoticeIcon';
import { NoticeContent } from './components/NoticeContent';
import { NoticeCloseButton } from './components/NoticeCloseButton';

interface NoticeProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof noticeVariants> {
  title?: string;
  message: string;
  duration?: number;
  autoClose?: boolean;
  showClose?: boolean;
  onClose?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: React.ReactNode;
}

const Notice = React.forwardRef<HTMLDivElement, NoticeProps>(
  ({ 
    className,
    variant = 'info',
    position = 'top-right',
    title,
    message,
    duration = 5000,
    autoClose = true,
    showClose = true,
    onClose,
    action,
    icon,
    ...props 
  }, ref) => {
    const { isVisible, handleClose } = useNoticeVisibility({ onClose });
    const { progress, isPaused, setIsPaused } = useNoticeTimer({
      autoClose,
      duration,
      onClose: handleClose
    });

    if (!isVisible) return null;

    return (
      <div
        ref={ref}
        className={noticeVariants({ variant, position, className })}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        {...props}
      >
        <NoticeProgressBar 
          autoClose={autoClose}
          progress={progress}
          variant={variant}
        />

        <div className="flex items-start gap-3">
          <NoticeIcon variant={variant} icon={icon} />
          <NoticeContent 
            title={title}
            message={message}
            action={action}
          />
          <NoticeCloseButton 
            showClose={showClose}
            onClose={handleClose}
          />
        </div>
      </div>
    );
  }
);

Notice.displayName = 'Notice';

export { Notice };
export type { NoticeProps };