module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        '16': '4rem'
      },
      width: {
        '80': '20rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
