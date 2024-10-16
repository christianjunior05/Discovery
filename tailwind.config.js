/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        // Ajouter la police Roboto
        roboto: ['Roboto', 'system-ui'],
      },
    }, 
  },
  plugins: [],
};
