import cn from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import React from "react";

const buttonVariants = cva(
  [
    "inline-flex w-fit items-center justify-center gap-2",
    "border",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-hidden focus-visible:ring-2",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:translate-y-0 active:scale-[0.98]",
    "motion-reduce:transition-none motion-reduce:transform-none",
    "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        "solid-primary": [
          "border-primary bg-primary text-white",
          "hover:-translate-y-0.5 hover:border-primary/80 hover:bg-primary/90",
          "hover:shadow-md hover:shadow-primary/15",
          "active:bg-primary/80",
          "focus-visible:ring-primary",
        ],

        "solid-accent": [
          "border-accent bg-accent text-black",
          "hover:-translate-y-0.5 hover:border-accent/80 hover:bg-accent/90",
          "hover:shadow-md hover:shadow-accent/15",
          "active:bg-accent/80",
          "focus-visible:ring-accent",
        ],

        "bordered-primary": [
          "border-primary bg-transparent text-white",
          "hover:-translate-y-0.5 hover:bg-primary/10",
          "hover:shadow-sm hover:shadow-primary/10",
          "active:bg-primary/20",
          "focus-visible:ring-primary",
        ],

        "bordered-accent": [
          "border-accent bg-transparent text-white",
          "hover:-translate-y-0.5 hover:bg-accent/10",
          "hover:shadow-sm hover:shadow-accent/10",
          "active:bg-accent/20",
          "focus-visible:ring-accent",
        ],

        ghost: [
          "border-transparent bg-transparent text-white",
          "hover:bg-white/5 hover:text-accent",
          "active:bg-white/10",
        ],

        "bordered-ghost-primary": [
          "border-primary bg-transparent text-white",
          "hover:-translate-y-0.5 hover:border-primary/80 hover:bg-primary/10",
          "active:bg-primary/20",
          "focus-visible:ring-primary",
        ],

        "bordered-ghost-accent": [
          "border-accent bg-transparent text-white",
          "hover:-translate-y-0.5 hover:border-accent/80 hover:bg-accent/10",
          "active:bg-accent/20",
          "focus-visible:ring-accent",
        ],
      },

      size: {
        sm: "px-3 py-1",
        default: "px-4 py-2",
        lg: "px-5 py-3",
        icon: "p-3",
      },

      hover: {
        default: "",
        none: "hover:transform-none hover:shadow-none",
      },
    },

    defaultVariants: {
      variant: "bordered-ghost-primary",
      size: "default",
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
  disabled?: boolean;
  disableHoverStyles?: boolean;
  type?: React.ComponentProps<"button">["type"];
}

const Button = ({
  children,
  as = "button",
  href,
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
  hover,
  ...props
}: ButtonProps) => {
  const classNames = cn(
    buttonVariants({
      variant,
      size: size ?? (icon ? "icon" : "default"),
      hover: disableHoverStyles ? "none" : "default",
    }),
    disabled && "pointer-events-none opacity-50",
    className,
  );

  if (as === "button") {
    return (
      <button
        {...props}
        className={classNames}
        disabled={disabled}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (as === "a") {
    return (
      <a
        {...props}
        className={classNames}
        href={disabled ? undefined : href}
        target={target}
        rel={rel}
        download={download}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? undefined : onClick}
      >
        {children}
      </a>
    );
  }

  if (!href) return null;

  return (
    <Link
      {...props}
      className={classNames}
      href={disabled ? "#" : href}
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
  );
};

export default Button;
