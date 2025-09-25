"use client";

import { InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputVariant = "primary" | "secondary" | "success" | "danger" | "ghost";
type InputSize = "sm" | "md" | "lg";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: InputVariant;
  inputSize?: InputSize; 
}

export function Input({
  variant = "primary",
  inputSize = "md",
  disabled,
  className,
  ...props
}: InputProps) {
  const baseStyle =
    "rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 border-2";

  const selectedSize = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }[inputSize];

  // Используем CSS переменные вместо dark: классов
  const selectedVariants = {
    primary: "bg-[var(--input-bg)] text-[var(--input-text)] border-[var(--color-primary)] focus:ring-[var(--color-primary)]",
    secondary: "bg-[var(--input-bg-secondary)] text-[var(--input-text)] border-gray-300 focus:ring-gray-400 dark:border-gray-600",
    success: "bg-[var(--input-bg)] text-[var(--input-text)] border-green-500 focus:ring-green-400",
    danger: "bg-[var(--input-bg)] text-[var(--input-text)] border-red-500 focus:ring-red-400",
    ghost: "bg-transparent text-[var(--input-text)] border-transparent focus:ring-[var(--color-primary)]",
  }[variant];

  const states = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-text hover:border-[var(--color-primary-hover)]";

  return (
    <input
      className={clsx(
        baseStyle,
        selectedSize,
        selectedVariants,
        states,
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
}