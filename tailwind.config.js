/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', "sans-serif"],
        gillsans:['"Gill Sans"', "sans-serif"],
        times:['"Times New Roman"', 'Times', 'serif']
      },
    },
  },
  plugins: [],
};
