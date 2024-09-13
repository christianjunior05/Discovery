/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        // Ajouter la police Roboto
        roboto: ['Roboto', 'system-ui'],
      },
      keyframes: {
        'infinite-scroll': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 10s linear infinite',
      },
    }, 
  },
  plugins: [],
};
