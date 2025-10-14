import { getActionVariantClass } from '../utils/alert.utils';

interface ActionButtonProps {
  action: {
    label: string;
    onClick: () => void;
  };
  variant: string;
}

/**
 * Компонент кнопки, используемый для запуска действия в оповещении.
 *
 * @param {ActionButtonProps.action} props.action - Действие кнопки действия.
 * @param {ActionButtonProps.variant} props.variant - Вариант кнопки действия.
 * @returns {React.ReactElement} - Элемент React, представляющий кнопку действия.
 */
export const ActionButton: React.FC<ActionButtonProps> = ({ action, variant }): React.ReactElement => {
  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={action.onClick}
        className={`
          font-medium underline-offset-2 hover:underline focus:outline-none focus:underline
          ${getActionVariantClass(variant)}
        `}
      >
        {action.label}
      </button>
    </div>
  );
};