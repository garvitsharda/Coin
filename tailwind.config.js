/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bodyBg: {
          900: "#151C28"
        },
        bgColor: {
          900: "#161D29"
        },
        navbg:{
          800: "#283345",
          900: "#141b2b"
        },
        tabsbG:{
          900: "#111924"
        },
        btnColor: {
          900: "#4AE288"
        },
        msgbg: {
          900: "#1B2838"
        },
        footerBg:{
          900: "#283345"
        }
      }
    },
  },
  plugins: [],
}
