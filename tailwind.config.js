/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#045757",
        black: "#222222",
        neutral: "#044343",
        white: "#e4e4e4",
      },
      fontSize: {
        "10xl": "8rem",
      },
    },
  },
  plugins: [],
};
