/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f4f0',
          100: '#d9e5d9',
          500: '#2d4a2b',
          700: '#1a2e19',
          900: '#0d1a0c',
        },
        clay: {
          300: '#d89966',
          500: '#c67b3e',
          700: '#8b4513',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
