const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./components/**/*.tsx'],
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
          lightest: '#F8F9FA',
          lighter: '#859fb4',
          light: '#62839d',
          medium: 'hsla(207, 14%, 37%, 1)',
          clear: '#486f8e',
          opaque: '#6a92b4',
          dark: '#2a343c',
          blue: '#40aaff',
        },
      },
      fontSize: {
        xxs: '.625rem',
      },
    },
  },
};
