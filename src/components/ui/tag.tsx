import cn from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const tagVariants = cva(
  [
    "inline-flex w-fit items-center justify-center",
    "bg-brand/10 text-muted text-sm",
    "border border-brand/70",
  ],
  {
    variants: {
      size: {
        sm: "px-3 py-1",
        default: "px-4 py-2",
        lg: "px-5 py-3",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

interface ButtonProps extends VariantProps<typeof tagVariants> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Tag: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  size,
  ...props
}) => {
  return (
    <div
      className={cn(
        tagVariants({
          size,
        }),
        disabled ? "opacity-60" : "",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Tag;
