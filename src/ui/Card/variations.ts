import { cva } from "class-variance-authority";

export const cardVariants = cva(
  [
    'rounded-xl',
    'border',
    'transition-all',
    'duration-200',
    'ease-in-out',
  ],
  {
    variants: {
      variant: {
        primary: [
          "card-primary"
        ],
        elevated: [
          "card-elevated",
          'border-transparent',         
        ],
        outline: [
          "card-outline",
          'bg-transparent',
        ],
        ghost: [
          "card-ghost",
          'border-transparent',
          'bg-muted', 
          'shadow-none',
          'hover:bg-muted/50',
        ]
      },
      padding: {
        none: ['p-0'],
        sm: ['p-4'],
        md: ['p-6'],
        lg: ['p-8'],
        xl: ['p-10']
      },
      hover: {
        true: ['cursor-pointer', 'hover:-translate-y-0.5'],
        false: ['cursor-default']
      }
    },
    defaultVariants: {
      variant: 'primary',
      padding: 'md',
      hover: false
    }
  }
);






