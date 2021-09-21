const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0d8187',
        secondary: '#6DB3B7',
    },
    fontFamily: {
      bellota: ['Bellota', 'cursive']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}