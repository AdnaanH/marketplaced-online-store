import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3a0ca3",
        "secondary": "#4361ee",
        "neutral": "#edf2fb",
        "cta": "#ffbc42",
        "error": "#c1121f",
      },
      backgroundImage: {
        "bg": "url(/bg.png)",
      },
    },
  },
  plugins: [],
};
export default config;
