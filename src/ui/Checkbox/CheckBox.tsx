"use client";

import React from "react";
import { type VariantProps } from "class-variance-authority";
import { checkboxVariants } from "./styles/variants";

type CVAProps = VariantProps<typeof checkboxVariants>;

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled" | "size">,
    Omit<CVAProps, "disabled"> {
  label?: string;
  disabled?: boolean; 
}


const Checkbox: React.FC<CheckboxProps> = ({
  className,
  variant,
  size,
  label,
  disabled = false,
  ...props
}) => {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        className={checkboxVariants({ variant, size, disabled, className })}
        disabled={disabled}
        {...props}
      />
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
};

Checkbox.displayName = "Checkbox";

export { Checkbox };
