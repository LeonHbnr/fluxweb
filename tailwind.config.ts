import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#C8F3FF",
        surface: "rgba(255, 255, 255, 0.45)",
        "surface-light": "#EBFBFF",
        brand: {
          orange: "#FF5C23",
          umber: "#3D1405",
          muted: "#6E4436",
        },
        pill: {
          lime: "#BEFF8B",
          lavender: "#D5BAFB",
          white: "#FFFFFF",
          ink: "#0B0B0D",
        },
      },
      borderColor: {
        editorial: "rgba(61, 20, 5, 0.12)",
        "editorial-strong": "rgba(61, 20, 5, 0.28)",
        "editorial-orange": "rgba(255, 92, 35, 0.35)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        editorial: "2rem",
        "editorial-sm": "1rem",
      },
      transitionTimingFunction: {
        "wembi-out": "cubic-bezier(0.19, 1, 0.22, 1)",
        "wembi-quart": "cubic-bezier(0.5, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
