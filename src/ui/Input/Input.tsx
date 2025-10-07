"use client";

import React from "react";
import { type VariantProps } from "class-variance-authority";
import { inputVariants } from "./variants";
import clsx from "clsx";


interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  icon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  className,
  variant,
  size,
  icon,
  loading = false,
  disabled = false,
  ...props
}) => {
  return (
    <div className="relative w-full flex items-center">
      {icon && !loading && (
        <span className="absolute left-3 text-gray-400 pointer-events-none">
          {icon}
        </span>
      )}

      {loading && (
        <svg
          className="absolute left-3 h-4 w-4 animate-spin text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      <input
        className={clsx(
          inputVariants({ variant, size }),
          disabled && "opacity-50 cursor-not-allowed",
          !disabled && "cursor-text hover:border-[var(--color-primary-hover)]",
          (icon || loading) && "pl-10",
          className
        )}
        disabled={disabled || loading}
        {...props}
      />
    </div>
  );
};

Input.displayName = "Input";

export { Input };
