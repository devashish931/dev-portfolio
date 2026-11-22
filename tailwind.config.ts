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
      colors: {
        "primary-text": "rgb(180 178 214 / <alpha-value>)",
        charcoal: {
          DEFAULT: "#1e1e1e",
        },
        brand: {
          DEFAULT: "rgb(137 139 250 / <alpha-value>)",
          light: "rgb(167 139 250 / <alpha-value>)",
          dark: "rgb(26 22 80 / <alpha-value>)",
        },

        accent: {
          DEFAULT: "rgb(251 191 36 / <alpha-value>)",
          hover: "rgb(245 158 11 / <alpha-value>)",
        },

        background: "rgb(11 10 26 / <alpha-value>)",

        surface: {
          DEFAULT: "rgb(20 18 48 / <alpha-value>)",
          elevated: "rgb(26 22 80 / <alpha-value>)",
        },

        border: {
          DEFAULT: "rgb(48 37 107 / <alpha-value>)",
          strong: "rgb(109 59 255 / <alpha-value>)",
        },

        elevated: "rgb(20 18 40 / <alpha-value>)",
        foreground: "rgb(244 243 255 / <alpha-value>)",
        muted: "rgb(178 180 214 / <alpha-value>)",
        subtle: "rgb(136 132 166 / <alpha-value>)",
      },
      transitionTimingFunction: {
        anticipate: "cubic-bezier(1.000, -0.600, 0.585, 0.965)",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
