/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enables manual dark mode

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Primary background shades
        background: {
          DEFAULT: "#0f0f11",
          secondary: "#121212",
          card: "#1a1a1d",
        },

        // Text colors
        text: {
          primary: "#f9fafb",
          secondary: "#9ca3af",
        },

        // Accent colors (subtle, professional)
        primary: {
          DEFAULT: "#6366f1", // indigo
          hover: "#4f46e5",
        },

        // Custom ink palette (your original)
        ink: {
          50: "#f3f4f6",
          100: "#1f2937",
          200: "#111827",
          300: "#0b1220",
        },
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.25)",
        card: "0 4px 20px rgba(0, 0, 0, 0.15)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [],
};