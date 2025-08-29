

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 rounded bg-black text-white hover:bg-blue-700"
      {...props}
    >
      {children} 334444
    </button>
  );
};
