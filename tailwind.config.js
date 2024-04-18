/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#F21414', 
        'custom-orange': '#F6921E', 
      }
    },
    corePlugins: {
      ringColor: true,
    }
  },
  plugins: [],
}

