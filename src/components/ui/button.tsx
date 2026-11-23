import cn from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import React from "react";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "transition-all duration-300 ease-in-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        "solid-primary":
          "border border-primary bg-primary text-white focus-visible:ring-primary",

        "solid-accent":
          "border border-accent bg-accent text-black focus-visible:ring-accent",

        "bordered-primary":
          "border border-primary bg-transparent text-white focus-visible:ring-primary",

        "bordered-accent":
          "border border-accent bg-transparent text-white focus-visible:ring-accent",

        ghost: "border-transparent bg-transparent text-white",

        "bordered-ghost-primary":
          "border border-primary bg-transparent text-white focus-visible:ring-primary",

        "bordered-ghost-accent":
          "border border-accent bg-transparent text-black focus-visible:ring-accent",
      },

      size: {
        sm: "px-3 py-1",
        default: "px-4 py-2",
        lg: "px-5 py-3",
        icon: "p-4",
      },
    },

    defaultVariants: {
      variant: "bordered-ghost-primary",
      size: "default",
    },
  },
);

const buttonWrapperVariants = cva(
  "group relative inline-block w-fit transition-all duration-300",
  {
    variants: {
      variant: {
        "solid-primary": "bg-primary/20",
        "solid-accent": "bg-accent/20",
        "bordered-primary": "bg-primary/20",
        "bordered-accent": "bg-accent/20",
        ghost: "bg-transparent",
        "bordered-ghost-primary": "bg-transparent",
        "bordered-ghost-accent": "bg-transparent",
      },

      hover: {
        default: "hover:scale-95",
        none: "",
      },
    },

    defaultVariants: {
      variant: "bordered-ghost-primary",
      hover: "default",
    },
  },
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  as?: "button" | "a" | "Link";
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  target?: string;
  rel?: string;
  download?: boolean | string;
  icon?: boolean;
  buttonClassName?: string;
  disabled?: boolean;
  disableHoverStyles?: boolean;
  type?: React.ComponentProps<"button">["type"];
}

const Button: React.FC<ButtonProps> = ({
  children,
  as = "button",
  href,
  buttonClassName = "",
  className,
  icon = false,
  disabled = false,
  onClick,
  download,
  target,
  rel,
  disableHoverStyles,
  variant,
  size,
  type,
  ...props
}) => {
  const effectiveHover = disableHoverStyles ? "none" : "default";

  const wrapperClassName = cn(
    buttonWrapperVariants({
      variant,
      hover: effectiveHover,
    }),
    className,
  );

  const elementClassName = cn(
    buttonVariants({
      variant,
      size: size ?? (icon ? "icon" : "default"),
    }),
    disabled && "pointer-events-none opacity-60",
    buttonClassName,
  );

  const commonProps = {
    className: elementClassName,
    onClick: disabled ? undefined : onClick,
    ...props,
  };

  return (
    <div className={wrapperClassName}>
      {as === "button" && (
        <button {...commonProps} disabled={disabled} type={type}>
          {children}
        </button>
      )}

      {as === "a" && (
        <a
          {...commonProps}
          href={disabled ? undefined : href}
          target={target}
          rel={rel}
          download={download}
          aria-disabled={disabled || undefined}
          tabIndex={disabled ? -1 : undefined}
        >
          {children}
        </a>
      )}

      {as === "Link" && (
        <Link
          {...commonProps}
          href={disabled ? "#" : href || "#"}
          target={target}
          rel={rel}
          download={download}
          aria-disabled={disabled || undefined}
          tabIndex={disabled ? -1 : undefined}
          onClick={(event) => {
            if (disabled) {
              event.preventDefault();
              return;
            }
            onClick?.(event);
          }}
        >
          {children}
        </Link>
      )}
    </div>
  );
};

export default Button;
