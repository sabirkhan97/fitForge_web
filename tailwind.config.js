/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0E0E0E',
        },
card: {
          DEFAULT: '#181818',
          '2': '#1F1F1F',
        },
        card2: '#1F1F1F',
        ink: '#FFFFFF',
        muted: '#666666',
        muted2: '#888888',
        border: '#272727',
        lime: {
          DEFAULT: '#C8F135',
        },
        warn: '#FF6B6B',
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        '18': '4.5rem',
      },
      borderRadius: {
        '18': '1.125rem',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
