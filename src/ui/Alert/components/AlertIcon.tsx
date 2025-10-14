
import { useAlertIcon } from '../hooks/useAlertIcon.hook';

interface IAlertIconProps {
  variant: string | null;
  icon?: React.ReactNode;
}

/**
 * Компонент для отображения иконки оповещения.
 * 
 * @param {IAlertIconProps} props.variant - Тип оповещения. Может быть: успех, предупреждение, ошибка, нейтральное.
 * @param {IAlertIconProps} props.icon - Пользовательский значок для использования вместо значка по умолчанию.
 * @returns {React.ReactNode} - Если пользовательский значок не указан, то значок по умолчанию будет зависеть от варианта.
 */
export const AlertIcon: React.FC<IAlertIconProps> = ({ variant, icon }: IAlertIconProps): React.ReactNode => {
  variant = variant || 'info';
  const alertIcon = useAlertIcon(variant, icon);
  return (
    <div className="flex-shrink-0 mt-0.5">
      {alertIcon}
    </div>
  );
};