/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom:['Lato','sans-serif'],
      },
      colors:{
        brand:{
          Default:'#4C3E79',
          Heding:"#222222",
          Input:"#999999",
        }
      }
    },
  },
  plugins: [],
}

