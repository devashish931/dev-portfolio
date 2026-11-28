import { useCallback, useSyncExternalStore } from "react";

const screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

type Screen = keyof typeof screens;

export function useMediaQuery(min?: Screen, max?: Screen): boolean {
  const query = [
    min && `(min-width: ${screens[min]}px)`,
    max && `(max-width: ${screens[max] - 1}px)`,
  ]
    .filter(Boolean)
    .join(" and ");

  const subscribe = useCallback(
    (callback: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    [query],
  );

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query],
  );

  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
