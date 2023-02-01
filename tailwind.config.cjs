/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        italiana: ["Italiana", "serif"],
        josefinSans: ["JosefinSans", "sans-serif"],
      },
      backgroundImage: {
        header: "url('/assets/header.png')",
      },
      colors: {
        dark: "#242536",
        darkGray: "#92929d",
        darkestGray: "#70707b",
        gray: "#e4e4e4",
        black: "#4c4d5e",
        lightGray: "#f6f6f6",
        blue: "#282b57",
        red: "#d73b3b",
        redDark: "#c62a2a",
        massas: "#d73b3b",
        carnes: "#30201e",
        combos: "#e6c864",
        veganos: "#80aa40",
      },
    },
    screens: {
      tablet: "768px",
      // => @media (min-width: 768px) { ... }
      desktop_md: "980px",
      // => @media (min-width: 980px) { ... }
      desktop_lg: "1080px",
      // => @media (min-width: 1080px) { ... }
      desktop_xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
