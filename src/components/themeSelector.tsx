"use client";

import { useEffect, useState } from "react";
import { LuPalette, LuCheck } from "react-icons/lu";
import { Dropdown } from "./ui/dropdown";
import Button from "./ui/button";
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  ThemeName,
  THEMES,
} from "@/config/constants/themes";
import cn from "@/lib/utils";

interface ThemeSelectorProps {
  className?: string;
}
export function ThemeSelector({ className }: ThemeSelectorProps) {
  const [activeTheme, setActiveTheme] = useState<ThemeName>(DEFAULT_THEME);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const isValidTheme = THEMES.some((theme) => theme.id === savedTheme);

    const theme = isValidTheme ? (savedTheme as ThemeName) : DEFAULT_THEME;

    setActiveTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const selectTheme = (theme: ThemeName) => {
    setActiveTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  };

  const active = THEMES.find((theme) => theme.id === activeTheme)!;

  return (
    <>
      {/* Desktop: compact dropdown */}
      <div className={cn("hidden md:block", className)}>
        <Dropdown
          align="right"
          closeOnClick
          menuClassName="w-64"
          trigger={
            <Button
              variant="ghost"
              aria-label="Choose color theme"
              className="p-2!"
            >
              <LuPalette style={{ color: active.primary }} className="size-5" />
            </Button>
          }
        >
          <div className="px-2 pb-2">
            <p className="text-primary-text text-sm font-semibold">
              Choose a theme
            </p>
          </div>

          <div className="space-y-1">
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                type="button"
                onClick={() => selectTheme(theme.id)}
                aria-pressed={activeTheme === theme.id}
                className="hover:bg-elevated flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors"
              >
                <ThemeSwatches primary={theme.primary} accent={theme.accent} />

                <span className="min-w-0 flex-1">
                  <span className="text-primary-text block text-sm font-medium">
                    {theme.name}
                  </span>
                  <span className="text-muted block text-xs">
                    {theme.description}
                  </span>
                </span>

                {activeTheme === theme.id && (
                  <LuCheck className="text-brand size-4" />
                )}
              </button>
            ))}
          </div>
        </Dropdown>
      </div>

      {/* Mobile: expanded selector for sidebar */}
      <div className={cn("md:hidden", className)}>
        <div className="mb-3 flex items-center gap-2">
          <LuPalette className="text-muted size-4" />
          <span className="text-primary-text text-sm font-semibold">
            Appearance
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {THEMES.map((theme) => (
            <button
              key={theme.id}
              type="button"
              onClick={() => selectTheme(theme.id)}
              aria-pressed={activeTheme === theme.id}
              className={`flex items-center gap-2 rounded-lg border p-2 text-left transition-colors ${
                activeTheme === theme.id
                  ? "border-brand bg-brand/10"
                  : "border-border bg-surface hover:bg-elevated"
              }`}
            >
              <ThemeSwatches primary={theme.primary} accent={theme.accent} />

              <span className="text-primary-text min-w-0 flex-1 truncate text-xs font-medium">
                {theme.name}
              </span>

              {activeTheme === theme.id && (
                <LuPalette className="text-brand size-3 shrink-0" />
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

function ThemeSwatches({
  primary,
  accent,
}: {
  primary: string;
  accent: string;
}) {
  return (
    <span className="flex shrink-0 -space-x-1">
      <span
        className="border-surface size-5 rounded-full border-2"
        style={{ backgroundColor: primary }}
      />
      <span
        className="border-surface size-5 rounded-full border-2"
        style={{ backgroundColor: accent }}
      />
    </span>
  );
}
