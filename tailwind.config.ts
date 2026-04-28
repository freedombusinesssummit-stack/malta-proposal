import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        lime: {
          50: "#f3ffe3", 100: "#e4ffc0", 200: "#c8ff80",
          300: "#9ef01a", 400: "#80cc10", 500: "#70e000", 600: "#5ab800", 700: "#3d8000",
        },
        carbon: {
          900: "#111827", 800: "#1f2937", 700: "#374151",
          600: "#4b5563", 500: "#6b7280", 400: "#9ca3af",
          300: "#d1d5db", 200: "#e5e7eb", 100: "#f3f4f6", 50: "#f9fafb",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.5" } },
        marquee: { "0%": { transform: "translateX(0%)" }, "100%": { transform: "translateX(-100%)" } },
        "spin-slow": { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        "marquee-scroll": { "0%": { transform: "translateX(0%)" }, "100%": { transform: "translateX(-50%)" } },
        "gradient-shift": { "0%": { backgroundPosition: "0% center" }, "100%": { backgroundPosition: "200% center" } },
        "border-beam-rotate": { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } },
        "shimmer-sweep": { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
        marquee: "marquee 25s linear infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "marquee-scroll": "marquee-scroll 35s linear infinite",
        "gradient-shift": "gradient-shift 4s linear infinite",
        "border-beam-rotate": "border-beam-rotate 12s linear infinite",
        "shimmer-sweep": "shimmer-sweep 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
