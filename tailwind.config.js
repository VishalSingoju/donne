/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mustard: {
          DEFAULT: "#E1AD01",
          soft: "#F4D35E",
          cream: "#FFF6D6",
          dark: "#B88C00",
        },
        mud: {
          DEFAULT: "#6B4A2F",
          deep: "#3B2A1A",
        },
        page: "#FFFCF2",
        leaf: "#6A8F3A",
        clay: "#B5483A",
      },
      borderRadius: { card: "16px", btn: "12px" },
      boxShadow: { soft: "0 4px 20px rgba(107, 74, 47, 0.08)" },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
