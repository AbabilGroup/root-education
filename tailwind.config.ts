import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    extend: {
      colors: {
        primary: "#F37329",
        secondary: "#040707",
      },

      backgroundImage: {
        "home-hero-bg": "url('/images/pages/home/hero_section/hero_bg.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
