/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heritage: {
          navy: '#1a2332',
          forest: '#2d4a2b',
          burgundy: '#5d2e2e',
          gold: '#b8935e',
        },
        neutral: {
          cream: '#f8f6f1',
          stone: '#e4e0d7',
          charcoal: '#3a3a3a',
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
