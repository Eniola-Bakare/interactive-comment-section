/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        veryLightGray: 'hsl(228, 33%, 97%)',
        lightGray: 'hsl(223, 19%, 93%)',
        grayBlue: 'hsl(211, 10%, 45%)',
        darkBlue: 'hsl(212, 24%, 26%)',

        moderateBlue: 'hsl(238, 40%, 52%)',
        softRed: 'hsl(358, 79%, 66%)',
        lightGrayishBlue: 'hsl(239, 57%, 85%)',
        paleRed: 'hsl(357, 100%, 86%)',
      },
      fontFamily: {
        'allText': 'Rubik, sans serif'
      }
    },
  },
  plugins: [],
}
