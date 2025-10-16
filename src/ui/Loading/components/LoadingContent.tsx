
import { Loading, LoadingProps } from '../Loading';
import { useLoadingContent } from '../hooks/useLoadingContent.hook';

export interface LoadingContentProps extends LoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
  overlay?: boolean;
}

export const LoadingContent: React.FC<LoadingContentProps> = ({
  isLoading,
  children,
  overlay = true,
  ...props
}) => {
  const { wrapperClass, contentClass } = useLoadingContent({ isLoading, overlay });

  if (!isLoading) return <>{children}</>;

  return (
    <div className="relative">
      {overlay && (
        <div className={wrapperClass}>
          <Loading {...props} />
        </div>
      )}
      <div className={contentClass}>
        {children}
      </div>
    </div>
  );
};