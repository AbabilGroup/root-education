import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  to?: Url;
};

const Button = ({ children, onClick, to = "#" }: TButtonProps) => {
  return (
    <Link href={to}>
      <button
        className="rounded-sm bg-primary px-5 py-3 text-sm font-medium text-white duration-300 hover:bg-secondary"
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
