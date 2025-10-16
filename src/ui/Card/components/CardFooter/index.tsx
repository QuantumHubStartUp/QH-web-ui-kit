"use client";

import { VariantProps } from "class-variance-authority";
import React from "react";
import { cardFooterVariants } from "./variations";


interface CardFooterProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardFooterVariants> {
  className?: string;
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cardFooterVariants({ padding, className })}
        {...props}
      />
    );
  }
);

CardFooter.displayName = 'CardFooter';