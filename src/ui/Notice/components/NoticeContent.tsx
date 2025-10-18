import { Button } from '../../Button';

interface NoticeContentProps {
  title?: string;
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const NoticeContent: React.FC<NoticeContentProps> = ({
  title,
  message,
  action
}) => {
  return (
    <div className="flex-1 min-w-0">
      {title && (
        <h4 className="font-semibold text-sm mb-1">{title}</h4>
      )}
      <p className="text-sm leading-5">{message}</p>
      
      {action && (
        <div className="mt-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={action.onClick}
            className="!p-0 !h-auto text-current hover:bg-current/10"
          >
            {action.label}
          </Button>
        </div>
      )}
    </div>
  );
};