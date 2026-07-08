import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: "#14213D",
          light: "#23345C",
        },
        brass: {
          DEFAULT: "#B8863E",
          light: "#D9AE6D",
          dark: "#8C6427",
        },
        cream: "#FAF6F0",
        stone: "#5B6472",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "'Times New Roman'", "serif"],
        sans: ["-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "wood-gradient": "linear-gradient(135deg, #14213D 0%, #23345C 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
