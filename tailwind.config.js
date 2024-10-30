/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          1: '#00356b'
        },
        yellow: {
          1: '#ffd55a',
          2: '#c4b470',
        },
        gray: {
          1: 'f9f9f9',
          2: '#dddddd',
        }
      },
      fontFamily: {
        sans: ['"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
}