"use client";

import cn from "@/lib/utils";
import {
  cloneElement,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactElement,
} from "react";

interface DropdownProps {
  trigger: ReactElement<{
    onClick?: React.MouseEventHandler;
    "aria-expanded"?: boolean;
    "aria-controls"?: string;
    "aria-haspopup"?: boolean | "menu";
  }>;
  children: React.ReactNode;
  align?: "left" | "right";
  className?: string;
  menuClassName?: string;
  closeOnClick?: boolean;
}

export function Dropdown({
  trigger,
  children,
  align = "right",
  className,
  menuClassName,
  closeOnClick = false,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.inert = !open;
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const triggerElement = cloneElement(trigger, {
    "aria-expanded": open,
    "aria-controls": menuId,
    "aria-haspopup": true,
    onClick: (event) => {
      trigger.props.onClick?.(event);
      setOpen((prev) => !prev);
    },
  });

  return (
    <div ref={dropdownRef} className={cn("relative inline-flex", className)}>
      {triggerElement}

      <div
        ref={menuRef}
        id={menuId}
        aria-hidden={!open}
        onClick={() => {
          if (closeOnClick) setOpen(false);
        }}
        className={cn(
          "absolute top-full z-50 mt-2 min-w-48",
          "border-border bg-surface rounded-xl border p-2 shadow-xl",
          "transition-all duration-200 ease-out",
          align === "right" ? "right-0" : "left-0",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
          menuClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
