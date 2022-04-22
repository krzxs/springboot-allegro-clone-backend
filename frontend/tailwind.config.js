module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar-gray': '#343a40',
        'searchBar-gray': '#a5a5a5',
      },
      spacing: {
        '600px': '600px',
      },
      fontFamily: {
        'Inter': ['Inter']
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
