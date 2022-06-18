/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '160': '40rem',
      },
      width: {
        '128': '32rem',
        '160': '40rem',
        '200': '50rem',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'bounce-little-slow': 'little-bounce 5s infinite',
        'bounce-big-slow': 'big-bounce 5s infinite',
        'scale-slow' : 'little-scale 5s'
      },
      keyframes: {
        'little-bounce': {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' },
        },
        'big-bounce': {
          '0%, 100%': { transform: 'translateY(-80%)' },
          '50%': { transform: 'translateY(0)' },
        },
        'little-scale':{
          transform: 'scale(125%)'
        }
      }
    },
  },
  plugins: [],
}
