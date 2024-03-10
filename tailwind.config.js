/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { abc: ['Rubik'] },
      fontWeight: {
        'rubik-300': 300,
        'rubik-400': 400,
        'rubik-500': 500,
        'rubik-600': 600,
        'rubik-700': 700,
        'rubik-800': 800,
        'rubik-900': 900,
      },
      colors: {
        primary: '#b14141',
        cream: '#EED6C0',
        darkBlue: '#051e2a',
        someRandomWord: '#5691b2',
      },
    },
  },
  plugins: [],
}
