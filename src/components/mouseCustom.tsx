"use client";

import { useEffect } from "react";

export default function MouseCustom() {
  useEffect(() => {
    const container = document.querySelector(".page-background") as HTMLElement;

    if (!container) return;

    const handleMouseMove = (event: MouseEvent) => {
      container.style.setProperty("--mouse-x", `${event.clientX}px`);
      container.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    const handleClick = (event: MouseEvent) => {
      const ripple = document.createElement("span");

      ripple.className = "mouse-ripple";
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;

      container.appendChild(ripple);

      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
