/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '112': '28rem',
        '128': '32rem',
        '160': '40rem',
        '200': '50rem',
        '240': '60rem',
        '400': '100rem',
      },
      width: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '200': '50rem',
      },
      minWidth: {
        '3/4': '40rem',
      },
      maxWidth: {
        '144': '36rem',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'bounce-little-slow': 'little-bounce 5s infinite',
        'bounce-big-slow': 'big-bounce 5s infinite'
      },
      keyframes: {
        'little-bounce': {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' },
        },
        'big-bounce': {
          '0%, 100%': { transform: 'translateY(-80%)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
      screens: {
        'mobile': {'min': '375px', 'max': '640px'},
        // => @media (min-width: 375px, max-width: 1040px) { ... }
        'mobile-l': {'min': '375px', 'max': '816px'},
        // => @media (min-width: 375px, max-width: 1040px) { ... }
        'tablet-mobile': {'min': '375px', 'max': '1072px'},
        // => @media (min-width: 375px, max-width: 1040px) { ... }
        'tablet': {'min': '640px', 'max': '1072px'},
        // => @media (min-width: 375px, max-width: 1040px) { ... }
      },
    },
  },
  plugins: [],
}