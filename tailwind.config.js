/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "bgcolor":"#121212"
      },
      backgroundImage: {
        "gradient-effect": "linear-gradient(#121212, #ffff0000, #121212)",
      },
      height: {
        "main-h": "70vh",
      },
    },
  },
  plugins: [],
};
