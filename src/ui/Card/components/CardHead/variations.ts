import { cva } from "class-variance-authority";


export const cardHeadVariants = cva(
  ['space-y-1'],
  {
    variants: {
      padding: {
        none: ['px-0', 'pt-0'],
        sm: ['px-4', 'pt-4'],
        md: ['px-6', 'pt-6'],
        lg: ['px-8', 'pt-8'],
        xl: ['px-10', 'pt-10']
      }
    },
    defaultVariants: {
      padding: 'md'
    }
  }
);