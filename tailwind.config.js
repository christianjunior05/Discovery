/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',],
  theme: {
    extend: {
      fontFamily: {
        // Ajouter la police Roboto
        'roboto': ['Roboto', 'sans-serif'],
        'lato': ["Lato"]
      },
    },
  },
  plugins: [],
}
