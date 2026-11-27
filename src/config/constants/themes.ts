export const THEMES = [
  {
    id: "indigo",
    name: "Electric Indigo",
    description: "Indigo & Mint",
    primary: "#6366f1",
    accent: "#2dd4bf",
  },
  {
    id: "violet",
    name: "Royal Violet",
    description: "Violet & Coral",
    primary: "#7c3aed",
    accent: "#fb7185",
  },
  {
    id: "emerald",
    name: "Emerald",
    description: "Green & Champagne",
    primary: "#059669",
    accent: "#d6b779",
  },
  {
    id: "cobalt",
    name: "Cobalt",
    description: "Blue & Lime",
    primary: "#2563eb",
    accent: "#bef264",
  },
  {
    id: "graphite",
    name: "Warm Graphite",
    description: "Orange & Warm Grey",
    primary: "#ea580c",
    accent: "#eab88a",
  },
] as const;

export type ThemeName = (typeof THEMES)[number]["id"];

export const DEFAULT_THEME: ThemeName = "indigo";
export const THEME_STORAGE_KEY = "portfolio-theme";
