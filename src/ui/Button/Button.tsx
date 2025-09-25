

// import { ButtonHTMLAttributes } from "react";
// import clsx from "clsx";

// type ButtonVariant = "primary" | "secondary" | "success" | "danger" | "ghost";
// type ButtonSize = "sm" | "md" | "lg";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: ButtonVariant;
//   size?: ButtonSize;
//   loading?: boolean;
// }

// export function Button({
//   children,
//   variant = "primary",
//   size = "md",
//   loading = false,
//   disabled,
//   className,
//   ...props
// }: ButtonProps) {
//   const baseStyle = "rounded-xl font-medium transition-colors duration-200 focus:outline-none focus:ring-2 font-semibold";
//   const selectedSize = {
//     sm: "px-3 py-1 text-sm",
//     md: "px-4 py-2 text-base ",
//     lg: "px-6 py-3 text-lg",
//   }[size];
//   const selectedVariants = {
//     primary:
//       "bg-cyan-100 text-black dark:text-black dark:hover:text-white border-2 dark:border-cyan-100 dark:hover:border-[#13ECF4] hover:bg-[#464B50] dark:bg-[#13ECF4] dark:hover:bg-[#464B50]",
//     secondary:
//       "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
//     success:
//       "bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600",
//     danger:
//       "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
//     ghost:
//       "bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800",
//   }[variant]

//   const states = (disabled || loading) ? "opacity-50 cursor-not-allowed" : "hover:cursor-pointer";

//   return (
//     <button
//       className={clsx(
//         baseStyle,
//         selectedSize,
//         selectedVariants,
//         states,
//         className
//       )}
//       disabled={disabled || loading}
//       {...props}
//     >
//       {loading ? (
//         <span className="flex items-center gap-2">
//           <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
//           Загрузка...
//         </span>
//       ) : (
//         children 
//       )}
//     </button>
//   );
// }


import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "success" | "danger" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className,
  ...props
}: ButtonProps) {
  const baseStyle = "rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 font-semibold border-2";
  
  const selectedSize = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }[size];
  
  // Сохраняем исходный стиль primary, но с правильными dark: классами
  const selectedVariants = {
    primary:
      "bg-cyan-100 text-black border-2 border-cyan-100 hover:bg-[#464B50] hover:text-white dark:bg-[#13ECF4] dark:text-black dark:border-cyan-100 dark:hover:bg-[#464B50] dark:hover:text-white dark:hover:border-[#13ECF4]",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 border-transparent",
    success:
      "bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 border-transparent",
    danger:
      "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 border-transparent",
    ghost:
      "bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800 border-transparent",
  }[variant];

  const states = (disabled || loading) ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  return (
    <button
      className={clsx(
        baseStyle,
        selectedSize,
        selectedVariants,
        states,
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Загрузка...
        </span>
      ) : (
        children 
      )}
    </button>
  );
}