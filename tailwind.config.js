/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "20px",
      center: true,
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
