import { cva } from "class-variance-authority";

export const checkboxVariants = cva(
  "appearance-none relative rounded-sm border transition-colors duration-200 focus:outline-none focus:ring-2 \
   after:content-['✔'] after:absolute after:inset-0 after:flex after:items-center after:justify-center \
   after:font-bold after:text-white after:opacity-0 checked:after:opacity-100",
  {
    variants: {
      variant: {
        primary:
          "border-cyan-500 checked:bg-cyan-500 checked:border-cyan-500 focus:ring-cyan-300",
        secondary:
          "border-gray-400 checked:bg-gray-600 checked:border-gray-600 focus:ring-gray-400",
        success:
          "border-green-500 checked:bg-green-600 checked:border-green-600 focus:ring-green-400",
        danger:
          "border-red-500 checked:bg-red-600 checked:border-red-600 focus:ring-red-400",
        ghost:
          "border-gray-300 checked:bg-transparent checked:border-gray-400 checked:after:text-gray-700",
      },
      size: {
        sm: "w-4 h-4 text-[10px]",
        md: "w-5 h-5 text-[12px]",
        lg: "w-6 h-6 text-[14px]",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "hover:cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  }
);
