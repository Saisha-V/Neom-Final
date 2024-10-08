/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        cormorant: ["Cormorant Garamond", "sans-serif"],
        ivy: ["Ivy Mode", "sans-serif"],
      },
    },
  },
  plugins: [],
};
