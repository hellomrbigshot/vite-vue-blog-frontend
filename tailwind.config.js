module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        '16': '4rem'
      },
      width: {
        '50': '12.5rem',
        '80': '20rem',
        '100': '25rem'
      },
      height: {
        '125': '31.25rem'
      }
    },
  },
  variants: {
    extend: {
      width: ['focus'],
      fontWeight: ['hover'],
      borderWidth: ['hover']
    },
  },
  plugins: [],
}
