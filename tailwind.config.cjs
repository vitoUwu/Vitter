/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        main: {
          100: 'var(--main-100)',
          200: 'var(--main-200)',
          400: 'var(--main-400)',
          500: 'var(--main-500)',
          800: 'var(--main-800)',
          900: 'var(--main-900)',
        },
        primary: {
          300: 'var(--primary-300)',
          500: 'var(--primary-500)',
        },
        red: {
          600: 'var(--red-600)',
        },
      },
      screens: {
        'screen-100': '440px',
        'screen-200': '840px',
        'screen-300': '1100px',
      },
      gridTemplateColumns: {
        100: '56px 1fr',
        200: '56px 1fr 288px',
        300: '288px 1fr 288px',
      },
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
