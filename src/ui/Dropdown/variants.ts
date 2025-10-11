// import { cva } from "class-variance-authority";

// const dropdownVariants = cva(
//   [
//     'relative',
//     'inline-block',
//     'text-left'
//   ],
//   {
//     variants: {
//       fullWidth: {
//         true: ['w-full'],
//         false: ['w-fit']
//       }
//     },
//     defaultVariants: {
//       fullWidth: false
//     }
//   }
// );

// const dropdownButtonVariants = cva(
//   [
//     'inline-flex',
//     'items-center',
//     'justify-between',
//     'rounded-lg',
//     'border',
//     'font-medium',
//     'transition-all',
//     'duration-200',
//     'ease-in-out',
//     'focus-visible:outline-none',
//     'focus-visible:ring-2',
//     'focus-visible:ring-offset-2',
//     'disabled:pointer-events-none',
//     'disabled:opacity-50'
//   ],
//   {
//     variants: {
//       variant: {
//         primary: [
//           'bg-white',
//           'border-gray-300',
//           'text-gray-900',
//           'hover:bg-gray-50',
//           'hover:border-gray-400',
//           'focus-visible:ring-blue-500',
//           'focus-visible:ring-offset-white',
          
//           'dark:bg-gray-800',
//           'dark:border-gray-600', 
//           'dark:text-white',
//           'dark:hover:bg-gray-700',
//           'dark:hover:border-gray-500',
//           'dark:focus-visible:ring-blue-400',
//           'dark:focus-visible:ring-offset-gray-950'
//         ],
//         secondary: [
//           'bg-gray-100',
//           'border-gray-200',
//           'text-gray-700',
//           'hover:bg-gray-200',
//           'hover:border-gray-300',
//           'focus-visible:ring-gray-500',
//           'focus-visible:ring-offset-white',
          
//           'dark:bg-gray-700',
//           'dark:border-gray-600',
//           'dark:text-gray-200',
//           'dark:hover:bg-gray-600',
//           'dark:hover:border-gray-500',
//           'dark:focus-visible:ring-gray-400',
//           'dark:focus-visible:ring-offset-gray-950'
//         ],
//         ghost: [
//           'bg-transparent',
//           'border-transparent',
//           'text-gray-700',
//           'hover:bg-gray-100',
//           'hover:text-gray-900',
//           'focus-visible:ring-gray-500',
//           'focus-visible:ring-offset-white',
          
//           'dark:text-gray-300',
//           'dark:hover:bg-gray-800',
//           'dark:hover:text-gray-100',
//           'dark:focus-visible:ring-gray-400',
//           'dark:focus-visible:ring-offset-gray-950'
//         ]
//       },
//       size: {
//         sm: ['text-sm', 'px-3', 'py-1.5', 'gap-2'],
//         md: ['text-base', 'px-4', 'py-2', 'gap-2'],
//         lg: ['text-lg', 'px-5', 'py-2.5', 'gap-3']
//       },
//       fullWidth: {
//         true: ['w-full'],
//         false: ['w-fit']
//       }
//     },
//     defaultVariants: {
//       variant: 'primary',
//       size: 'md',
//       fullWidth: false
//     }
//   }
// );

// const dropdownMenuVariants = cva(
//   [
//     'absolute',
//     'z-50',
//     'mt-1',
//     'rounded-lg',
//     'shadow-lg',
//     'border',
//     'bg-white',
//     'dark:bg-gray-800',
//     'dark:border-gray-700',
//     'overflow-hidden',
//     'transition-all', // базовые классы для анимации
//     'duration-200',
//     'ease-in-out'
//   ],
//   {
//     variants: {
//       position: {
//         bottom: ['top-full', 'left-0', 'origin-top-left'],
//         'bottom-right': ['top-full', 'right-0', 'origin-top-right'],
//         top: ['bottom-full', 'left-0', 'origin-bottom-left'],
//         'top-right': ['bottom-full', 'right-0', 'origin-bottom-right']
//       },
//       fullWidth: {
//         true: ['w-full', 'min-w-0'],
//         false: ['w-56', 'min-w-[14rem]']
//       }
//     },
//     defaultVariants: {
//       position: 'bottom',
//       fullWidth: false
//     }
//   }
// );

// const dropdownItemVariants = cva(
//   [
//     'flex',
//     'items-center',
//     'gap-3',
//     'px-4',
//     'py-2',
//     'text-sm',
//     'transition-all',
//     'duration-150',
//     'ease-in-out',
//     'cursor-pointer',
//     'border-none',
//     'outline-none',
//     'w-full',
//     'text-left'
//   ],
//   {
//     variants: {
//       variant: {
//         default: [
//           'text-gray-700',
//           'hover:bg-gray-100',
//           'hover:text-gray-900',
          
//           'dark:text-gray-300',
//           'dark:hover:bg-gray-700',
//           'dark:hover:text-gray-100'
//         ],
//         danger: [
//           'text-red-600',
//           'hover:bg-red-50',
//           'hover:text-red-700',
          
//           'dark:text-red-400',
//           'dark:hover:bg-red-900/20',
//           'dark:hover:text-red-300'
//         ],
//         success: [
//           'text-green-600',
//           'hover:bg-green-50',
//           'hover:text-green-700',
          
//           'dark:text-green-400',
//           'dark:hover:bg-green-900/20',
//           'dark:hover:text-green-300'
//         ],
//         disabled: [
//           'text-gray-400',
//           'cursor-not-allowed',
//           'opacity-50',
//           'hover:bg-transparent',
          
//           'dark:text-gray-500'
//         ]
//       },
//       active: {
//         true: [
//           'bg-blue-50',
//           'text-blue-700',
          
//           'dark:bg-blue-900/20',
//           'dark:text-blue-300'
//         ],
//         false: []
//       }
//     },
//     defaultVariants: {
//       variant: 'default',
//       active: false
//     }
//   }
// );

// export { 
//   dropdownButtonVariants, 
//   dropdownVariants, 
//   dropdownMenuVariants, 
//   dropdownItemVariants 
// };


import { cva } from "class-variance-authority";

const dropdownVariants = cva(
  [
    'relative',
    'inline-block',
    'text-left'
  ],
  {
    variants: {
      fullWidth: {
        true: ['w-full'],
        false: ['w-fit']
      }
    },
    defaultVariants: {
      fullWidth: false
    }
  }
);

const dropdownButtonVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-between',
    'rounded-lg',
    'border',
    'font-medium',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'disabled:pointer-events-none',
    'disabled:opacity-50'
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-[var(--dropdown-bg-primary)]',
          'border-[var(--dropdown-border-primary)]',
          'text-[var(--dropdown-text-primary)]',
          'hover:bg-[var(--dropdown-hover-bg-primary)]',
          'hover:border-[var(--dropdown-hover-border-primary)]',
          'focus-visible:ring-blue-500',
          'focus-visible:ring-offset-white',
          'dark:focus-visible:ring-blue-400'
        ],
        secondary: [
          'bg-[var(--dropdown-bg-secondary)]',
          'border-[var(--dropdown-border-secondary)]',
          'text-[var(--dropdown-text-secondary)]',
          'hover:bg-[var(--dropdown-hover-bg-secondary)]',
          'hover:border-[var(--dropdown-hover-border-secondary)]',
          'focus-visible:ring-gray-500',
          'focus-visible:ring-offset-white',
          'dark:focus-visible:ring-gray-400'
        ],
        ghost: [
          'bg-transparent',
          'border-transparent',
          'text-gray-700',
          'hover:bg-gray-100',
          'hover:text-gray-900',
          'focus-visible:ring-gray-500',
          'focus-visible:ring-offset-white',
          'dark:text-gray-300',
          'dark:hover:bg-gray-800',
          'dark:hover:text-gray-100',
          'dark:focus-visible:ring-gray-400'
        ]
      },
      size: {
        sm: ['text-sm', 'px-3', 'py-1.5', 'gap-2'],
        md: ['text-base', 'px-4', 'py-2', 'gap-2'],
        lg: ['text-lg', 'px-5', 'py-2.5', 'gap-3']
      },
      fullWidth: {
        true: ['w-full'],
        false: ['w-fit']
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false
    }
  }
);

const dropdownMenuVariants = cva(
  [
    'absolute',
    'z-50',
    'mt-1',
    'rounded-lg',
    'shadow-lg',
    'border',
    'overflow-hidden',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'bg-[var(--dropdown-menu-bg)]',
    'border-[var(--dropdown-menu-border)]'
  ],
  {
    variants: {
      position: {
        bottom: ['top-full', 'left-0', 'origin-top-left'],
        'bottom-right': ['top-full', 'right-0', 'origin-top-right'],
        top: ['bottom-full', 'left-0', 'origin-bottom-left'],
        'top-right': ['bottom-full', 'right-0', 'origin-bottom-right']
      },
      fullWidth: {
        true: ['w-full', 'min-w-0'],
        false: ['w-56', 'min-w-[14rem]']
      }
    },
    defaultVariants: {
      position: 'bottom',
      fullWidth: false
    }
  }
);

const dropdownItemVariants = cva(
  [
    'flex',
    'items-center',
    'gap-3',
    'px-4',
    'py-2',
    'text-sm',
    'transition-all',
    'duration-150',
    'ease-in-out',
    'cursor-pointer',
    'border-none',
    'outline-none',
    'w-full',
    'text-left'
  ],
  {
    variants: {
      variant: {
        default: [
          'text-[var(--dropdown-item-text)]',
          'hover:bg-[var(--dropdown-item-hover-bg)]',
          'hover:text-[var(--dropdown-item-hover-text)]'
        ],
        danger: [
          'text-[var(--dropdown-item-danger-text)]',
          'hover:bg-[var(--dropdown-item-danger-hover-bg)]',
          'hover:text-[var(--dropdown-item-danger-hover-text)]'
        ],
        success: [
          'text-[var(--dropdown-item-success-text)]',
          'hover:bg-[var(--dropdown-item-success-hover-bg)]',
          'hover:text-[var(--dropdown-item-success-hover-text)]'
        ],
        disabled: [
          'text-[var(--dropdown-item-disabled-text)]',
          'cursor-not-allowed',
          'opacity-50',
          'hover:bg-transparent'
        ]
      },
      active: {
        true: [
          'bg-[var(--dropdown-item-active-bg)]',
          'text-[var(--dropdown-item-active-text)]'
        ],
        false: []
      }
    },
    defaultVariants: {
      variant: 'default',
      active: false
    }
  }
);

export {
  dropdownVariants,
  dropdownMenuVariants,
  dropdownItemVariants,
  dropdownButtonVariants
};