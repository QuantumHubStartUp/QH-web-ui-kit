"use client";

import { VariantProps } from "class-variance-authority";
import React from "react";
import { cardBodyVariants } from "./variations";


interface CardBodyProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardBodyVariants> {
  className?: string;
}

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cardBodyVariants({ padding, className })}
        {...props}
      />
    );
  }
);

CardBody.displayName = 'CardBody';