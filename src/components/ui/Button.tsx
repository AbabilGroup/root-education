import { ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: TButtonProps) => {
  return (
    <button
      className="hover:bg-secondary rounded-sm bg-primary px-5 py-3 text-sm font-medium text-white duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
