/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#00FF7F',
          50: '#e6fff2',
          100: '#b3ffd6',
          200: '#80ffb9',
          300: '#4dff9d',
          400: '#1aff80',
          500: '#00FF7F',
          600: '#00cc66',
          700: '#00994d',
          800: '#006633',
          900: '#00331a',
        },
        dark: {
          bg: '#0a0a0a',
          card: '#121212',
          cardHover: '#181818',
          border: '#222222',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
