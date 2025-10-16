"use client";

import React from "react";
import { cardHeadVariants } from "./variations";
import { VariantProps } from "class-variance-authority";

interface CardHeadProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeadVariants> {
  className?: string;
}

export const CardHead = React.forwardRef<HTMLDivElement, CardHeadProps>(
  ({ className, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cardHeadVariants({ padding, className })}
        {...props}
      />
    );
  }
);

CardHead.displayName = 'CardHead';