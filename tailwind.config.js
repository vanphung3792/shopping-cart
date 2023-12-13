/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/index.html',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '325px',
      'md': '480px',
      'lg': '1440px',
    },
  },
  plugins: [],
}