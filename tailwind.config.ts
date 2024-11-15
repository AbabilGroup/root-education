import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindScrollbar from "tailwind-scrollbar";

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
      scrollbar: {
        thin: {
          "scrollbar-width": "thin",
        },
        default: {
          "scrollbar-width": "auto",
        },
      },
      colors: {
        scrollbar: {
          DEFAULT: "#F37329", // Thumb color
          track: "#E5E7EB", // Track color
        },
        primary: "#F37329",
        secondary: "#040707",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "home-hero-bg": 'url("/images/pages/home/hero_section/hero_bg.png")',
        "footer-bg": 'url("/images/footer/footer_bg.png")',
        "testimonial-card-bg": 'url("/images/Rectangle 38 (1).png")',
        "about-us-banner-bg":
          'url("/images/pages/about_us/about_us_banner_bg.png")',
        "why-choose-us-bg":
          'url("/images/pages/about_us/why_choose_us_bg.png")',
        "get-in-touch-bg": 'url("/images/pages/about_us/get_in_touch_bg.png")',
        "page-banner-bg": 'url("/images/page_banner_bg.png")',
        "service-benefits-bg":
          'url("/images/pages/services/university_selection/service_benefits_bg.png")',
        "consultation-bg":
          'url("/images/pages/consultation/consultation_bg.svg")',
        "contact-us-form-bg":
          'url("/images/pages/contact_us/contact_us_form_bg.png")',
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
        pulse: {
          "25%": {
            transform: "scale(0.9)",
          },
          "75%": {
            transform: "scale(1.1)",
          },
        },
      },
      animation: {
        floating: "floating 2s ease-in-out infinite",
        pulse: "pulse 1s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindScrollbar({ nocompatible: true })],
};
export default config;
