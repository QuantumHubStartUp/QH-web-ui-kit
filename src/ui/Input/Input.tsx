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
    "rounded-xl font-medium transition-colors duration-200 focus:outline-none focus:ring-2";

  const selectedSize = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }[inputSize];

  const selectedVariants = {
    primary:
      "bg-white text-black border-2 border-cyan-100 focus:ring-cyan-300 dark:bg-[#121212] dark:text-white dark:border-cyan-100 dark:focus:ring-[#13ECF4]",
    secondary:
      "bg-gray-200 text-gray-800 border border-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:focus:ring-gray-500",
    success:
      "bg-white text-black border-2 border-green-600 focus:ring-green-400 dark:bg-[#121212] dark:text-white dark:border-green-500 dark:focus:ring-green-600",
    danger:
      "bg-white text-black border-2 border-red-600 focus:ring-red-400 dark:bg-[#121212] dark:text-white dark:border-red-500 dark:focus:ring-red-600",
    ghost:
      "bg-transparent text-gray-800 border border-transparent focus:ring-gray-300 dark:text-gray-100 dark:focus:ring-gray-600",
  }[variant];

  const states = disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:cursor-text";

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
