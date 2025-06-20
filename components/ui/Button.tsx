import { ReactNode } from "react";

interface ButtonProps {
  title: string;
  icon?: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-primary absolute right-40 bottom-30 z-99 flex items-center gap-1 rounded-lg border border-gray-500 bg-gray-600/10 p-3 text-2xl text-white backdrop-blur-sm backdrop-filter transition-colors duration-300 hover:bg-gray-400/25 md:right-60 md:bottom-40 md:gap-2 md:p-4 md:px-6 md:text-3xl"
    >
      {title} {icon}
    </button>
  );
};

export default Button;
