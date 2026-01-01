/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clay: {
          50: '#fef5ee',
          100: '#fde8d7',
          200: '#f5d5b8',
          300: '#e8b892',
          400: '#d89966',
          500: '#c67b3e',
          600: '#a86334',
          700: '#8b4513',
          800: '#6b3410',
          900: '#4a2508',
        },
        cream: '#faf8f3',
        sand: '#e8dcc4',
        forest: '#2d4a2b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
