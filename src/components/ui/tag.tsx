import cn from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const tagVariants = cva(
  [
    "inline-flex w-fit items-center justify-center",
    "border border-brand/70 bg-brand/10",
    "font-mono tracking-wide text-primary-text/90",
  ],
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-[9px] sm:text-[10px]",
        default: "px-2.5 py-1.5 text-[10px] sm:px-3 sm:text-xs",
        lg: "px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

interface TagProps
  extends VariantProps<typeof tagVariants>, React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  disabled?: boolean;
}

const Tag = ({
  children,
  className,
  disabled = false,
  size,
  as: Component = "span",
  ...props
}: TagProps) => {
  return (
    <Component
      className={cn(
        tagVariants({ size }),
        disabled && "pointer-events-none opacity-50",
        className,
      )}
      aria-disabled={disabled || undefined}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Tag;
