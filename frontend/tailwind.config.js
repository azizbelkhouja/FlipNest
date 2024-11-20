/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primaryblue": "#048690",
        "lightblue": "#77BDC3",
        "greyblue": "#012A2D",
        "personalgrey": "#59595A",
        "darkblue" : "#1C2C4A",
        "moredarkblue" : "#012A2D"
        //#048690
      }
    },
  },
  plugins: [],
}