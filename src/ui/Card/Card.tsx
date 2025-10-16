"use client";

import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cardVariants } from './styles/variations';
import { CardHead } from './components/CardHead';
import { CardFooter } from './components/CardFooter';
import { CardBody } from './components/CardBody';

export interface CardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  className?: string;
}

const Card: React.FC<CardProps> & {
  Header: typeof CardHead;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
} = ({ className, variant, padding, hover, ...props }) => {
  return (
    <div
      className={cardVariants({ variant, padding, hover, className })}
      {...props}
    />
  );
};

Card.Header = CardHead;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.displayName = 'Card';

export { Card };
export default Card;