/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070d",
          900: "#0a0e18",
          850: "#0d1220",
          800: "#111827",
          700: "#1b2333",
          600: "#2a3346",
          500: "#3d4761",
          400: "#5b6788",
          300: "#8b96b3",
          200: "#c2c9dc",
          100: "#e6e9f2",
        },
        accent: {
          DEFAULT: "#4ee1c2",
          soft: "#8de8d4",
          dim: "#1f4a42",
        },
        signal: "#ff9f5a",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(78,225,194,0.15), 0 8px 40px -8px rgba(78,225,194,0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(18px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        blink: {
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
