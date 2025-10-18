import { Button } from '../../Button';

interface NoticeCloseButtonProps {
  showClose?: boolean;
  onClose: () => void;
}

export const NoticeCloseButton: React.FC<NoticeCloseButtonProps> = ({
  showClose = true,
  onClose
}) => {
  if (!showClose) return null;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClose}
      className="absolute top-2 right-2 !p-1 !h-6 !w-6 opacity-70 hover:opacity-100"
    >
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </Button>
  );
};