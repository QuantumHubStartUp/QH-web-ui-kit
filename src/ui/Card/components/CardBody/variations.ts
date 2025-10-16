import { cva } from "class-variance-authority";

export const cardBodyVariants = cva(
  [''],
  {
    variants: {
      padding: {
        none: ['px-0', 'py-0'],
        sm: ['px-4', 'py-4'],
        md: ['px-6', 'py-6'],
        lg: ['px-8', 'py-8'],
        xl: ['px-10', 'py-10']
      }
    },
    defaultVariants: {
      padding: 'md'
    }
  }
);