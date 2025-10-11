"use client";

import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { linkVariants } from './variants';

interface LinkProps 
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  href?: string;
}

const Link: React.FC<LinkProps> = ({
  as: Component = 'a',
  className,
  variant,
  size,
  children,
  ...props
}) => {
  return (
    <Component
      className={linkVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </Component>
  );
};

Link.displayName = 'Link';

export { Link };