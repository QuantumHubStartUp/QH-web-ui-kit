
import { InputLoader } from './InputLoader';
import { InputIcon } from './InputIcon';

interface InputAdornmentsProps {
  loading?: boolean;
  icon?: React.ReactNode;
}

export const InputAdornments: React.FC<InputAdornmentsProps> = ({ 
  loading = false, 
  icon 
}) => {
  return (
    <>
      {loading && <InputLoader />}
      {icon && !loading && <InputIcon icon={icon} />}
    </>
  );
};