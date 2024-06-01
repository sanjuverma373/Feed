/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightCreem: '#DCFCE7',
        darkBrown: '#052E16',
        lightSky: '#E4F3E9',
        lightGreen: '#166534',
        darkCreem: '#71957F',
        darkBlack: '#0C0A09',
        lightBrown: '#44403C',
        lightWhite: '#F0FDF4',
        lightPink: '#F1DBDB',
        darkSky: '#CBECD6',
        lightBrown2: '#345742',
        lightSky2: '#86AA93',
        lightSky3: '#C4DFCE',
      },
      fontFamily:{
        Inter: "Inter, sans-serif",
      }
    },
  },
  plugins: [],
}

