import { getMessageSizeClass, getTitleSizeClass } from '../utils/alert.utils';
import { ActionButton } from './ActionButton';

interface IAlertContentProps {
  title?: string;
  message: string;
  size: string | null;
  variant: string | null;
  action?: {
    label: string;
    onClick: () => void;
  };
}

/**
 * Компонент для отображения содержимого оповещения.
 *
 * @param {IAlertContentProps.title} props.title - Заголовок оповещения.
 * @param {IAlertContentProps.message} props.message - Сообщение оповещения.
 * @param {IAlertContentProps.size} props.size - Размер заголовка и сообщения.
 * @param {IAlertContentProps.variant} props.variant - Вариант кнопки действия.
 * @param {IAlertContentProps.action} props.action - Действие кнопки действия.
 * @returns {React.ReactElement} - Элемент React, представляющий содержимое оповещения.
 */
export const AlertContent: React.FC<IAlertContentProps> = ({
  title,
  message,
  size,
  variant,
  action
}: IAlertContentProps): React.ReactElement => {
  size = size || 'md';
  variant = variant || 'info';
  return (
    <div className="flex-1 min-w-0">
      {/* Заголовок */}
      {title && (
        <h4 className={`font-semibold mb-1 ${getTitleSizeClass(size)}`}>
          {title}
        </h4>
      )}
      
      {/* Сообщение */}
      <p className={`leading-relaxed ${getMessageSizeClass(size)}`}>
        {message}
      </p>
      
      {/* Кнопка действия */}
      {action && (
        <ActionButton action={action} variant={variant} />
      )}
    </div>
  );
};