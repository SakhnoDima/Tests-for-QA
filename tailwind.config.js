/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    dropShadow: {
      "btn-shadow": "0px 2px 2px rgba(0, 0, 0, 0.10)",
      "form-shadow": "0 4px 15px rgba(2, 23, 42, 0.10)",
    },
    fontSize: {
      sm: "10px",
      sl: "12px",
      s: "14px",
      sxl: "16px",
      ms: "18px",
      m: "20px",
      ml: "22px",
      mxl: "24px",
      ls: "26px",
      lm: "28px",
      l: "30px",
      ll: "32px",
      lxl: "34px",
      xls: "36px",
    },
    fontFamily: {
      mon: ["Montserrat"],
    },
    extend: {
      backgroundImage: {
        mob: "url('/src/images/picMob1x.png')",
        mob2x: "url('/src/images/picMob2x.png')",
        tab: "url('/src/images/picTab.png')",
        tab2x: "url('/src/images/picTab2x.png')",
        desk: "url('/src/images/picDes.png')",
        desk2x: "url('/src/images/picDes2x.png')",
      },
      colors: {
        "bg-container": "#F5F6FB",
        "bg-footer": "#02172A",
        "text-footer": "rgba(255, 255, 255, 0.40)",
        "active-color": "#FF6B09",
        "white-color": "#FFFFFF",
        "active-btn-form": "#14140b",
        "btn-color": "#FAFAFA",
        "input-border": "#CED2D1",
        "active-border": "#3d3f3e",
        "active-link": "#3E29F6",
      },
    },
    screens: {
      tablet: "320px",

      laptop: "768px",

      desktop: "1280px",
    },
  },
  plugins: [require("tailwindcss-retina")],
};
