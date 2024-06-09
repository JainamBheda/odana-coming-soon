/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['"Poppins"']
    },
    extend: {
      keyframes: {
        arrow: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          }
        },
        animation: {
          "arrow-move": "arrow 3s infinite",
        }
      }
    },
  },
  plugins: [],
}

