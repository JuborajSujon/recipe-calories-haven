import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "fira-sans": "'Fira Sans', sans-serif",
        lexend: "'Lexend', sans-serif",
      },
      colors: {
        primary: "#150b2b",
        secondary: "#0BE58A",
        dark02: "#282828",
        dark06: "#878787",
      },
    },
  },
  plugins: [daisyui],
};
