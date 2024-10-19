/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        white: '#fff',
        "white-100": "#e8e8e8",
        custom: '#fff',
        primary: "#fff",
        secondary: "#7e7e7e",
        black: "#000",
        "black-000": "#0e0e0e",
        "black-100": "#1e1e1e",
        "black-200": "#2e2e2e",
        "black-300": "#3e3e3e",
        "black-400": "#4e4e4e",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1e1e1e",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        'custom-gradient': 'linear-gradient(to bottom, #000, #000)',
        'hero-gradient': 'linear-gradient(to bottom, #fff, #1e1e1e)',
      },
    },
  },
  plugins: [],
};
