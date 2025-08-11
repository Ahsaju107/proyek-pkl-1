/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      fontFamily: {
        'primary': ['Poppins', 'sans-serif'],
      },
      inset: {
        '17': '68px',
        '26': '104px'
      }
    },
  },
  plugins: [],
}

