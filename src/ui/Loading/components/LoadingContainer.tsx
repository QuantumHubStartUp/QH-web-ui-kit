
interface LoadingContainerProps {
  containerClass: string;
  shouldCenter: boolean;
  children: React.ReactNode;
}

export const LoadingContainer: React.FC<LoadingContainerProps> = ({
  containerClass,
  shouldCenter,
  children
}) => {
  if (shouldCenter) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        {children}
      </div>
    );
  }

  if (containerClass) {
    return <div className={containerClass}>{children}</div>;
  }

  return <>{children}</>;
};