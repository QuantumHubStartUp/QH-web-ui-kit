// Loading.tsx
"use client";

import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { useLoadingClasses } from './hooks/useLoadingClasses.hook';
import { LoadingSpinner } from './components/LoadingSpinner';
import { LoadingText } from './components/LoadingText';
import { LoadingContainer } from './components/LoadingContainer';
import { loadingVariants } from './styles/variants';

interface LoadingProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {
  className?: string;
  text?: string;
  textPosition?: 'right' | 'left' | 'bottom' | 'top';
  centered?: boolean;
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ 
    className,
    variant,
    size,
    speed,
    text,
    textPosition = 'right',
    centered = false,
    ...props 
  }, ref) => {
    
    const { containerClass, textSizeClass, shouldCenter } = useLoadingClasses({
      text,
      textPosition,
      centered,
      size
    });

    return (
      <LoadingContainer 
        containerClass={containerClass} 
        shouldCenter={shouldCenter}
      >
        <LoadingSpinner
          variant={variant}
          size={size}
          speed={speed}
          className={className}
          {...props}
        />
        <LoadingText text={text} textSizeClass={textSizeClass} />
      </LoadingContainer>
    );
  }
);

Loading.displayName = 'Loading';

export { Loading };
export type { LoadingProps };