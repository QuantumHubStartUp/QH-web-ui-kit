
import { ButtonLoader } from './ButtonLoader';

interface ButtonIconProps {
  loading?: boolean;
  icon?: React.ReactNode;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({ 
  loading = false, 
  icon 
}) => {
  if (loading) {
    return <ButtonLoader />;
  }
  
  if (icon) {
    return <span className="flex-shrink-0">{icon}</span>;
  }
  
  return null;
};