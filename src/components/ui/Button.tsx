import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type TButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  to?: Url;
  bg?: string;
  text?: string;
};

const Button = ({
  children,
  onClick,
  to = "#",
  bg = "primary",
  text = "white",
}: TButtonProps) => {
  return (
    <Link href={to}>
      <button
        className={`rounded-sm bg-[${bg}] px-5 py-3 text-sm font-medium text-[${text}] duration-300 hover:bg-secondary hover:text-white`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
