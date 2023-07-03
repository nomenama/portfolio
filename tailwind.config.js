/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DC143C",
        "secondary": "#14DCB4"
      },
      backgroundColor: {
        primary: "#DC143C",
        "secondary": "#14DCB4"
      }
    },
  },
  plugins: [],
}
