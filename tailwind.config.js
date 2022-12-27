/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["Space Mono", "monospace"],
      },
      colors: {
        "strong-cyan": "#26c0ab",
        "very-dark-cyan": "#00494d",
        "dark-grayish-cyan": "#5e7a7d",
        "grayish-cyan": "#7f9c9f",
        "light-grayish-cyan": "#c5e4e7",
        "very-light-grayish-cyan": "#f4fafa",
      },
    },
  },
  plugins: [],
};
