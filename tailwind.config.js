/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D48C2E",
        secondary: "#1A1F2E",
        accent: "#2A2F45",
        destructive: "#ef4444",
        muted: "#6b7280",
        "muted-foreground": "#9ca3af",
        background: "#f9fafb",
        foreground: "#111827",
        border: "#e5e7eb",
        input: "#e5e7eb",
        ring: "#D48C2E",
      },
      fontFamily: {
        heading: ["Cairo", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      animation: {
        fade: "fade 0.3s ease-in-out",
        slideIn: "slideIn 0.3s ease-out",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
