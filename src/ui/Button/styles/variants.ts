import { cva } from "class-variance-authority";


export const buttonVariants = cva(
  [
   "btn"
  ],
  {
    variants: {
      variant: {
        primary: [
          "btn-primary"
        ],
        secondary: [
          "btn-secondary"
        ],
        success: [
          "btn-success"
        ],
        danger: [
          "btn-danger"
        ],
        ghost: [
          "btn-ghost"
        ],
        outline: [
         "btn-outline"
        ]
      },
      size: {
        sm: ["p-2", "text-sm"],
        md: ["p-4", "text-base"],
        lg: ["p-5", "text-lg"],
        xl: ["p-6", "text-xl"]
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm'
    }
  }
);