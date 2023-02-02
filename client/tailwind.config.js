/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    animationDelay: {
      100: "100ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
    },
  },
  safelist: [
    'animation-delay-100',
    'animation-delay-200',
    'animation-delay-300',
    'animation-delay-400'
  ],
  plugins: [
    require("tailwindcss-animation-delay")
  ],
}
