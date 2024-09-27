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
          1: '#01356b',
        },
        yellow: {
          1: '#c4b470',
        }
      }
    },
  },
  plugins: [],
}