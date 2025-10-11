"use client";

import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cardVariants } from './variations';



interface CardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  className?: string;
}


export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cardVariants({ variant, padding, hover, className })}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';






