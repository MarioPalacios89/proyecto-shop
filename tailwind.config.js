/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['"Noto Sans Vithkuqi"', 'sans-serif']
      },
      colors: {
     ...colors
 }
    },
  },
  plugins: [],
}

