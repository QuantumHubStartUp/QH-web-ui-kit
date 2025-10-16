"use client";

import React from "react";
import { type VariantProps } from "class-variance-authority";
import { inputVariants } from "./styles/variants";
import { useInputState } from "./hooks/useInputState.hook";
import { InputAdornments } from "./components/InputAdornments";
import { getInputClasses } from "./utils/input.utils";

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
  const { 
    isDisabled, 
    showLoader, 
    showIcon, 
    hasLeftPadding 
  } = useInputState({ loading, disabled, icon });

  const inputClassName = getInputClasses(
    inputVariants({ variant, size }),
    hasLeftPadding,
    isDisabled,
    className
  );

  return (
    <div className="relative w-full flex items-center">
      <InputAdornments loading={showLoader} icon={icon} />
      
      <input
        className={inputClassName}
        disabled={isDisabled}
        {...props}
      />
    </div>
  );
};

Input.displayName = "Input";

export { Input };
export type { InputProps };