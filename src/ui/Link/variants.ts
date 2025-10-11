import { cva } from 'class-variance-authority';

export const linkVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'text-blue-600 hover:text-blue-800 focus-visible:ring-blue-500',
        secondary: 'text-gray-600 hover:text-gray-800 focus-visible:ring-gray-500',
        success: 'text-green-600 hover:text-green-800 focus-visible:ring-green-500',
        danger: 'text-red-600 hover:text-red-800 focus-visible:ring-red-500',
        ghost: 'text-gray-500 hover:text-gray-700 focus-visible:ring-gray-400',
        outline: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus-visible:ring-blue-500',
        'button-like': 'btn btn-primary',
        'button-like-secondary': 'btn btn-secondary',
        'button-like-success': 'btn btn-success',
        'button-like-danger': 'btn btn-danger',
        'button-like-ghost': 'btn btn-ghost',
        'button-like-outline': 'btn btn-outline',
      },
      size: {
        sm: 'text-sm px-2 py-1 rounded',
        md: 'text-base px-3 py-2 rounded-md',
        lg: 'text-lg px-4 py-2 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);