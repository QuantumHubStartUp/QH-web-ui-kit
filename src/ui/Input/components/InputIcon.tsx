
interface InputIconProps {
  icon?: React.ReactNode;
}

export const InputIcon: React.FC<InputIconProps> = ({ icon }) => {
  if (!icon) return null;

  return (
    <span className="absolute left-3 text-gray-400 pointer-events-none">
      {icon}
    </span>
  );
};