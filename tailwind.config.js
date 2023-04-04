/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "20px",
      center: true,
    },

    screens: {
      xxs: "355px",
      xs: "415px",
      ...defaultTheme.screens,
    },

    extend: {
      colors: {
        main: "#2c3e50",
      },
      backgroundImage: {
        cloud: "url('cloud.png')",
      },
    },
  },
  plugins: [],
};
