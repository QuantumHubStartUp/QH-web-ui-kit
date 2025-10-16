
import clsx from 'clsx';

export const getInputClasses = (
  baseClasses: string,
  hasLeftPadding: boolean,
  isDisabled: boolean,
  className?: string
): string => {
  return clsx(
    baseClasses,
    isDisabled && "opacity-50 cursor-not-allowed",
    !isDisabled && "cursor-text hover:border-[var(--color-primary-hover)]",
    hasLeftPadding && "pl-10",
    className
  );
};