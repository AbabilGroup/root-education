import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

type TSiteButtonProps = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  to?: Url | undefined;
  bg?: string;
  text?: string;
  icon?: ReactNode;
  type?: "reset" | "submit" | undefined;
};

const SiteButton = ({
  className,
  children,
  onClick,
  to = "#",
  bg = "bg-primary",
  text = "text-white",
  icon,
  type,
}: TSiteButtonProps) => {
  const buttonContent = (
    <button
      className={`${className} flex items-center justify-center gap-x-2 rounded-sm px-5 py-3 text-sm font-medium duration-300 hover:bg-secondary hover:text-white ${bg} ${text}`}
      onClick={onClick}
      type={type}
    >
      {icon} {children}
    </button>
  );

  // If type is provided, render just the button without the Link wrapper
  return type ? buttonContent : <Link href={to}>{buttonContent}</Link>;
};

export default SiteButton;
