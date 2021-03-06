module.exports = {
  purge: {
    enabled: false,
    content: [
      './layout/*.liquid',
      './templates/*.liquid',
      './sections/*.liquid',
      './snippets/*.liquid',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}