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

      keyframes: {
        floating: {
          "0%": {
            shadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translateY(5px)",
          },
          "50%": {
            shadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
            transform: "translateY(-5px)",
          },
          "100%": {
            shadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translateY(5px)",
          },
        },
      },
      animation: {
        floating: "floating 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
