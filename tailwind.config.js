/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Courier": ["Courier Prime"],
        "Lato": ["Lato"],
        "Merri" : ["Merriweather"],
        "Dosis" : ["Dosis"],
        "CG" : ["Cormorant+Garamond"],
        "Roboto" : ["Roboto"],
        "Ubuntu" : ["Ubuntu"],
        "Nunito" : ["Nunito"],
        "Cormorant" : ["Cormorant"],


        },
        fontSize: {
          "7xl": "7rem",
          "8xl": "8rem",
          "9xl": "9rem",
          "10xl": "10rem",
          "11xl": "11rem",
          "12xl": "12rem",
          "20xl": "20rem",
      },
    },
  },
  plugins: [],
}
