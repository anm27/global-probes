/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "421px" },

      md: { max: "768px" },

      smd: { max: "1150px" },

      med: "768px",

      xs: "421px",

      lg: "1150px",

      xl: "1280px",

      "2xl": "1536px",

      sml: { max: "490px" },

      mdm: "490px",
    },
    extend: {
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
        600: "600px",
      },
      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
        "100vh": "100vh",
      },

      colors: {
        primaryColor: "#11cbd7",
        primaryDark: "#02c5d1",
        sectionBgColor: "#DCD6D3",
        headingColor: "#1D2125",
        transparent: "#000",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("current", "&.active");
    }),
  ],
};
