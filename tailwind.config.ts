import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "bounce-right": {
          "0%, 100%": { transform: "translateX(0) rotate(0deg)" },
          "30%": { transform: "translateX(10px) rotate(0deg)" },
        },
        "bounce-left": {
          "0%, 100%": { transform: "translateX(0) rotate(180deg)" },
          "70%": { transform: "translateX(10px) rotate(180deg)" },
        },
      },
      animation: {
        "bounce-left": "bounce-left 1s ease-in-out infinite",
        "bounce-right": "bounce-right 1s ease-in-out infinite",
      },
      boxShadow: {
        card: "-8px 8px 0",
      },
      dropShadow: {
        hero: "0px 30px 30px rgba(137 139 250 / 0.7)",
      },
      colors: {
        primary: "rgb(99 102 241 / <alpha-value>)",
        "primary-text": "rgb(180 190 220 / <alpha-value>)",
        brand: "rgb(129 140 248 / <alpha-value>)",
        accent: "rgb(45 212 191 / <alpha-value>)",
        background: "rgb(15 23 42 / <alpha-value>)",
        surface: "rgb(30 41 59 / <alpha-value>)",
        elevated: "rgb(22 32 50 / <alpha-value>)",
        muted: "rgb(148 163 184 / <alpha-value>)",
        subtle: "rgb(100 116 139 / <alpha-value>)",
      },
      transitionTimingFunction: {
        anticipate: "cubic-bezier(1.000, -0.600, 0.585, 0.965)",
      },
    },
  },
} satisfies Config;
