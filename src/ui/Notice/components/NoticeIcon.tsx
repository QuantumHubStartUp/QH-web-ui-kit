
import { useNoticeIcon } from '../hooks/useNoticeIcon.hook';

interface NoticeIconProps {
  variant: "info" | "error" | "success" | "warning" | null;
  icon?: React.ReactNode;
}

export const NoticeIcon: React.FC<NoticeIconProps> = ({ variant, icon }) => {
  const noticeIcon = useNoticeIcon(variant, icon);

  return (
    <div className="flex-shrink-0 mt-0.5">
      {noticeIcon}
    </div>
  );
};