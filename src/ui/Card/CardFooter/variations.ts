import { cva } from "class-variance-authority";

export const cardFooterVariants = cva(
  ['flex', 'items-center', 'justify-between'],
  {
    variants: {
      padding: {
        none: ['px-0', 'pb-0'],
        sm: ['px-4', 'pb-4'],
        md: ['px-6', 'pb-6'],
        lg: ['px-8', 'pb-8'],
        xl: ['px-10', 'pb-10']
      }
    },
    defaultVariants: {
      padding: 'md'
    }
  }
);