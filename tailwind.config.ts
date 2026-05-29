import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f8fa",
          100: "#ebeef2",
          300: "#b7c0cc",
          500: "#657184",
          700: "#333b49",
          900: "#11151c"
        },
        accent: {
          50: "#edfdf8",
          100: "#d4f8ee",
          400: "#35cfa1",
          500: "#12b886",
          600: "#0b946d"
        },
        ember: {
          100: "#fff0d9",
          400: "#ffad4d",
          500: "#f58b22"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.10)",
        panel: "0 16px 40px rgba(15, 23, 42, 0.08)"
      },
      animation: {
        "fade-up": "fadeUp 700ms ease both",
        "pulse-soft": "pulseSoft 2.6s ease-in-out infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        }
      }
    }
  },
  plugins: []
};

export default config;
