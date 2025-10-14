
export const getTitleSizeClass = (size: string) => {
  switch (size) {
    case 'sm': return 'text-sm';
    case 'lg': return 'text-lg';
    default: return '';
  }
};

export const getMessageSizeClass = (size: string) => {
  switch (size) {
    case 'sm': return 'text-sm';
    case 'lg': return 'text-lg';
    default: return '';
  }
};

export const getActionVariantClass = (variant: string) => {
  switch (variant) {
    case 'info': return 'text-blue-700';
    case 'success': return 'text-green-700';
    case 'warning': return 'text-yellow-700';
    case 'error': return 'text-red-700';
    case 'neutral': return 'text-gray-700';
    default: return 'text-blue-700';
  }
};