/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      HindMadurai: ["Hind Madurai"],
      Montserrat: ["Montserrat"],
    },
    extend: {
      colors: {
        whiteColor: "#ffffff",
        bgColor: "#0a192f",
        inputColor: "#F7F7F8",
      },
    },
  },
  plugins: [],
};
