/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "linear-gradient(to bottom left, rgba(0, 255, 50,0.2), rgba(0,0,0,0.8)),url('https://img.ilcdn.fi/SzJMBAEPEWPBhvTkPtwNa87l0zE=/full-fit-in/2048x0/img-s3.ilcdn.fi/f014467c0a25e9b6db01abb7ca0963c3dbe6a3c200ab5e23cd731369f3f97cdd.jpg')"
      },

      dropShadow: {
        'md': '0 4px 3px rgb(10 191 4 / 0.07)',
      },

      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['Clash-Medium']
      },
    },
  },
  plugins: [],
}

