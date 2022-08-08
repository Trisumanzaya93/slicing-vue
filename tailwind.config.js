/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      open: ["Open Sans, sans-serif"],
    },
    backgroundImage: {
      "banner-class": "url('/src/assets/images/banner-class.png')",
    },
  },
  plugins: [require("daisyui")],
};
