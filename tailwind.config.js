const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/**/*.{tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: { poppins: 'Poppins', montserrat: 'Montserrat' },
    container: {
      center: true,
      padding: {
        DEFAULT: defaultTheme.spacing[6],
        lg: defaultTheme.spacing[9],
        xl: defaultTheme.spacing[56],
      },
    },
    extend: {
      colors: {
        dark: '#25323d',
        blue: {
          light: '#00d8ff',
        },
        suave: {
          lighter: '#859fb4',
          light: '#62839d',
          medium: 'hsla(207, 14%, 37%, 1)',
        },
      },
      fontSize: {
        xxs: '.625rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
