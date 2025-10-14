import { ButtonIcon } from './ButtonIcon';

interface ButtonContentProps {
  children: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
}

export const ButtonContent: React.FC<ButtonContentProps> = ({ 
  children, 
  loading = false, 
  icon 
}) => {
  return (
    <>
      <ButtonIcon loading={loading} icon={icon} />
      <span>{children}</span>
    </>
  );
};