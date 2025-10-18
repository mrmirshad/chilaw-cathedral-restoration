/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cathedral-blue': '#0a2a66',
        'cathedral-gold': '#d4af37',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'script': ['Great Vibes', 'cursive'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
