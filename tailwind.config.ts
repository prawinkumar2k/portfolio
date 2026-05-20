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
        // Deep Indigo × Electric Violet × Warm Gold
        brand: {
          indigo:       "#1E1B4B",
          "indigo-deep": "#0F0B2D",
          violet:       "#7C3AED",
          "violet-dark": "#6D28D9",
          "violet-light": "#A855F7",
          gold:         "#F59E0B",
          "gold-dark":  "#D97706",
        },
        surface: {
          DEFAULT: "#F5F4F0",
          white:   "#FFFFFF",
          card:    "#FFFFFF",
          muted:   "#F0EEF9",
        },
        slate: {
          50:  "#FAF9FF",
          100: "#F5F3FC",
          200: "#E2DFF5",
          300: "#C4BEED",
          400: "#9E99C7",
          500: "#7B75B0",
          600: "#4C4484",
          700: "#312E81",
          800: "#1E1B4B",
          900: "#0F0B2D",
        },
      },
      fontFamily: {
        sans:    ["DM Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Syne", "DM Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "card":        "0 2px 15px rgba(30, 27, 75, 0.04), 0 1px 4px rgba(30, 27, 75, 0.06)",
        "card-hover":  "0 10px 40px rgba(30, 27, 75, 0.10), 0 2px 8px rgba(30, 27, 75, 0.06)",
        "violet":      "0 4px 14px rgba(124, 58, 237, 0.32)",
        "violet-lg":   "0 8px 30px rgba(124, 58, 237, 0.42)",
        "indigo":      "0 4px 14px rgba(30, 27, 75, 0.20)",
        "inner-sm":    "inset 0 1px 3px rgba(30, 27, 75, 0.06)",
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
        "gradient-hero":          "linear-gradient(135deg, #F5F4F0 0%, #EDE9FA 50%, #F0EEF9 100%)",
        "gradient-violet":        "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
        "gradient-accent":        "linear-gradient(135deg, #1E1B4B 0%, #7C3AED 100%)",
        "gradient-gold":          "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
        "gradient-radial-violet": "radial-gradient(circle at center, rgba(124,58,237,0.07) 0%, transparent 70%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
