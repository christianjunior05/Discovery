/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',],
  theme: {
    extend: {
      fontFamily: {
        // Ajouter la police Roboto
        roboto: ['Roboto' , "system-ui"],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
    },
  },
  plugins: [],
}
}
