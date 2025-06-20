import { ReactNode } from "react";

interface ButtonProps {
  title: string;
  icon?: ReactNode;
  className: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, icon, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`font-primary flex items-center gap-2 rounded-lg border border-gray-500 bg-gray-600/25 p-3 leading-0 text-white backdrop-blur-sm backdrop-filter transition-colors duration-300 hover:bg-gray-400/25 md:gap-4 md:py-4 md:px-6  ${className}`}
    >
      {title} {icon}
    </button>
  );
};

export default Button;
