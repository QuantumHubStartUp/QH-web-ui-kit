"use client";

import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { buttonVariants } from './styles/variants';
import { useButtonState } from './hooks/useButtonState.hook';
import { ButtonContent } from './components/ButtonContent';

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
}

/**
 * Компонент для создания кнопки
 * 
 * @param {ButtonProps} props - объект с параметрами
 * @returns {JSX.Element} - элемент кнопки
 */
const Button: React.FC<ButtonProps> = ({
  className, 
  variant, 
  size, 
  loading = false, 
  icon, 
  children, 
  disabled,
  ...props 
}: ButtonProps): JSX.Element => {
  const { isDisabled, showLoader } = useButtonState({ loading, disabled });

  return (
    <button
      type="button"
      className={buttonVariants({ variant, size, className })}
      disabled={isDisabled}
      {...props}
    >
      <ButtonContent 
        loading={showLoader} 
        icon={icon}
      >
        {children}
      </ButtonContent>
    </button>
  );
};

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };