/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        "darkP": "hsl(278, 68%, 11%)",
        "darkGP": "hsl(279, 6%, 55%)",
        "lightGP": "hsl(270, 3%, 87%)"
      }
    },
  },
  plugins: [],
}

