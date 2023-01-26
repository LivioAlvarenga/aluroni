/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        italiana: ["Italiana", "sans-serif"],
      },
      backgroundImage: {
        header: "url('./src/assets/images/header.png')",
      },
      colors: {
        dark: "#242536",
        darkGrey: "#92929d",
        grey: "#e4e4e4",
        black: "#4c4d5e",
        lightGrey: "#f6f6f6",
        blue: "#282b57",
        red: "#d73b3b",
      },
    },
  },
  plugins: [],
};
