import cn from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React from "react";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  prepend?: boolean;
  asButton?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  className = "",
  prepend = true,
  asButton,
  ...rest
}) => {
  return (
    <Link
      className={cn(
        "cursor-pointer border-black text-sm font-medium uppercase",
        asButton && "",
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;
