import cn from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "transition-all duration-300 ease-in-out",
    "focus:outline-none focus:ring-2 focus:ring-opacity-50",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        "solid-primary":
          "border border-primary bg-primary focus:ring-primary text-white",

        "solid-accent":
          "border border-accent bg-accent focus:ring-accent text-black",

        "bordered-primary":
          "border border-primary bg-transparent focus:ring-primary text-white",

        "bordered-accent":
          "border border-accent bg-transparent focus:ring-accent text-white",

        ghost: "bg-transparent border-transparent text-white",

        "bordered-ghost-primary":
          "border border-primary bg-transparent focus:ring-primary text-white",

        "bordered-ghost-accent":
          "border border-accent bg-transparent focus:ring-accent text-black",
      },

      size: {
        sm: "px-3 py-1",
        default: "px-4 py-2",
        lg: "px-5 py-3",
        icon: "p-4",
      },

      hover: {
        default: "",
        none: "",
      },
    },

    defaultVariants: {
      variant: "bordered-ghost-primary",
      size: "default",
      hover: "default",
    },
  },
);

const buttonWrapperVariants = cva(
  "group relative inline-block w-fit tranition-all duration-300",
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

interface ButtonProps
  extends VariantProps<typeof buttonVariants>, React.ComponentProps<"button"> {
  children: React.ReactNode;
  as?: "button" | "a" | "span";
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  target?: string;
  rel?: string;
  download?: boolean | string;
  icon?: boolean;
  buttonClassName?: string;
  disabled?: boolean;
  disableHoverStyles?: boolean;
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
  disableHoverStyles,
  variant,
  size,
  hover,
  ...props
}) => {
  const elementProps = (() => {
    switch (as) {
      case "a":
        return {
          role: "button",
          ...(!disabled ? { href, download, target, rel } : {}),
          ...props,
        };

      case "button":
        return {
          onClick: !disabled ? onClick : undefined,
          ...props,
        };

      case "span":
        return props;
    }
  })();

  const effectiveHover = disableHoverStyles ? "none" : hover;

  return (
    <div
      className={cn(
        buttonWrapperVariants({
          variant,
          hover: effectiveHover,
        }),
        className,
      )}
    >
      {React.createElement(
        as,
        {
          className: cn(
            buttonVariants({
              variant,
              size: size ?? (icon ? "icon" : "default"),
              hover: effectiveHover,
            }),
            disabled && "opacity-60",
            buttonClassName,
          ),
          disabled: as === "button" ? disabled : undefined,
          ...elementProps,
        },
        children,
      )}
    </div>
  );
};

export default Button;
