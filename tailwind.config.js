const path = require("path")

module.exports = {
  darkMode: "class",
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        container: `max(
					  min(50px, 5vw),
					  calc((100vw - calc(1700px - 3rem * 2)) / 2)
					)`,
        "sm-container": `max(
					  1rem,
					  calc((100vw - calc(550px - 1rem * 2)) / 2)
					)`,
      },
      transitionProperty: {
        width: "width margin",
        height: "height",
        bg: "background-color",
        display: "display opacity",
        visibility: "visibility",
        padding: "padding-top padding-right padding-bottom padding-left",
      },
      colors: {
        grey: {
          0: "#FFFFFF",
          5: "#F9FAFB",
          10: "#F3F4F6",
          20: "#E5E7EB",
          30: "#D1D5DB",
          40: "#9CA3AF",
          50: "#6B7280",
          60: "#4B5563",
          70: "#374151",
          80: "#1F2937",
          90: "#111827",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        none: "0px",
        soft: "2px",
        base: "4px",
        rounded: "8px",
        large: "16px",
        circle: "9999px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        xsmall: "512px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
      },
      fontSize: {
        "3xl": "2rem",
        heading1: [
          "clamp(1.88rem, 2.50vw + 1.38rem, 3.38rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            fontWeight: "900",
          },
        ],
        heading2: [
          "clamp(1.31rem,  0.94vw + 1.13rem, 1.88rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            fontWeight: "900",
          },
        ],
        heading3: [
          "clamp(1.31rem,  0.42vw + 1.23rem, 1.56rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            fontWeight: "900",
          },
        ],
        heading4: [
          "clamp(1.25rem, 0.27vw + 1.20rem, 1.44rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            fontWeight: "900",
          },
        ],
        heading5: [
          "clamp(1.25rem, 0.27vw + 1.20rem, 1.44rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            fontWeight: "900",
          },
        ],
        heading6: [
          "clamp(1.25rem, 0.27vw + 1.20rem, 1.44rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            fontWeight: "900",
          },
        ],
        subtitle1: [
          "clamp(1.00rem, 0.21vw + 0.96rem, 1.13rem)",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        subtitle2: [
          "clamp(1.00rem, 0.21vw + 0.96rem, 1.13rem)",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        body1: [
          "clamp(0.88rem, 0.21vw + 0.83rem, 1.00rem)",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        body2: [
          "clamp(0.88rem, 0.21vw + 0.83rem, 1.00rem)",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        caption: [
          "clamp(0.75rem, 0.21vw + 0.71rem, 0.88rem)",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        overline: [
          "clamp(0.75rem, 0.21vw + 0.71rem, 0.88rem)",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
      },
      fontFamily: {
        saol: ["var(--font-saol)"],
        akzidenz: ["var(--font-akzidenz-grotesk-pro)"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        playfair: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: [
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Ubuntu",
          "sans-serif",
        ],
      },
      keyframes: {
        ring: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-top": {
          "0%": {
            height: "100%",
          },
          "99%": {
            height: "0",
          },
          "100%": {
            visibility: "hidden",
          },
        },
        "accordion-slide-up": {
          "0%": {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          "100%": {
            height: "0",
            opacity: "0",
          },
        },
        "accordion-slide-down": {
          "0%": {
            "min-height": "0",
            "max-height": "0",
            opacity: "0",
          },
          "100%": {
            "min-height": "var(--radix-accordion-content-height)",
            "max-height": "none",
            opacity: "1",
          },
        },
        enter: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        leave: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.9)", opacity: 0 },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        ring: "ring 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        "fade-in-right":
          "fade-in-right 0.3s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-in-top": "fade-in-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-out-top":
          "fade-out-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "accordion-open":
          "accordion-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        "accordion-close":
          "accordion-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        leave: "leave 150ms ease-in forwards",
      },
    },
  },
  plugins: [require("tailwindcss-radix")(), require("tailwindcss-animate")],
}
