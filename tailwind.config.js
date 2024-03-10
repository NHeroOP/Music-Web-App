/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["poppins", "sans-serif"]
      },
      colors: {
        rare: "#BE5C2B",
        secondary: "#FBFD82",
        accent: "#232323",
        bg: "#F2F2F2",
      }
    },
  },
  plugins: [],
}