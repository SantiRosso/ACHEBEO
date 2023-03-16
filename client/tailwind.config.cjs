/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      height: {
        '82': '330px',
        '100': '516px'
      },
      width: {
        '84': '346px',
        '106': '586px'

      }
    },
  },
  plugins: [],
};
