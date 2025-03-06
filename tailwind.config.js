/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bluee": "#0a192f",
        "grayy": "#55627c",
        "whitee": "#c2ccec",
        "silver": "#3a958b",
        "sub": "#5c6884",


        "milkey": "#0e9163",
        "milk": "#3caa83",
        "blackone": "#101010",
        "blacktwo": "#161616",
      },
      backgroundImage: {
        "background": "url('/images/one.jpg')",
      }
    },
  },
  plugins: [],
}

