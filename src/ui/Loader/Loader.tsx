import { HTMLAttributes } from "react";
import clsx from "clsx";

type LoaderVariant = "primary" | "secondary" | "success" | "danger" | "neutral";
type LoaderSize = "sm" | "md" | "lg";

interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: LoaderVariant;
  size?: LoaderSize;
  label?: string; 
  inline?: boolean;
}

export function Loader({
  variant = "primary",
  size = "md",
  label,
  inline = true,
  className,
  ...props
}: LoaderProps) {
  return (
    <span
      className={clsx(
        "flex items-center",
        inline ? "gap-2" : "justify-center",
        className
      )}
      {...props}
    >
      <span
        className={clsx(
          "h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent",
         
          {
            sm: "h-4 w-4",
            md: "h-6 w-6",
            lg: "h-8 w-8",
          }[size],
          {
            primary: "border-blue-600 dark:border-blue-400",
            secondary: "border-gray-500 dark:border-gray-300",
            success: "border-green-600 dark:border-green-400",
            danger: "border-red-600 dark:border-red-400",
            neutral: "border-zinc-600 dark:border-zinc-300",
          }[variant]
        )}
      />
      {label && <span>{label}</span>}
    </span>
  );
}



