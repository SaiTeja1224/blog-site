import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "rgb(253 186 116)",
        "accent-secondary": "#c4525a",
        "accent-secondary-light": "#ff846d",
        "accent-light": "rgb(254 215 170)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
