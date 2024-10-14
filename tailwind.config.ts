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
        "footer-bg": "url('/images/footer/footer_bg.png')",
        "testimonial-card-bg": "url('/images/Rectangle 38 (1).png')",
        "about-us-banner-bg":
          "url('/images/pages/about_us/about_us_banner_bg.png')",
        "why-choose-us-bg":
          "url('/images/pages/about_us/why_choose_us_bg.png')",
        "get-in-touch-bg": "url('/images/pages/about_us/get_in_touch_bg.png')",
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
