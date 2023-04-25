/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-purple": "#7284FF",
      },
      fontFamily: {
        "roboto-font": ["Roboto"],
      },
      fontSize: {
        "3vw": "3vw",
        "2vw": "2vw",
        "1.5vw": "1.5vw",
        "1vw": "1vw",
        "0.75vw": "0.75vw",
        "0.5vw": "0.5vw",
      },
    },
  },
  plugins: [],
}
