import cn from "@/lib/utils";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  as?: "button" | "a";
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  target?: string;
  rel?: string;
  download?: boolean | string;
  icon?: boolean;
  buttonClassName?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  as = "button",
  href,
  buttonClassName = "",
  className,
  icon = false,
  disabled,
  onClick,
  download,
  target,
  rel,
  ...props
}) => {
  const elementProps =
    as === "a"
      ? {
          role: "button",
          ...(!disabled
            ? {
                href,
                download,
                target,
                rel,
              }
            : {}),
          ...props,
        }
      : { onClick: !disabled ? onClick : undefined, ...props };

  return (
    <div
      className={cn(
        "group relative mt-1.5 inline-block w-fit bg-primary bg-opacity-40",
        className
      )}
    >
      {React.createElement(
        as === "a" ? "a" : "button",
        {
          className: cn(
            "inline-flex items-center justify-center text-white border-2 border-primary bg-gray-800 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 cursor-pointer",
            "group-hover:translate-x-1.5 group-hover:-translate-y-1.5",
            disabled ? "opacity-60" : "",
            icon ? "p-4" : "px-4 py-2",
            buttonClassName
          ),
          disabled,
          ...elementProps,
        },
        children
      )}
    </div>
  );
};

export default Button;
