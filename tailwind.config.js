/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        "bg-container": "#F5F6FB;",
      },
    },
    screens: {
      tablet: "320px",

      laptop: "768px",

      desktop: "1280px",
    },
  },
  plugins: [],
};
