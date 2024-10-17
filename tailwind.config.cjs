/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        purple: '#fff',
        custom: '#fff',
        primary: "#fff",
        secondary: "#7e7e7e",
        tertiary: "#1e1e1e",
        "black-100": "#4e4e4e",
        "black-200": "#2e2e2e",
        "white-100": "#fff",
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
      },
    },
  },
  plugins: [],
};
