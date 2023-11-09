/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    dropShadow: {
      "btn-shadow": "0px 2px 2px rgba(0, 0, 0, 0.10)",
      "form-shadow": "0px 4px 15px 0px rgba(2, 23, 42, 0.10)",
    },
    fontSize: {
      sm: "10px",
      s: "14px",
    },
    fontFamily: {
      mon: ["Montserrat"],
    },
    extend: {
      colors: {
        "bg-container": "#F5F6FB;",
        "active-color": "#FF6B09",
        "white-color": "#FFFFFF",
        "active-btn-form": "#14140b",
        "btn-color": "#FAFAFA",
        "input-border": "#CED2D1",
        "active-border": "#3d3f3e",
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
