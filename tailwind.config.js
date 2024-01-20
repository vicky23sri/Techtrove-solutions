/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      fontFamily: {
        custom: ['Kanit', 'sans-serif'],
      },
      backgroundColor: {
        'Logo-Color': 'var(--Logo-Color, #90CC4B)',
      },
      boxShadow: {
        'custom': '0px 0px 15px 0px #45CD58',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        },
      },
    },
  },
  plugins: [],
};


