import { cva } from "class-variance-authority";


export const inputVariants = cva(
  [
   "input"
  ],
  {
    variants: {
      variant: {
        primary: [
          "input-primary"
        ],
        secondary: [
          "input-secondary"
        ],
        success: [
          "input-success"
        ],
        danger: [
          "input-danger"
        ],
        ghost: [
          "input-ghost"
        ],
        outline: [
         "input-outline"
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