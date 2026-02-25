/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0F", // Deep Matte Black
        surface: "#111115",    // Secondary Surface
        text: {
          primary: "#F5F5F5",
          secondary: "#A1A1AA",
        },
        accent: {
          DEFAULT: "#10B981", // Emerald
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'light-sweep': 'light-sweep 40s linear infinite',
      },
      keyframes: {
        'light-sweep': {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(200%) skewX(-12deg)' },
        }
      }
    },
  },
  plugins: [],
}
