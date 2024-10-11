import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  to?: Url;
  bg?: string;
  text?: string;
  icon?: ReactNode;
};

const Button = ({
  children,
  onClick,
  to = "#",
  bg = "bg-primary",
  text = "text-white",
  icon,
}: TButtonProps) => {
  return (
    <Link href={to}>
      <button
        className={`flex items-center justify-center gap-x-2 rounded-sm px-5 py-3 text-sm font-medium duration-300 hover:bg-secondary hover:text-white ${bg} ${text}`}
        onClick={onClick}
      >
        {icon} {children}
      </button>
    </Link>
  );
};

export default Button;
