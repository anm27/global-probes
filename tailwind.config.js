/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "421px" },

      sms: { max: "600px" },

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
    spacing: {
      22: "5.5rem",
      px: "1px",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    extend: {
      backgroundImage: {
        "fixed-image": "url('../src/images/fixed-banner.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
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
        "80vh": "80vh",
        "90vh": "90vh",
        "100vh": "100vh",
      },

      colors: {
        primaryColor: "#0279d0",
        primaryDark: "#034a7f",
        sectionBgColor: "#DCD6D3",
        headingColor: "#1D2125",
        transparent: "#000",
        demo1: "#11cbd7",
        demo2: "#0bbcaa",
        demo3: "#356e65",
        demo4: "#253334",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("current", "&.active");
    }),
  ],
};
