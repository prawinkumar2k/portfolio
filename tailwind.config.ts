import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
        // Deep Navy · Electric Teal · Warm Amber
        brand: {
          navy:    "#0B1D3A",
          "navy-light": "#1A3560",
          teal:    "#00B8A9",
          "teal-dark": "#009E91",
          "teal-light": "#00D4C8",
          amber:   "#F5A623",
          "amber-dark": "#D4871A",
        },
        surface: {
          DEFAULT: "#EEF2F7",
          white:   "#FFFFFF",
          card:    "#FFFFFF",
          muted:   "#F0F4F9",
        },
        slate: {
          50:  "#F8FAFC",
          100: "#F0F4F9",
          200: "#D8E3EE",
          300: "#B0C4D8",
          400: "#8FA5C0",
          500: "#6B88A8",
          600: "#3D5A80",
          700: "#1A3560",
          800: "#0B1D3A",
          900: "#060F1E",
        },
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Syne", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "card":       "0 2px 15px rgba(11, 29, 58, 0.04), 0 1px 4px rgba(11, 29, 58, 0.06)",
        "card-hover": "0 10px 40px rgba(11, 29, 58, 0.10), 0 2px 8px rgba(11, 29, 58, 0.06)",
        "teal":       "0 4px 14px rgba(0, 184, 169, 0.28)",
        "teal-lg":    "0 8px 30px rgba(0, 184, 169, 0.38)",
        "navy":       "0 4px 14px rgba(11, 29, 58, 0.20)",
        "inner-sm":   "inset 0 1px 3px rgba(11, 29, 58, 0.06)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 4s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "slide-in": "slide-in 0.5s ease-out",
      },
      backgroundImage: {
        "gradient-hero":         "linear-gradient(135deg, #EEF2F7 0%, #E0EFF5 50%, #E8F7F5 100%)",
        "gradient-teal":         "linear-gradient(135deg, #00B8A9 0%, #009E91 100%)",
        "gradient-accent":       "linear-gradient(135deg, #0B1D3A 0%, #00B8A9 100%)",
        "gradient-amber":        "linear-gradient(135deg, #F5A623 0%, #D4871A 100%)",
        "gradient-radial-teal":  "radial-gradient(circle at center, rgba(0,184,169,0.07) 0%, transparent 70%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
